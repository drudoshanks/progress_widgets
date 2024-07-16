"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/widgets">
        <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <p className="m-0 max-w-[30ch] text-m">
            Welcome to the mental health app, press me to check widgets
          </p>
        </div>
      </Link>
    </main>
  );
}
