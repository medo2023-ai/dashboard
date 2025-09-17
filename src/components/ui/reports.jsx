import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, FileSpreadsheet } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

// Sample Data
const data = [
  { month: "Jan", sales: 400, revenue: 240 },
  { month: "Feb", sales: 300, revenue: 139 },
  { month: "Mar", sales: 500, revenue: 320 },
  { month: "Apr", sales: 200, revenue: 180 },
  { month: "May", sales: 600, revenue: 390 },
]

const pieData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
]

// ✅ Pie Labels auto adapt to dark/light mode
const renderCustomizedLabel = (props) => {
  const { x, y, name, value, textAnchor } = props
  const isDark = document.documentElement.classList.contains("dark")
  const fillColor = isDark ? "#f9fafb" : "#111827"

  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      dominantBaseline="central"
      fill={fillColor}
      fontSize={12}
      fontWeight="500"
    >
      {`${name} (${value})`}
    </text>
  )
}

export default function Reports() {
  // ✅ Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reports")
    XLSX.writeFile(workbook, "Reports.xlsx")
  }

  // ✅ Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF()
    doc.setTextColor(0, 0, 0)
    doc.text("Reports", 14, 16)
    autoTable(doc, {
      startY: 30,
      head: [["Month", "Sales", "Revenue"]],
      body: data.map((d) => [d.month, d.sales, d.revenue]),
    })
    doc.save("Reports.pdf")
  }

  // ✅ Styles for charts
  const isDark = document.documentElement.classList.contains("dark")
  const chartGridStroke = isDark ? "#4b5563" : "#d1d5db"
  const chartAxisStroke = isDark ? "#e5e7eb" : "#374151"
  const legendStyle = { color: isDark ? "#f9fafb" : "#111827" }
  const tooltipStyle = {
    backgroundColor: isDark ? "#1f2937" : "#f9fafb",
    borderColor: isDark ? "#374151" : "#d1d5db",
    color: isDark ? "#f9fafb" : "#111827",
  }

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-900 transition-colors duration-300 text-black dark:text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-gray-500 dark:text-gray-300">
            Track your sales and revenue insights
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={exportToPDF} variant="outline">
            <FileDown className="mr-2 h-4 w-4" /> PDF
          </Button>
          <Button onClick={exportToExcel} variant="outline">
            <FileSpreadsheet className="mr-2 h-4 w-4" /> Excel
          </Button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Line Chart */}
        <Card className="bg-white dark:bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid stroke={chartGridStroke} strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke={chartAxisStroke} />
                <YAxis stroke={chartAxisStroke} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={legendStyle} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="bg-white dark:bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>Sales vs Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid stroke={chartGridStroke} strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke={chartAxisStroke} />
                <YAxis stroke={chartAxisStroke} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={legendStyle} />
                <Bar dataKey="sales" fill="#6366f1" barSize={40}>
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fillOpacity={0.9} />
                  ))}
                </Bar>
                <Bar dataKey="revenue" fill="#22c55e" barSize={40}>
                  {data.map((_, index) => (
                    <Cell key={`cell2-${index}`} fillOpacity={0.9} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="bg-white dark:bg-gray-800 border-none pb-[30px]">
          <CardHeader>
            <CardTitle>Product Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label={renderCustomizedLabel}
                >
                  <Cell fill="#6366f1" />
                  <Cell fill="#22c55e" />
                  <Cell fill="#facc15" />
                  <Cell fill="#f97316" />
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
