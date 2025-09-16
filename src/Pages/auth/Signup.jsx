import Lottie from "lottie-react"
import animation from '../../assets/animations/LhVtXP6VwX'
import { LoginForm } from "../../components/login-form"
export default function Signup() {
  return (
    <>
  <main className="dark:bg-slate-900  md:relative" >
  <section className="container  grid  w-full  md:absolute -top-4   grid-cols-1 items-center py-6  md:pb-1 md:pt-0  justify-center gap-10  md:grid-cols-2 ">
  <div className="w-full max-w-md mx-auto   ">
        <LoginForm isSignup={true} />
  </div>


  <div className="hidden md:flex items-center justify-center ">
    <Lottie animationData={animation} loop style={{ width: "100%", height: "400px" }} />
  </div>
</section>

 </main>

    
    </>
  )
}
