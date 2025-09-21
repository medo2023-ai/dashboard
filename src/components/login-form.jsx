import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import signInSchema from "@/schemas/SigninSchema";
import signUpSchema from "@/schemas/SignupSchema";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
export function LoginForm({ isSignup = false }) {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: isSignup ? signUpSchema : signInSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      if (isSignup) {
  toast.success("Account created successfully!");
    setTimeout(() => {
    navigate("/auth/signin");
  }, 1200); 
      } else {
          localStorage.setItem("token", "mocked_token_123456");
          toast.success("Logged in successfully!");
           setTimeout(() => {
   navigate("/home");
  }, 1200); 
         }

    },
  });
  return (
    <Card className="shadow-lg border rounded-2xl   dark:bg-slate-800 border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center dark:text-white">
          {" "}
          {isSignup ? "Create Account " : "Welcome Back "}
        </CardTitle>
        <CardDescription className="text-center dark:text-white">
          {isSignup
            ? "Enter your details to create a new account"
            : "Enter your details to access your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {isSignup && (
            <div className="grid gap-2">
              <Label
                htmlFor="name"
                className="w-full text-left dark:text-white"
              >
                {" "}
                Name{" "}
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="salsabeel"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" dark:text-white dark:placeholder-gray-400 "
              />{" "}
              {formik.errors.name && formik.touched.name && (
                <p className="text-red-600 text-sm text-left">
                  {formik.errors.name}
                </p>
              )}
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="email" className="w-full text-left dark:text-white">
              Email{" "}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className=" dark:text-white dark:placeholder-gray-400 w-full"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-600 text-sm text-left">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="dark:text-white">
                Password{" "}
              </Label>
              {!isSignup && (
                <Link
                  to=""
                  className="text-sm text-primary hover:underline dark:text-white"
                >
                  Forgot password?
                </Link>
              )}
            </div>
            <Input
              id="password"
              type="password"
              required  placeholder='Password (Aa1@…)'
              className=" dark:text-white dark:placeholder-gray-400 w-full"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />{" "}
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-600 text-sm text-left">
                {formik.errors.password}
              </p>
            )}
          </div>

          {isSignup && (
            <div className="grid gap-2">
              <Label
                htmlFor="confirmPassword"
                className="w-full text-left dark:text-white"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"  placeholder='Confirm password'
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                className=" dark:text-white dark:placeholder-gray-400"
              />{" "}
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="text-red-600 text-sm text-left">
                   {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-[#2316ab] dark:text-white hover:bg-[#1f149a] dark:bg-[#2316ab]"
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        {/* <div className="mt-6 text-center text-sm dark:text-white">
          {isSignup ? (
            <>
              {" "}
              Already have an account?{" "}
              <Link
                to="/auth/signin"
                className="font-medium hover:underline"
              >
                Login
              </Link>
            </>
          ) : ( <>
              {" "}
              Don’t have an account?{" "}
              <Link
                to="/auth/signup"
                className="font-medium hover:underline"
              >
                Sign up{" "}
              </Link>
            </>
          )}
        </div> */}
      </CardContent>{" "}
    </Card>
  );
}

