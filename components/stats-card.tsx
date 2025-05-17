"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
}

export function StatsCard({ title, value, change, trend }: StatsCardProps) {
  return (
    <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{value}</p>
              <div className={`flex items-center text-sm ${trend === "up" ? "text-emerald-500" : "text-rose-500"}`}>
                {trend === "up" ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
                {change}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
