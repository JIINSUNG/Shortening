"use client";
import styles from "./main.module.css";
import { Introduce, MainService } from "@/entities";
export default function Home() {
  return (
    <main className={styles.main}>
      <MainService />
      <Introduce />
    </main>
  );
}
