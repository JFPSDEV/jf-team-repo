"use client";

import styles from "./page.module.css";

import { GameSection } from "./components";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <GameSection />
    </main>
  );
}
