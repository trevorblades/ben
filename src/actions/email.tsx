import { defineAction } from "astro:actions";
import { RESEND_API_KEY } from "astro:env/server";
import { z } from "astro/zod";
import { Html, Text } from "react-email";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

export const email = {
  send: defineAction({
    accept: "form",
    input: z.object({
      first: z.string().describe("First name"),
      last: z.string().describe("Last name"),
      email: z.email().describe("Email"),
      phone: z.string().describe("Phone"),
      company: z.string().describe("Company name"),
      role: z.string().describe("Role"),
      service: z.string().describe("What area do you need help with?"),
      source: z.string().optional().describe("How did you hear about us?"),
      mobile: z.string().optional(), // honeypot
    }),
    handler: (input) => {
      if (input.mobile) {
        return; // honeypot 🍯 field filled - fly out early 🕊️
      }

      resend.emails.send({
        from: "onboarding@resend.dev",
        to: "tdblades@gmail.com",
        replyTo: input.email,
        subject: "New submission from Contact Form",
        react: (
          <Html lang="en">
            <Text>
              <strong>First name:</strong> {input.first}
            </Text>
            <Text>
              <strong>Last name:</strong> {input.last}
            </Text>
            <Text>
              <strong>Email:</strong> {input.email}
            </Text>
            <Text>
              <strong>Phone:</strong> {input.phone}
            </Text>
            <Text>
              <strong>Company:</strong> {input.company}
            </Text>
            <Text>
              <strong>Role:</strong> {input.role}
            </Text>
            <Text>
              <strong>What area do you need help with?:</strong> {input.service}
            </Text>
            {input.source && (
              <Text>
                <strong>How did you hear about us?:</strong> {input.source}
              </Text>
            )}
          </Html>
        ),
      });
    },
  }),
};
