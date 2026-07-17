import type { Metadata } from "next";
import { Suspense } from "react";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your Artud Midas account"
    >
      <Suspense fallback={<div className="text-sm text-muted">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </AuthLayout>
  );
}
