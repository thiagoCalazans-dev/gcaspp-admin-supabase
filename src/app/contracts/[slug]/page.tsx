import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { Label } from "@/components/typography/Label";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import { createClient } from "@/lib/supabase-server";

export default async function Contract({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const supabase = createClient();
  const { data, error } = await supabase
    .from("contratcs")
    .select("*, modalities (name), invoices (*), renewals(*)");

  const [contract]: any = data?.filter(
    (contract) => contract.id === Number(slug)
  );

  console.log(contract);

  return (
    <main className="max-w-7xl ">
      <Box className="">
        <H2 className="uppercase mb-2">Contrato - {contract.name}</H2>
        <ul className="">
          <li className="flex gap-2 items-center">
            <Label>Número:</Label>
            <span className="text-zinc-300">{contract.number}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Modalidate:</Label>
            <span className="text-zinc-300">{contract.modalities.name}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Data Inicial:</Label>
            <span className="text-zinc-300">{contract.initial_date}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Vencimento:</Label>
            <span className="text-zinc-300">{contract.due_date}</span>
          </li>
        </ul>
        <div className="flex w-full justify-between items-center my-2">
          <H2 className="uppercase ">Aditivos</H2>
          <Button variant={"outline"} size="sm">
            Novo
          </Button>
        </div>
        <div className="flex min-w-full border border-zinc-600 rounded-md overflow-hidden overflow-x-auto">
          <table className="min-w-full leading-normal border-collapse">
            <thead>
              <tr>
                <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                  Numero
                </th>
                <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                  Data inicial
                </th>
                <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                  Vencimento
                </th>
              </tr>
            </thead>
            <tbody>
              {contract.renewals.map((data: any) => {
                return (
                  <tr key={data.id} className="border-t border-zinc-600">
                    <td className="px-2   bg-zinc-700">{data.number}</td>
                    <td className="px-2  bg-zinc-700">{data.initial_date}</td>
                    <td className="px-2  bg-zinc-700">{data.due_date}</td>
                    <td className="px-2  bg-zinc-700 text-center"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ScrollArea className="h-72 w-48 rounded-md border border-slate-100 dark:border-slate-700">
          <div className="p-4">
            <H2 className="uppercase">Faturas</H2>
            {contract.invoices.map((data: any) => (
              <>
                <div className="text-sm" key={data.id}>
                  <span>{data.number} </span>
                  <span>{data.contract_id} </span>
                  <span>{data.taxes} </span>
                  <span>{data.reference_date} </span>
                  <span>{data.payment_date} </span>
                  <span>{data.next_invoice} </span>
                  <span>{data.description} </span>
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      </Box>
    </main>
  );
}
