import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className={styles.page}>
     <div className="bg-red-500">
     <h1 className="">Welcome to the CV Tracker</h1>
     <Button>Click me</Button>
     </div>
    </div>
  );
}
