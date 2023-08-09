import { z } from 'zod'
import { loginSchema } from '../../examples/FormLogin/loginSchema'
import { FormLoginData } from '../types'
import { fetcher } from '../utils'

export const login = async (data: z.infer<typeof loginSchema>) => fetcher('/api/login', { body: JSON.stringify({ ...data }) })