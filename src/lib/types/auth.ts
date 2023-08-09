import { z } from "zod"
import { loginSchema } from "../../examples/FormLogin/loginSchema"

export interface FormLoginData extends z.infer<typeof loginSchema> {}

export interface UserAuthenticated {
  id: string
  name: string
  email: string
}