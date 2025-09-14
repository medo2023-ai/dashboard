import { LoginForm } from "@/components/login-form"
import Lottie from "lottie-react"
import animation from '../../assets/animations/LhVtXP6VwX'
export default function Signin() {
  return (
    <main className="dark:bg-slate-900  " >
  <section className="container  grid  w-full grid-cols-1 items-center justify-center gap-10 py-6 md:grid-cols-2 md:py-10">
  <div className="w-full max-w-md mx-auto">
        <LoginForm isSignup={false} />
  </div>

  <div className="hidden md:flex items-center justify-center">
    <Lottie animationData={animation} loop style={{ width: "100%", height: "400px" }} />
  </div>
</section>

 </main>
  )
}
