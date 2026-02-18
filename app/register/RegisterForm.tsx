"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/lib/auth";
import { motion } from "motion/react";
import Image from "next/image";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import Link from "next/link";
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

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const { error } = await registerUser({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      firstName: formData.get("first_name") as string,
      lastName: formData.get("last_name") as string,
      birthday: formData.get("birthday") as string,
      gender: formData.get("gender") as string,
    });

    setLoading(false);
    if (error) { setErrorMsg(error.message); return; }
    router.push("/dashboard");
  }

  const field = "w-full bg-transparent border-b border-stone-200 focus:border-stone-900 outline-none py-3 text-base text-stone-900 placeholder-stone-400 transition-colors duration-200";
  const label = "block text-[10px] font-semibold tracking-[0.15em] uppercase text-stone-400 mb-1";

  return (
    <div
      className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex"
      >
        {/* Left: Form */}
        <div className="flex-1 px-14 py-14">
          <Image
            src="/images/fitness-logo.png"
            alt="Just Fit It"
            width={120}
            height={60}
            className="object-contain mb-9"
          />

          <h1 className="text-2xl font-bold text-stone-900 tracking-tight mb-1">
            Create your account
          </h1>
          <p className="text-stone-400 text-sm mb-8">Free forever. No credit card needed.</p>

          {errorMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500 mb-5"
            >
              {errorMsg}
            </motion.p>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="first_name" className={label}>First name</label>
                <input id="first_name" name="first_name" placeholder="John" required className={field} />
              </div>
              <div>
                <label htmlFor="last_name" className={label}>Last name</label>
                <input id="last_name" name="last_name" placeholder="Doe" required className={field} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="birthday" className={label}>Birthday</label>
                <input id="birthday" name="birthday" type="date" required className={field} />
              </div>
              <div>
                <label htmlFor="gender" className={label}>Gender</label>
                <select id="gender" name="gender" required className={field + " cursor-pointer"}>
                  <option value="" disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className={label}>Email</label>
              <input id="email" name="email" type="email" placeholder="you@email.com" required className={field} />
            </div>

            <div>
              <label htmlFor="password" className={label}>Password</label>
              <input id="password" name="password" type="password" placeholder="Min. 8 characters" required className={field} />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex-1 h-px bg-stone-100" />
              <span className="text-[10px] text-stone-300 tracking-widest uppercase">or</span>
              <div className="flex-1 h-px bg-stone-100" />
            </div>

            <GoogleLoginButton />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-stone-900 hover:bg-stone-700 disabled:opacity-40 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
            >
              {loading ? "Creating account..." : "Get started →"}
            </button>
          </form>

          <p className="text-sm text-stone-400 text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:text-orange-400 transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:flex w-[42%] relative bg-stone-50 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-stone-50 to-stone-100" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-100 opacity-70 blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-stone-200 opacity-50 blur-[50px]" />

          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <Image
              src="/images/gym.png"
              alt="Gym"
              width={360}
              height={300}
              className="object-contain drop-shadow-md mb-6"
            />
            <p
              className="text-2xl font-black text-stone-900 leading-tight mb-2"
              style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
            >
              YOUR FITNESS<br />JOURNEY STARTS HERE
            </p>
            <p className="text-stone-400 text-xs max-w-[200px] leading-relaxed">
              Track every rep, build smart routines, and stay accountable.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}