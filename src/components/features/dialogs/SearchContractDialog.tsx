"use client";
import { Contract } from "@/@types/db.types";
import { H2 } from "@/components/typography/H2";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Spinner } from "@/components/ui/Spinner";
import { createClient } from "@/utils/lib/supabase-browser";
import { setMaxListeners } from "events";
import { Suspense, useEffect, useState } from "react";

export function SearchContractDialog() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const filteredContracts = contracts.filter((x) => x.name === searchInput);

  const supabase = createClient();

  async function getContracts() {
    const { data }: any = await supabase.from("contratcs").select("*");
    setContracts(data);
  }

  useEffect(() => {
    getContracts();
  }, []);

  console.log(contracts);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Pesquisar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <H2 className="text-center">Contratos</H2>
        <Input
          placeholder="Buscar..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <ul>
          {filteredContracts.map((contract) => {
            return (
              <li key={contract.id}>
                {contract.id} - {contract.name}
              </li>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
