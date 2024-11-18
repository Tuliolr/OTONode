import { z } from "zod";

export const authSignInSchema = z.object({
    email: z.string({message: 'Campo email é obrigatorio'}).email('E-mail invalido')
});