import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to your ParceloHub account to book shipments, track parcels, or manage deliveries.",
};

export default function LoginPage() {
  return <LoginForm />;
}
