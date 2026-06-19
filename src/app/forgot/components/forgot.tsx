"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { use, useState } from "react";

export const Forgot = () => {
  const [sendLink, setSendLink] = useState(false);
  const handleSubmit = () => {
    setSendLink(true);
  };
  return (
    <>
      <div className="flex flex-col w-[440] p-6 border rounded-2xl shadow-sm gap-3">
        <h1 className="text-2xl font-semibold text-center">Forgot Password</h1>
        {!sendLink ? (
          <div className="flex flex-col gap-4 mb-15">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <Button onClick={handleSubmit} className="w-full cursor-pointer">
              Send Reset Link
            </Button>
          </div>
        ) : (
            <h1 className="text-1xl font-semibold text-center">
              Reset Link Sent, Please Check Your Email
            </h1>
        )}
      </div>
    </>
  );
};
