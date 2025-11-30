import { Button } from "@/components/ui/button"
import { handleSignOut } from "./logout-action"

export function LogoutButton() {
    return (
        <form action={handleSignOut}>
            <Button variant="ghost" type="submit">
                Cerrar Sesión
            </Button>
        </form>
    )
}
