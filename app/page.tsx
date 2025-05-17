"use client"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCard } from "@/components/stats-card"
import { DataTable } from "@/components/data-table"
import { RecentActivity } from "@/components/recent-activity"
import { dashboardData } from "@/lib/data"

export default function Dashboard() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Animation variants for page elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <DashboardLayout>
      <motion.div className="p-6 space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Your analytics overview for the current period</p>
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
          <StatsCard title="Total Revenue" value="$45,231.89" change="+20.1%" trend="up" />
          <StatsCard title="Active Users" value="2,342" change="+10.3%" trend="up" />
          <StatsCard title="Conversion Rate" value="3.6%" change="-0.5%" trend="down" />
          <StatsCard title="Avg. Session" value="2m 56s" change="+12.4%" trend="up" />
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={itemVariants}>
          <motion.div
            className="col-span-2 rounded-xl border bg-card text-card-foreground shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <h3 className="text-lg font-medium">Revenue Over Time</h3>
              <div className="h-[300px]">
                <LineChart
                  data={dashboardData.revenueData}
                  categories={["Revenue"]}
                  index="month"
                  colors={["#0ea5e9"]}
                  valueFormatter={(value) => `$${value.toLocaleString()}`}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border bg-card text-card-foreground shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <h3 className="text-lg font-medium">Traffic Sources</h3>
              <div className="h-[300px]">
                <PieChart
                  data={dashboardData.trafficData}
                  category="value"
                  index="name"
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-2" variants={itemVariants}>
          <motion.div
            className="rounded-xl border bg-card text-card-foreground shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <h3 className="text-lg font-medium">User Engagement</h3>
              <div className="h-[300px]">
                <BarChart
                  data={dashboardData.engagementData}
                  categories={["Views", "Likes", "Comments"]}
                  index="day"
                  colors={["#0ea5e9", "#8b5cf6", "#10b981"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border bg-card text-card-foreground shadow"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="p-6">
              <h3 className="text-lg font-medium">Recent Activity</h3>
              <RecentActivity activities={dashboardData.recentActivities} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Top Performing Pages</h3>
              <DataTable data={dashboardData.pagesData} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}
