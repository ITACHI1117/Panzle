import z from "zod";

// Zod validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectIdea: z
    .string()
    .min(10, {
      message: "Project idea must be at least 10 characters.",
    })
    .max(500, {
      message: "Project idea must not exceed 500 characters.",
    }),
});
