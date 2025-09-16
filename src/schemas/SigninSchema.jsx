import * as yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

const signInSchema = yup.object({
 email: yup.string().required("Email is required").
 matches(emailRegex, "Invalid email format"),
    
 password: yup.string().required("Password is required").matches( passwordRegex,
 "Password must be 8+ chars with uppercase, lowercase, number & special character" ),
})

export default signInSchema 