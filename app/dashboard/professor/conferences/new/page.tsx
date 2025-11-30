import { createConference } from "../actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewConferencePage() {
    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Crear Nueva Conferencia</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={createConference} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Título de la Conferencia</Label>
                            <Input id="title" name="title" required placeholder="Ej. Futuro de la IA" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Descripción</Label>
                            <Textarea
                                id="description"
                                name="description"
                                required
                                placeholder="Describe el contenido de la conferencia..."
                                className="min-h-[100px]"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Precio ($)</Label>
                                <Input id="price" name="price" type="number" min="0" step="0.01" required placeholder="0.00" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="duration">Duración (minutos)</Label>
                                <Input id="duration" name="duration" type="number" min="1" required placeholder="60" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="scheduledDate">Fecha y Hora Programada</Label>
                            <Input id="scheduledDate" name="scheduledDate" type="datetime-local" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="videoUrl">Link de la Reunión/Video (Opcional)</Label>
                            <Input id="videoUrl" name="videoUrl" type="url" placeholder="https://meet.google.com/..." />
                            <p className="text-xs text-muted-foreground">
                                Puedes agregar el link de la reunión ahora o después.
                            </p>
                        </div>

                        <Button type="submit" className="w-full">
                            Crear Conferencia
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
