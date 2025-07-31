export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          subscription_tier: "starter" | "pro" | "business"
          subscription_status: "active" | "inactive" | "cancelled"
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          subscription_tier?: "starter" | "pro" | "business"
          subscription_status?: "active" | "inactive" | "cancelled"
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          subscription_tier?: "starter" | "pro" | "business"
          subscription_status?: "active" | "inactive" | "cancelled"
        }
      }
      websites: {
        Row: {
          id: string
          user_id: string
          domain: string
          status: "pending" | "active" | "error"
          ai_analysis: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          domain: string
          status?: "pending" | "active" | "error"
          ai_analysis?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          domain?: string
          status?: "pending" | "active" | "error"
          ai_analysis?: any
          created_at?: string
          updated_at?: string
        }
      }
      domains: {
        Row: {
          id: string
          user_id: string
          domain_name: string
          status: "pending" | "active" | "expired"
          registrar: string
          expires_at: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          domain_name: string
          status?: "pending" | "active" | "expired"
          registrar?: string
          expires_at: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          domain_name?: string
          status?: "pending" | "active" | "expired"
          registrar?: string
          expires_at?: string
          created_at?: string
        }
      }
      website_analytics: {
        Row: {
          id: string
          website_id: string
          metric_type: string
          metric_value: number
          recorded_at: string
        }
        Insert: {
          id?: string
          website_id: string
          metric_type: string
          metric_value: number
          recorded_at?: string
        }
        Update: {
          id?: string
          website_id?: string
          metric_type?: string
          metric_value?: number
          recorded_at?: string
        }
      }
      ai_suggestions: {
        Row: {
          id: string
          website_id: string
          suggestion_type: string
          title: string
          description: string
          priority: "low" | "medium" | "high"
          status: "pending" | "applied" | "dismissed"
          created_at: string
        }
        Insert: {
          id?: string
          website_id: string
          suggestion_type: string
          title: string
          description: string
          priority?: "low" | "medium" | "high"
          status?: "pending" | "applied" | "dismissed"
          created_at?: string
        }
        Update: {
          id?: string
          website_id?: string
          suggestion_type?: string
          title?: string
          description?: string
          priority?: "low" | "medium" | "high"
          status?: "pending" | "applied" | "dismissed"
          created_at?: string
        }
      }
    }
  }
}
