"use client"

import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusIcon, GlobeIcon, ServerIcon, CreditCardIcon } from "lucide-react"

export default function Dashboard() {
  const [websites, setWebsites] = useState([])
  const [domains, setDomains] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demo
    setWebsites([
      {
        id: "1",
        domain: "myawesomesite.com",
        status: "active",
        created_at: "2025-01-01",
      },
    ])
    setDomains([
      {
        id: "1",
        domain_name: "myawesomesite.com",
        status: "active",
        expires_at: "2026-01-01",
      },
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          New Website
        </Button>
      </div>

      <Tabs defaultValue="websites" className="space-y-6">
        <TabsList>
          <TabsTrigger value="websites">Websites</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="websites" className="space-y-4">
          <div className="grid gap-4">
            {websites.map((website: any) => (
              <Card key={website.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="h-5 w-5" />
                    <CardTitle>{website.domain}</CardTitle>
                  </div>
                  <Badge variant={website.status === "active" ? "default" : "secondary"}>{website.status}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Created: {new Date(website.created_at).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                      <Button variant="outline" size="sm">
                        Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="domains" className="space-y-4">
          <div className="grid gap-4">
            {domains.map((domain: any) => (
              <Card key={domain.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-5 w-5" />
                    <CardTitle>{domain.domain_name}</CardTitle>
                  </div>
                  <Badge variant={domain.status === "active" ? "default" : "secondary"}>{domain.status}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Expires: {new Date(domain.expires_at).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Renew
                      </Button>
                      <Button variant="outline" size="sm">
                        DNS Settings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCardIcon className="h-5 w-5" />
                Billing & Subscription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Current Plan:</span>
                  <Badge>Starter - $10/month</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Next Billing Date:</span>
                  <span>February 1, 2025</span>
                </div>
                <Button>Upgrade Plan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
