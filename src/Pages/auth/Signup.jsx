import Lottie from "lottie-react"
import animation from '../../assets/animations/LhVtXP6VwX'
import { LoginForm } from "../../components/login-form"
export default function Signup() {
  return (
    <>

 <main className="dark:bg-slate-900 md:min-h-screen md:flex md:items-center md:justify-center lg:relative">
  <section className="container grid w-full grid-cols-1 gap-10 py-6 md:grid-cols-2 md:py-10 lg:absolute -top-11">
    <div className="w-full max-w-md mx-auto">
      <LoginForm isSignup={true} />
    </div>

    <div className="hidden md:flex items-center justify-center">
      <Lottie animationData={animation} loop style={{ width: "100%", height: "400px" }} />
    </div>
  </section>
</main>

 </>
  )
}
