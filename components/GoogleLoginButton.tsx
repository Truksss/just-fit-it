"use client";

import { createClient } from "@/lib/supabaseClient";
import { Button } from "./ui/button";
import Image from "next/image";

export default function GoogleLoginButton() {
  const handleLogin = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="secondary" className="w-full" onClick={handleLogin}>
        <Image
        src="/images/google.png"
        alt="google logo"
        width={20}
        height={20}
        />
        Sign-In with Google 
  </Button>
  );
}
