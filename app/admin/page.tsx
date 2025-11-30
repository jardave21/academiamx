"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { mockCourses, mockConferences } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, LineChart, Line } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, FileText, DollarSign, TrendingUp, Plus } from "lucide-react"

const chartData = [
  { month: "Ene", ventas: 2400, registros: 2210 },
  { month: "Feb", ventas: 3210, registros: 2290 },
  { month: "Mar", ventas: 2290, registros: 2000 },
  { month: "Abr", ventas: 2390, registros: 2181 },
  { month: "May", ventas: 2490, registros: 2500 },
  { month: "Jun", ventas: 2590, registros: 2100 },
]

export default function AdminDashboard() {
  const totalRevenue =
    (mockCourses.reduce((sum, c) => sum + c.price, 0) + mockConferences.reduce((sum, c) => sum + c.price, 0)) * 10

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard de Administración</h1>
          <p className="text-muted-foreground mt-1">Bienvenido, Administrador</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Ingresos Totales</p>
              <p className="text-3xl font-bold text-primary">${(totalRevenue / 1000).toFixed(1)}K</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Cursos Activos</p>
              <p className="text-3xl font-bold text-primary">{mockCourses.length}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Conferencias</p>
              <p className="text-3xl font-bold text-primary">{mockConferences.length}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Estudiantes</p>
              <p className="text-3xl font-bold text-primary">1,250+</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Ventas Mensuales</h3>
          <ChartContainer
            config={{
              ventas: {
                label: "Ventas",
                color: "hsl(var(--color-primary))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="ventas" stroke="var(--color-primary)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Registros Mensuales</h3>
          <ChartContainer
            config={{
              registros: {
                label: "Registros",
                color: "hsl(var(--color-accent))",
              },
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="registros" fill="var(--color-accent)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-3">Gestión de Cursos</h3>
          <p className="text-muted-foreground text-sm mb-4">Crea, edita y administra tus cursos</p>
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href="/admin/courses">
              <Plus className="w-4 h-4 mr-2" />
              Ir a Cursos
            </Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-lg mb-3">Gestión de Conferencias</h3>
          <p className="text-muted-foreground text-sm mb-4">Programa y administra tus eventos</p>
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href="/admin/conferences">
              <Plus className="w-4 h-4 mr-2" />
              Ir a Conferencias
            </Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-lg mb-3">Gestión de Usuarios</h3>
          <p className="text-muted-foreground text-sm mb-4">Administra estudiantes y profesores</p>
          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href="/admin/users">
              <Plus className="w-4 h-4 mr-2" />
              Ir a Usuarios
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  )
}
