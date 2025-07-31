-- Create users table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscription_tier TEXT DEFAULT 'starter' CHECK (subscription_tier IN ('starter', 'pro', 'business')),
  subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'inactive', 'cancelled'))
);

-- Create websites table
CREATE TABLE IF NOT EXISTS public.websites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  domain TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'error')),
  ai_analysis JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create domains table
CREATE TABLE IF NOT EXISTS public.domains (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  domain_name TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'expired')),
  registrar TEXT DEFAULT 'aether-host',
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create website_analytics table for tracking performance
CREATE TABLE IF NOT EXISTS public.website_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  website_id UUID REFERENCES public.websites(id) ON DELETE CASCADE NOT NULL,
  metric_type TEXT NOT NULL, -- 'uptime', 'response_time', 'page_views', etc.
  metric_value NUMERIC NOT NULL,
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ai_suggestions table for storing AI recommendations
CREATE TABLE IF NOT EXISTS public.ai_suggestions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  website_id UUID REFERENCES public.websites(id) ON DELETE CASCADE NOT NULL,
  suggestion_type TEXT NOT NULL, -- 'performance', 'seo', 'design', 'content'
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'applied', 'dismissed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security Policies
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own websites" ON public.websites
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own domains" ON public.domains
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own analytics" ON public.website_analytics
  FOR SELECT USING (
    auth.uid() IN (
      SELECT user_id FROM public.websites WHERE id = website_analytics.website_id
    )
  );

CREATE POLICY "Users can view own AI suggestions" ON public.ai_suggestions
  FOR ALL USING (
    auth.uid() IN (
      SELECT user_id FROM public.websites WHERE id = ai_suggestions.website_id
    )
  );

-- Enable RLS on all tables (excluding auth.users which is managed by Supabase)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.websites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_suggestions ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_websites_user_id ON public.websites(user_id);
CREATE INDEX IF NOT EXISTS idx_domains_user_id ON public.domains(user_id);
CREATE INDEX IF NOT EXISTS idx_websites_status ON public.websites(status);
CREATE INDEX IF NOT EXISTS idx_domains_status ON public.domains(status);
CREATE INDEX IF NOT EXISTS idx_analytics_website_id ON public.website_analytics(website_id);
CREATE INDEX IF NOT EXISTS idx_analytics_recorded_at ON public.website_analytics(recorded_at);
CREATE INDEX IF NOT EXISTS idx_suggestions_website_id ON public.ai_suggestions(website_id);
CREATE INDEX IF NOT EXISTS idx_suggestions_status ON public.ai_suggestions(status);

-- Create functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for websites table
CREATE TRIGGER update_websites_updated_at 
    BEFORE UPDATE ON public.websites 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create a function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
