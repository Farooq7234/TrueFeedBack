import {z} from 'zod'

export const usernameValidation = z
        .string()
        .min(5,"Username must contain atleast 5 or more than that")
        .max(8, "Username should not contain more than 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username must not containt any special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6, {message:"password must be atleast 6 characters"}),
})