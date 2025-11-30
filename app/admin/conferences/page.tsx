"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { mockConferences, mockProfessors } from "@/lib/mock-data"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminConferencesPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gestión de Conferencias</h1>
          <p className="text-muted-foreground mt-1">Administra y programa nuevas conferencias</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Conferencia
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Crear Nueva Conferencia</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {/* Conferences Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Profesor</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockConferences.map((conference) => {
              const professor = mockProfessors.find((p) => p.id === conference.professorId)
              const date = new Date(conference.scheduledDate)
              return (
                <TableRow key={conference.id}>
                  <TableCell className="font-medium">{conference.title}</TableCell>
                  <TableCell>{professor?.name}</TableCell>
                  <TableCell>{date.toLocaleDateString("es-ES")}</TableCell>
                  <TableCell>${conference.price}</TableCell>
                  <TableCell>
                    <Badge className={conference.isLive ? "bg-red-500 text-white" : "bg-green-500 text-white"}>
                      {conference.isLive ? "EN VIVO" : "Programado"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/conference/${conference.id}`}>
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
