import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
 } from "@/components/ui/card";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="w-full py-5">
      <div className="flex items-center justify-center w-full py-10">
        <Image
          src="/images/fitness-logo.png"
          alt="Logo"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-10">
      <Card className="w-full max-w-sm mx-auto mt-5">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
        <form>
        <div className="flex flex-col gap-10">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
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
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
        </CardContent>
      </Card>
      <Image
          src="/images/gym.png"
          alt="Logo"
          width={400}
          height={200}
          className="object-contain"
        />  
      </div>
    </div>
  );
}