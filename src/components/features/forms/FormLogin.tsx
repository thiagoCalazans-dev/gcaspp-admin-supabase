"use client";

import { createClient } from "@/utils/lib/supabase-browser";
import { useRouter } from "next/navigation";

import { Label } from "@/components/typography/Label";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export function FormLogin() {
  const supabase = createClient();
  const router = useRouter();

  async function handleSubmitLogin(e: any) {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email: "administrativo@gcaspp.com.br",
      password: "@Gcaspp123",
    });
    router.refresh();
  }

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmitLogin}>
      <Label>User</Label>
      <Input />
      <Label>Password</Label>
      <Input />
      <Button className="w-full mt-3">Entrar</Button>
    </form>
  );
}
