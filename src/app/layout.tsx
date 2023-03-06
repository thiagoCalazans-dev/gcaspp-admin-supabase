import "./globals.css";
import "server-only";
import { createClient } from "@/utils/lib/supabase-server";
import SupabaseProvider from "../components/features/supabase-provider";
import SupabaseListener from "../components/features/supabase-listener";
import { Navbar } from "../components/features/Navbar";
import { Login } from "../components/features/LoginPage";
import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="pt-Br">
      <body className="dark:bg-zinc-900 dark:text-slate-50 h-screen text-brand-800 vsc-initialized">
        {session?.access_token ? (
          <SupabaseProvider>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="mx-auto max-w-7xl px-4 flex-1 w-full flex flex-col">
                {children}
              </div>
            </div>
          </SupabaseProvider>
        ) : (
          <Login />
        )}
      </body>
    </html>
  );
}
