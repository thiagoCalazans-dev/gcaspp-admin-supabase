import { Button } from "@/components/ui/Button";
import { formatDateStringToBrDate } from "@/utils/formatters/dates";
import { createClient } from "@/utils/lib/supabase-server";
import dayjs from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";

export async function ContractsTable() {
  const supabase = createClient();

  const { data: contratcs } = await supabase
    .from("contratcs")
    .select("*, modalities (name), invoices (*), renewals(*)");

  dayjs.extend(relativeTime);

  const tableData = contratcs?.map((data) => {
    return {
      id: data.id,
      name: data.name,
      number: data.number,
      modality: data.modalities.name,
      initialDate: formatDateStringToBrDate(data.initial_date),
      dueDate: formatDateStringToBrDate(data.due_date),
      nextInvoice: formatDateStringToBrDate(data.first_invoice),
    };
  });
  return (
    <table className="min-w-full leading-normal rounded-md  overflow-hidden absolut">
      <thead className="static">
        <tr>
          <th className="px-2 py-3  bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Cliente
          </th>
          <th className="px-2 py-3  bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Numero
          </th>
          <th className="px-2 py-3  bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Modalidade
          </th>
          <th className="px-2 py-3  bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Data inicial
          </th>
          <th className="px-2 py-3  bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Vencimento
          </th>
          <th className="px-2 py-3  bg-zinc-800 text-center font-semibold  uppercase tracking-wider ">
            Detalhes
          </th>
        </tr>
      </thead>
      <tbody className="overflow-y-auto max-h-10 bg-zinc-700">
        {tableData?.map((contract) => {
          return (
            <tr key={contract.id} className="">
              <td className="p-2 h-2">{contract.name}</td>
              <td className="p-2 h-2">{contract.number}</td>
              <td className="p-2 h-2">{contract.modality}</td>
              <td className="p-2 h-2">{contract.initialDate}</td>
              <td className="p-2 h-2">{contract.dueDate}</td>
              <td className="p-2 h-2  text-center">
                <Link href={`/contracts/${contract.id}`}>
                  <Button>Visualizar</Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
