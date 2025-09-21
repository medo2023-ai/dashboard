import Lottie from "lottie-react"
import animation from '../../assets/animations/LhVtXP6VwX'
import { LoginForm } from "../../components/login-form"
export default function Signup() {
  return (
    <>

 <main className="dark:bg-slate-900 md:min-h-screen md:flex md:items-center md:justify-center  ">
 
  <section className="container grid w-full grid-cols-1 gap-10 py-6 md:grid-cols-2 md:py-10  lg:relative ">
    <div className="lg:h-screen lg:relative ">
  <div className="w-full max-w-md mx-auto   lg:absolute -top-10">
      <LoginForm isSignup={true} />
    </div> </div>

    <div className="hidden md:flex items-start justify-center pt-5">
      <Lottie animationData={animation} loop style={{ width: "100%", height: "400px" }} />
    </div>
  </section>
</main>

 </>
  )
}
