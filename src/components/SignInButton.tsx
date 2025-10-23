"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function SignInButton() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleSignIn() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });

    if (error) console.log(error.message);

    setLoading(false);
  }

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={loading}
      className="btn btn-primary"
    >
      {loading ? "Redirecting..." : "Sign in with google"}
    </button>
  );
}
