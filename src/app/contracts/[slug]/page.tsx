import { RenewalsDialogForm } from "@/components/features/dialogs/RewewalsDialogForm";
import { InvoicesTable } from "@/components/features/tables/InvoicesTable";
import { RenewalsTable } from "@/components/features/tables/RenewalsTable";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { Label } from "@/components/typography/Label";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { Spinner } from "@/components/ui/Spinner";
import { formatDateStringToBrDate } from "@/utils/formatters/dates";
import { createClient } from "@/utils/lib/supabase-server";
import { Suspense } from "react";

export default async function Contract({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const supabase = createClient();
  const { data: contract, error }: any = await supabase
    .from("contratcs")
    .select("*, modalities (name), invoices (*), renewals(*)")
    .match({ id: slug })
    .single();

  return (
    <main className="max-w-7xl py-4">
      <Box className="">
        <H1 className="uppercase mb-2 text-center">
          Contrato - {contract.name}
        </H1>
        <ul className="flex justify-evenly pt-10">
          <li className="flex gap-2 items-center">
            <Label>Número:</Label>
            <span className="text-brand-500">{contract.number}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Modalidate:</Label>
            <span className="text-zinc-300">{contract.modalities.name}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Data Inicial:</Label>
            <span className="text-zinc-300">
              {formatDateStringToBrDate(contract.initial_date)}
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Vencimento:</Label>
            <span className="text-zinc-300">
              {formatDateStringToBrDate(contract.due_date)}
            </span>
          </li>
        </ul>
        <Separator className="my-4" />

        <div className="flex w-full justify-between items-end mb-2">
          <H2 className="uppercase">Aditivos</H2>
          <RenewalsDialogForm />
        </div>
        <div className="flex min-w-full border border-zinc-600 rounded-md overflow-hidden overflow-x-auto">
          <Suspense fallback={<Spinner />}>
            <RenewalsTable contractId={slug} />
          </Suspense>
        </div>
        <div className="mt-4">
          <div className="flex w-full justify-between items-end my-2">
            <H2 className="uppercase">faturas</H2>
            <Button variant="outline" size="sm">
              Novo
            </Button>
          </div>
          <div className="flex min-w-full border border-zinc-600 rounded-md overflow-hidden overflow-x-auto">
            <Suspense fallback={<Spinner />}>
              <InvoicesTable contractId={slug} />
            </Suspense>
          </div>
        </div>
      </Box>
    </main>
  );
}
