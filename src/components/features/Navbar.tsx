"use client";
import { createClient } from "@/utils/lib/supabase-browser";
import Link from "next/link";
import { SignOut } from "phosphor-react";
import { H1 } from "../typography/H1";
import { Button } from "../ui/Button";

export function Navbar() {
  const supabase = createClient();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <header className="w-full  py-2  bg-zinco-900 border-b dark:border-zinc-800  ">
      <nav className="mx-auto max-w-[90rem] flex items-center justify-between">
        <Link href="/">
          <strong className="uppercase text-center w-fit">gcaspp admin</strong>
        </Link>
        <Button
          className="text-3xl"
          variant="ghost"
          type="button"
          onClick={signOut}
        >
          <SignOut />
        </Button>
      </nav>
    </header>
  );
}
