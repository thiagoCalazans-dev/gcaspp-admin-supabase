import { createClient } from "@/lib/supabase-server";
import { create } from "zustand";

const supabase = createClient();

async function Fetch() {
  const response = await supabase
    .from("contratcs")
    .select("*, modalities (name), invoices (*), renewals(*)");

  console.log(response);
}

Fetch();

const useData = create((set) => ({
  contracts: ["1", "2"],
  //   fetch: async () => {
  //     const { data, error } = Fetch()
  //     set({ contracts: await data });
  //   },
}));
