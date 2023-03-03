import { createClient } from "@/lib/supabase-server";
import Link from "next/link";
import { Button } from "../components/ui/Button";

export default async function Home() {
  const supabase = createClient();

  const { data: contratcs, error } = await supabase
    .from("contratcs")
    .select("*, modalities (name), invoices (*), renewals(*)");

  const tableData = contratcs?.map((data) => {
    return {
      id: data.id,
      name: data.name,
      number: data.number,
      modality: data.modalities.name,
      initialDate: data.initial_date,
      dueDate: data.due_date,
      nextInvoice: data.first_invoice,
    };
  });

  return (
    <main className="py-4">
      <div className="flex min-w-full shadow rounded-lg overflow-hidden overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                Numero
              </th>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                Modalidade
              </th>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                Data inicial
              </th>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                Vencimento
              </th>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
                Proxima Fatura
              </th>
              <th className="px-2 py-3 border-b-2 border-zinc-600 bg-zinc-800 text-center font-semibold  uppercase tracking-wider ">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((contract) => {
              return (
                <tr key={contract.id} className="">
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700">
                    {contract.name}
                  </td>
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700">
                    {contract.number}
                  </td>
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700">
                    {contract.modality}
                  </td>
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700">
                    {contract.initialDate}
                  </td>
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700">
                    {contract.dueDate}
                  </td>
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700">
                    {contract.nextInvoice}
                  </td>
                  <td className="px-2 py-2 border-b border-zinc-600 bg-zinc-700 text-center">
                    <Link href={`/contracts/${contract.id}`}>
                      <Button>Visualizar</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
