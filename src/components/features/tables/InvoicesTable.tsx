import { formatDateStringToBrDate } from "@/utils/formatters/dates";
import { createClient } from "@/utils/lib/supabase-server";

interface invoicesTableProps {
  contractId: string;
}

export async function InvoicesTable({ contractId }: invoicesTableProps) {
  //     function findRenewalNumber(id: number) {
  //     const [renewal] = contract.renewals.filter((item: any) => item.id === id);
  //     console.log(renewal);
  //     if (renewal === undefined) {
  //       return "S/A";
  //     }
  //     return renewal.number;
  //   }

  const supabase = createClient();
  const { data: invoices, error }: any = await supabase
    .from("invoices")
    .select("*, renewals(*)")
    .match({ id: contractId });

  console.log(invoices); //arrumar uqe so ta vindo 1 e sem renewaals

  return (
    <table className="min-w-full leading-normal border-collapse">
      <thead>
        <tr>
          <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Numero Fatura
          </th>
          <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            competência
          </th>
          <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Data da fatura
          </th>
          <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Numero Aditivo
          </th>
          <th className="px-2   bg-zinc-800 text-left font-semibold  uppercase tracking-wider">
            Nota fiscal
          </th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((data: any) => (
          <tr key={data.id} className="border-t border-zinc-600">
            <td className="px-2   bg-zinc-700">{data.number}</td>
            <td className="px-2  bg-zinc-700">
              {formatDateStringToBrDate(data.reference_date)}
            </td>
            <td className="px-2  bg-zinc-700">
              {formatDateStringToBrDate(data.invoice_date)}
            </td>
            <td className="px-2  bg-zinc-700">{data.renewals_id}</td>
            <td className="px-2  bg-zinc-700 ">
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
  );
}
