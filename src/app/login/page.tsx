import { LoginForm } from '@/components/auth/forms/login'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
    return (
    <Card className="w-full max-w-md mx-auto my-5">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
        <LoginForm />
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link className="underline" href="/register">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    )
}