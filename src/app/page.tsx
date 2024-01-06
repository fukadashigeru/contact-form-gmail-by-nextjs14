import GmailForm from "@/components/GmailForm";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Next.js Gmailアプリ
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-xl py-6 sm:px-6 lg:px-8">
          <GmailForm />
        </div>
      </main>
      <Toaster />
    </>
  );
}
