"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/lib/auth";
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

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const birthday = formData.get("birthday") as string;
    const gender = formData.get("gender") as string;

    const { error } = await registerUser({
      email,
      password,
      firstName,
      lastName,
      birthday,
      gender,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Check your email to confirm your account!");
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleRegister}>
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
                  Register
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input id="first_name" name="first_name" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="last_name">Last Name</Label>
                    <Input id="last_name" name="last_name" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="birthday">Birthday</Label>
                    <Input id="birthday" name="birthday" type="date" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" name="gender" placeholder="Male/Female" required />
                  </div>

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
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                  </div>

                </div>
              </CardContent>

              <CardFooter className="flex-col gap-2">
                <Button variant="tertiary" type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing-Up..." : "Sign-Up"}
                </Button>

                <GoogleLoginButton />
              </CardFooter>
            </Card>

            <Image
              src="/images/gym.png"
              alt="Gym"
              width={500}
              height={300}
              className="object-contain w-3/4 sm:w-1/2 md:w-[600px]"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
