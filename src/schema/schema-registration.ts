import { z } from "zod";

export const RegistrationSchema = z.object({
    name: z
        .string()
        .min(1, "Name should be minimum 1 char")
        .max(50, "Maximum length is 100 chars"),

    phone: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(10, "Maximum length is 10 chars"),

    peopleCount: z
        .number()
        .min(1, { message: "This field has to be filled." })
        .max(10, "Maximum length is 10 chars"),

    isLegal: z
        .boolean(),
});

export type RType = z.infer<typeof RegistrationSchema>;
