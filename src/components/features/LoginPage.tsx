import { createClient } from "@/utils/lib/supabase-server";
import { H1 } from "../typography/H1";
import { Box } from "../ui/Box";
import { FormLogin } from "./forms/FormLogin";

export function Login() {
  const supabase = createClient();

  return (
    <main className="mx-auto flex justify-center items-center h-full  max-w-7xl ">
      <Box className="max-w-xs">
        <H1 className="uppercase text-center mb-6">GCASPP ADMIN</H1>
        <FormLogin />
      </Box>
    </main>
  );
}
