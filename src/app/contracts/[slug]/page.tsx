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
  const { data: contract, error }: any = await supabase
    .from("contratcs")
    .select("*, modalities (name), invoices (*), renewals(*)")
    .match({ id: slug })
    .single();

  console.log(contract);

  return (
    <main className="max-w-7xl ">
      <Box className="">
        <H2 className="uppercase mb-2">Contrato - {contract.name}</H2>
        <ul className="">
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
            <span className="text-zinc-300">{contract.initial_date}</span>
          </li>
          <li className="flex gap-2 items-center">
            <Label>Vencimento:</Label>
            <span className="text-zinc-300">{contract.due_date}</span>
          </li>
        </ul>
        <Separator className="my-2" />
        <div className="flex w-full justify-between items-end mb-2">
          <H2 className="uppercase">Aditivos</H2>
          <Button variant="outline" size="sm">
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
        <div className="mt-4">
          <div className="flex w-full justify-between items-end my-2">
            <H2 className="uppercase">faturas</H2>
            <Button variant="outline" size="sm">
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
                    competência
                  </th>
                  <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                    Data da fatura
                  </th>
                  <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                    Nota fiscal
                  </th>
                </tr>
              </thead>
              <tbody>
                {contract.invoices.map((data: any) => (
                  <tr key={data.id} className="border-t border-zinc-600">
                    <td className="px-2   bg-zinc-700">{data.number}</td>
                    <td className="px-2  bg-zinc-700">{data.reference_date}</td>
                    <td className="px-2  bg-zinc-700">{data.invoice_date}</td>
                    <td className="px-2  bg-zinc-700 text-center">
                      <a
                        className="w-full  hover:text-brand-500 underline underline-offset-2"
                        href={data.url}
                        target="_blank"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Box>
    </main>
  );
}
