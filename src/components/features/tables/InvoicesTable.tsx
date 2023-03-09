import { Renewal } from "@/@types/db.types";
import { formatDateStringToBrDate } from "@/utils/formatters/dates";
import { createClient } from "@/utils/lib/supabase-server";
import { Text } from "@/components/typography/Text";

interface invoicesTableProps {
  contractId: string;
}

export async function InvoicesTable({ contractId }: invoicesTableProps) {
  const supabase = createClient();
  const { data: invoices, error }: any = await supabase
    .from("invoices")
    .select("*, renewals(*)")
    .match({ contract_id: contractId });

  function getRenewalNumberIfExists(renewals: Renewal) {
    if (renewals === null) {
      return "S/A";
    }
    return renewals.number;
  }

  return (
    <>
      {invoices.length ? (
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
                <td className="px-2  bg-zinc-700">
                  {getRenewalNumberIfExists(data.renewals)}
                </td>
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
      ) : (
        <Text className="py-2 px-4 text-red-500">Não possui aditivos</Text>
      )}
    </>
  );
}
