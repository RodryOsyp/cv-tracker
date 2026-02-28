import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const Form = () => {
  return (
    <div className="flex flex-col gap-6 w-[440px] p-6 border rounded-2xl shadow-sm">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email*</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password*</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      <div>
        New on our platform?{" "}
        <Link href="/register" className="text-black font-bold">
          Create an account
        </Link>
      </div>
    </div>
  );
};

