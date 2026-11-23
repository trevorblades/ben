import { defineAction } from "astro:actions";
import { RESEND_API_KEY } from "astro:env/server";
import { z } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      first: z.string(),
      last: z.string(),
      email: z.email(),
      phone: z.string(),
      company: z.string(),
      role: z.string(),
      service: z.string(),
      source: z.string().optional(),
    }),
    handler: (input) => {
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: "tdblades@gmail.com",
        subject: "New Contact Form Submission",
        html: JSON.stringify(input),
      });
    },
  }),
};
