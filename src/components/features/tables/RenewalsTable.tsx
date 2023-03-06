import { formatDateStringToBrDate } from "@/utils/formatters/dates";

interface renewalsTableProps {
  renewals: [];
}

export function RenewalsTable({ renewals }: renewalsTableProps) {
  return (
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
  );
}
