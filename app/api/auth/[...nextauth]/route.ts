import nextAuth from "next-auth";
import { authOption } from "@/lib/session";

const handler = nextAuth(authOption);
export {handler as Get, handler as POST}