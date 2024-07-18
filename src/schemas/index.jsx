import * as Yup from "yup";

export const signUpSchema= Yup.object({
    username: Yup.string().min(3, "Username must be at least 3 characters long").max(25).required("Please eneter your name!"),
    email: Yup.string().email("Invalid Email Address").required("Please enter your email!"),
    password: Yup.string().min(6, "Password must be at least 6 characters long").max(25).required("Please eneter your password!"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'),null],"Passwords do not match"),

});