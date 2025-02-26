
import { Card } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, Activity } from "lucide-react";

export function DashboardContent() {
  const stats = [
    {
      title: "Active Projects",
      value: "12",
      icon: BarChart3,
      trend: "+2.5%",
      description: "vs. last month",
    },
    {
      title: "Network Growth",
      value: "2,345",
      icon: Users,
      trend: "+15.2%",
      description: "vs. last month",
    },
    {
      title: "Revenue Growth",
      value: "$12.5k",
      icon: TrendingUp,
      trend: "+7.8%",
      description: "vs. last month",
    },
    {
      title: "AI Insights",
      value: "85",
      icon: Activity,
      trend: "+32.1%",
      description: "vs. last month",
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-background px-4 py-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{stat.title}</span>
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold">{stat.value}</span>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-green-500">{stat.trend}</span>
                  <span className="text-sm text-muted-foreground">{stat.description}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <div className="mt-4">
              <p className="text-muted-foreground">Your recent business activities will appear here.</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">AI Recommendations</h2>
            <div className="mt-4">
              <p className="text-muted-foreground">
                Personalized AI insights and recommendations will appear here.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
