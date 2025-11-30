import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center p-4">
      <SignupForm />
    </div>
  )
}
