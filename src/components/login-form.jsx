import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

 export function LoginForm() {
  return (
   

    <Card className="shadow-lg border rounded-2xl dark:bg-slate-800 border-none">
  <CardHeader>
    <CardTitle className="text-2xl font-bold text-center dark:text-white">Welcome Back 👋</CardTitle>
    <CardDescription className="text-center dark:text-white">
      Enter your details to access your account
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form className="space-y-6">
      <div className="grid gap-2">
       
        <Label htmlFor="email" className="w-full text-left dark:text-white">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required /> </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className='dark:text-white'>Password</Label>
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot password?
          </a>
        </div>
        <Input id="password" type="password" required />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-indigo-700">
        Login
      </Button>

   
    </form>

    <div className="mt-6 text-center text-sm">
      Don’t have an account?{" "}
      <Link to="/signup" className="font-medium text-primary hover:underline">
        Sign up
      </Link>
    </div>
  </CardContent>
</Card>


  );
}
