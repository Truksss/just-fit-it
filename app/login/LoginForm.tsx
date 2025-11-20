"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { loginUser } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await loginUser({ email, password });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="w-full py-5">
      <div className="flex items-center justify-center w-full py-10">
        <Image
          src="/images/fitness-logo.png"
          alt="Logo"
          width={400}
          height={200}
          className="object-contain w-60 md:w-80 lg:w-100"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-6 md:gap-10 max-w-6xl w-full px-4">
          <Card className="flex-1 min-w-[280px] max-w-md w-full mx-auto mt-5">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                Login
              </CardTitle>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent>
                <div className="flex flex-col gap-10">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="user@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" name="password" type="password" required />
                  </div>
                  {errorMessage ? (
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  ) : null}
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  variant="tertiary"
                  type="submit"
                  className="w-full mt-5"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Login"}
                </Button>
                <GoogleLoginButton />
              </CardFooter>
            </form>
          </Card>
          <Image
            src="/images/gym.png"
            alt="Logo"
            width={500}
            height={300}
            className="object-contain w-3/4 sm:w-1/2 md:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}