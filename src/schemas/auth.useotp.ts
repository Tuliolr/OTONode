import { z } from "zod";

export const authUseOTPSchema = z.object({
    id: z.string({message: 'ID do OTP obrigatorio'}),
    code: z.string({message: 'OTP obrigatorio'}).length(6, 'Codigo precisa de 6 numeros')
})