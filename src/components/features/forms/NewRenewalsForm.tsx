"use client";
import { Label } from "@/components/typography/Label";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SearchContractDialog } from "../dialogs/SearchContractDialog";

async function handleSubmitLogin(e: any) {
  e.preventDefault();
  await console.log("submit");
}

export function NewRenewalsForm() {
  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmitLogin}>
      <div className="">
        <Label>Numero do Adivito</Label>
        <Input />
      </div>
      <Label>ID Contato</Label>
      <div className="">
        <Input />
        <SearchContractDialog />
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Data inicial</Label>
          <Input type="date" />
        </div>
        <div className="flex-1">
          <Label>Data Final</Label>
          <Input type="date" />
        </div>
      </div>
      <Button className="w-full mt-3">Entrar</Button>
    </form>
  );
}
