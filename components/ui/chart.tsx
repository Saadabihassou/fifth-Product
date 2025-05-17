import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

interface ChartProps {
  data: any
  categories: string[]
  index: string
  colors: string[]
  valueFormatter: (value: number) => string
  className?: string
}

export function BarChart({ data, categories, index, colors, valueFormatter, className }: ChartProps) {
  const chartData = {
    labels: data.map((item: any) => item[index]),
    datasets: categories.map((category, i) => ({
      label: category,
      data: data.map((item: any) => item[category]),
      backgroundColor: colors[i],
    })),
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || ""

            if (label) {
              label += ": "
            }
            if (context.parsed.y !== null) {
              label += valueFormatter(context.parsed.y)
            }
            return label
          },
        },
      },
    },
  }

  return <Bar data={chartData} options={options} className={className} />
}

export function LineChart({ data, categories, index, colors, valueFormatter, className }: ChartProps) {
  const chartData = {
    labels: data.map((item: any) => item[index]),
    datasets: categories.map((category, i) => ({
      label: category,
      data: data.map((item: any) => item[category]),
      borderColor: colors[i],
      backgroundColor: colors[i],
    })),
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || ""

            if (label) {
              label += ": "
            }
            if (context.parsed.y !== null) {
              label += valueFormatter(context.parsed.y)
            }
            return label
          },
        },
      },
    },
  }

  return <Line data={chartData} options={options} className={className} />
}

interface PieChartProps {
  data: any
  category: string
  index: string
  valueFormatter: (value: number) => string
  className?: string
}

export function PieChart({ data, category, index, valueFormatter, className }: PieChartProps) {
  const chartData = {
    labels: data.map((item: any) => item[index]),
    datasets: [
      {
        label: category,
        data: data.map((item: any) => item[category]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.label || ""

            if (label) {
              label += ": "
            }
            if (context.parsed !== null) {
              label += valueFormatter(context.parsed)
            }
            return label
          },
        },
      },
    },
  }

  return <Pie data={chartData} options={options} className={className} />
}
