import { formatDateStringToBrDate } from "@/utils/formatters/dates";
import { createClient } from "@/utils/lib/supabase-server";
import { Text } from "@/components/typography/Text";

interface renewalsTableProps {
  contractId: number;
}

export async function RenewalsTable({ contractId }: renewalsTableProps) {
  const supabase = createClient();
  const { data: renewals, error }: any = await supabase
    .from("renewals")
    .select("*")
    .match({ contract_id: contractId });

  console.log(renewals.length);

  return (
    <>
      {renewals.length ? (
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
            {renewals.map((data: any) => {
              return (
                <tr key={data.id} className="border-t border-zinc-600">
                  <td className="px-2   bg-zinc-700">{data.number}</td>
                  <td className="px-2  bg-zinc-700">
                    {formatDateStringToBrDate(data.initial_date)}
                  </td>
                  <td className="px-2  bg-zinc-700">
                    {formatDateStringToBrDate(data.due_date)}
                  </td>
                  <td className="px-2  bg-zinc-700 text-center"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Text className="py-2 px-4 text-red-500">Não possui aditivos</Text>
      )}
    </>
  );
}
