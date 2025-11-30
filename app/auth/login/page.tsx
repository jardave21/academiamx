import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center p-4">
      <LoginForm />
    </div>
  )
}
