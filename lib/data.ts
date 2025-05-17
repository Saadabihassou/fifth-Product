// Sample data for the dashboard

// Revenue data for line chart
const revenueData = [
  { month: "Jan", Revenue: 4000 },
  { month: "Feb", Revenue: 6000 },
  { month: "Mar", Revenue: 5500 },
  { month: "Apr", Revenue: 7500 },
  { month: "May", Revenue: 8500 },
  { month: "Jun", Revenue: 9000 },
  { month: "Jul", Revenue: 10000 },
  { month: "Aug", Revenue: 11000 },
  { month: "Sep", Revenue: 10500 },
  { month: "Oct", Revenue: 12000 },
  { month: "Nov", Revenue: 13000 },
  { month: "Dec", Revenue: 14000 },
]

// Traffic sources data for pie chart
const trafficData = [
  { name: "Direct", value: 4000 },
  { name: "Organic", value: 3000 },
  { name: "Social", value: 2000 },
  { name: "Referral", value: 1500 },
  { name: "Email", value: 1000 },
]

// User engagement data for bar chart
const engagementData = [
  { day: "Mon", Views: 500, Likes: 300, Comments: 100 },
  { day: "Tue", Views: 600, Likes: 400, Comments: 150 },
  { day: "Wed", Views: 800, Likes: 500, Comments: 200 },
  { day: "Thu", Views: 700, Likes: 450, Comments: 180 },
  { day: "Fri", Views: 900, Likes: 600, Comments: 250 },
  { day: "Sat", Views: 1000, Likes: 700, Comments: 300 },
  { day: "Sun", Views: 1200, Likes: 800, Comments: 350 },
]

// Top performing pages data for table
const pagesData = [
  {
    id: "1",
    title: "Homepage",
    views: 45231,
    conversion: "3.2%",
    revenue: "$12,500",
  },
  {
    id: "2",
    title: "Product Listing",
    views: 32456,
    conversion: "2.8%",
    revenue: "$9,800",
  },
  {
    id: "3",
    title: "Blog Post: Ultimate Guide",
    views: 28765,
    conversion: "4.1%",
    revenue: "$7,600",
  },
  {
    id: "4",
    title: "Pricing Page",
    views: 21543,
    conversion: "5.2%",
    revenue: "$6,400",
  },
  {
    id: "5",
    title: "About Us",
    views: 18976,
    conversion: "1.8%",
    revenue: "$3,200",
  },
  {
    id: "6",
    title: "Contact Page",
    views: 15432,
    conversion: "2.3%",
    revenue: "$2,800",
  },
]

// Recent activities data
const recentActivities = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "/images/avatar.png",
      initials: "JD",
    },
    action: "published a new",
    target: "blog post",
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
  },
  {
    id: "2",
    user: {
      name: "Sarah Johnson",
      avatar: "/images/avatar.png",
      initials: "SJ",
    },
    action: "updated the",
    target: "pricing page",
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
  },
  {
    id: "3",
    user: {
      name: "Mike Wilson",
      avatar: "/images/avatar.png",
      initials: "MW",
    },
    action: "added a new",
    target: "product feature",
    timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
  },
  {
    id: "4",
    user: {
      name: "Emily Brown",
      avatar: "/images/avatar.png",
      initials: "EB",
    },
    action: "responded to a",
    target: "customer inquiry",
    timestamp: new Date(Date.now() - 1000 * 60 * 180), // 3 hours ago
  },
]

export const dashboardData = {
  revenueData,
  trafficData,
  engagementData,
  pagesData,
  recentActivities,
}
