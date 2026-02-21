import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center gap-10">
      <Button>Login</Button>
      <Input placeholder="Enter your email" />
    </div>
  );
}
