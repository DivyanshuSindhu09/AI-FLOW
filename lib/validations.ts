import {z} from "zod";

export const SignInSchema = z.object({
    email : z
              .email({error : "Invalid Email"})
              .min(1, {error : "Email is required"}),

    password : z.string()
                .min(6, {error : "Password must be of atleast 6 characters"})
                .max(20, {error : "Password can not exceed 20 characters"})        
})


export const SignUpSchema = z.object({
  name: z.string()
    .min(2, { error: "Name must be at least 2 characters long" })
    .max(50, { error: "Name must not exceed 50 characters" }),

  username: z.string()
    .min(3, { error: "Username must be at least 3 characters long" })
    .max(20, { error: "Username must not exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { error: "Username can only contain letters, numbers, and underscores" }),

  email: z.email({ error: "Please provide a valid email" }),

  password: z.string()
    .min(8, { error: "Password must be at least 8 characters long" })
    .max(64, { error: "Password must not exceed 64 characters" })
    .regex(/[A-Z]/, { error: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { error: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { error: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, { error: "Password must contain at least one special character (@$!%*?&)" })
});
