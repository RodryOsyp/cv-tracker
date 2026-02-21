import { Input } from "@/components/ui/input";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.page}>
     <div className="flex flex-col items-center w-screen h-screen justify-center gap-10">
     <h1 className="text-3xl font-bold ">Welcome to the CV Tracker</h1>
     <Link href="/login"><Button>Login</Button></Link>
     </div>
    </div>
  );
}
