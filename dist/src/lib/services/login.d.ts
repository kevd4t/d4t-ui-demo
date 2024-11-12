import { z } from 'zod';
import { loginSchema } from '../schemas/login.schema';
export declare const login: (data: z.infer<typeof loginSchema>) => Promise<any>;
