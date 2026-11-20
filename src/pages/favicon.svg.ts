import { DOMParser, XMLSerializer } from "@xmldom/xmldom";
import type { APIRoute } from "astro";
import logo from "~/assets/logo.svg?raw";

export const prerender = true;

export const GET: APIRoute = async () => {
  const doc = new DOMParser().parseFromString(logo, "image/svg+xml");
  doc.documentElement?.setAttribute("fill", "#ffad33");
  const body = new XMLSerializer().serializeToString(doc);
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
};
