import "./globals.css";
import "server-only";
import { createClient } from "@/lib/supabase-server";
import SupabaseProvider from "./components/features/supabase-provider";
import SupabaseListener from "./components/features/supabase-listener";
import { Navbar } from "./components/features/Navbar";
import { Login } from "./components/features/LoginPage";

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
            <Navbar />
            <main className="mx-auto max-w-7xl px-4">{children}</main>
          </SupabaseProvider>
        ) : (
          <Login />
        )}
      </body>
    </html>
  );
}
