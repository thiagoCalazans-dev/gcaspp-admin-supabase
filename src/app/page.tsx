import { ContractsTable } from "@/components/features/tables/ContractsTable";
import { Spinner } from "@/components/ui/Spinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="py-4 min-h-full">
      <Suspense fallback={<Spinner />}>
        <ContractsTable />
      </Suspense>
    </main>
  );
}
