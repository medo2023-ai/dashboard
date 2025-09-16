import * as yup from "yup";
const nameRegex = /^[A-Za-z\u0600-\u06FF\s'-]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

const signUpSchema = yup.object({
 name: yup.string().required("Name is required").matches(nameRegex,
      "Name must be 2–50 letters"
    ),
    email: yup.string().required("Email is required").matches(emailRegex, "Invalid email format"),
  password: yup.string().required("Password is required").matches(
      passwordRegex,
      "Password must be 8+ chars with uppercase, lowercase, number & special character"
    ),
  confirmPassword: yup.string().required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default signUpSchema