"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Mail } from "lucide-react"

const mockUsers = [
  {
    id: "1",
    name: "Juan García",
    email: "juan@example.com",
    role: "student",
    joinedDate: "2024-01-15",
    purchases: 2,
  },
  {
    id: "2",
    name: "María López",
    email: "maria@example.com",
    role: "student",
    joinedDate: "2024-02-10",
    purchases: 1,
  },
  {
    id: "3",
    name: "Carlos Mendoza",
    email: "carlos@example.com",
    role: "professor",
    joinedDate: "2024-01-01",
    purchases: 0,
  },
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Gestión de Usuarios</h1>
        <p className="text-muted-foreground mt-1">Administra estudiantes y profesores</p>
      </div>

      {/* Users Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Se Unió</TableHead>
              <TableHead>Compras</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>
                  <a href={`mailto:${user.email}`} className="flex items-center gap-2 hover:text-primary">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </a>
                </TableCell>
                <TableCell>
                  <Badge className={user.role === "professor" ? "bg-accent text-accent-foreground" : "bg-secondary"}>
                    {user.role === "professor" ? "Profesor" : "Estudiante"}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(user.joinedDate).toLocaleDateString("es-ES")}</TableCell>
                <TableCell>{user.purchases}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
