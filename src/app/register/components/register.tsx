"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { use, useState } from "react";
export const Register = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorFormState, setErrorFormState] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      setErrorFormState({
        ...errorFormState,
        passwordError: "Passwords do not match",
        confirmPasswordError: "Passwords do not match",
      });
      return;
    } else {
      setErrorFormState({
        ...errorFormState,
        passwordError: "",
        confirmPasswordError: "",
      });
    }
  };
  return (
    <form className="flex flex-col gap-6 w-[440px] p-6 border rounded-2xl shadow-sm">
      <h1 className="text-2xl font-semibold text-center">Register</h1>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">First Name*</Label>
        <Input
          onChange={(e) =>
            setFormState({ ...formState, firstName: e.target.value })
          }
          id="name"
          name="name"
          type="name"
          placeholder="Enter your First Name"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Last Name*</Label>
        <Input
          onChange={(e) =>
            setFormState({ ...formState, lastName: e.target.value })
          }
          id="Last"
          name="Last"
          type="Last"
          placeholder="Enter your Last Name"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email*</Label>
        <Input
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between ">
          <Label htmlFor="password">Password*</Label>
          <Label className="text-red-500 text-[12px]">
            {errorFormState.confirmPasswordError}
          </Label>
        </div>
        <Input
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          className={errorFormState.passwordError ? "border-red-600" : ""}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between ">
          <Label htmlFor="confirm-password">Confirm Password*</Label>{" "}
          <Label className="text-red-500 text-[12px]">
            {errorFormState.confirmPasswordError}
          </Label>
        </div>
        <Input
          onChange={(e) =>
            setFormState({ ...formState, confirmPassword: e.target.value })
          }
          id="confirm-password"
          name="confirm-password"
          type="password"
          placeholder="Enter your confirm password"
          required
          className={errorFormState.passwordError ? "border-red-600" : ""}
        />
      </div>
      <Button type="submit" className="w-full" onClick={(e) => handleClick(e)}>
        Register
      </Button>
    </form>
  );
};
