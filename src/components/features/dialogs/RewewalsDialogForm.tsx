import { H2 } from "@/components/typography/H2";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { NewRenewalsForm } from "../forms/NewRenewalsForm";

export function RenewalsDialogForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Novo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <H2 className="text-center">Cadastro de Adivitos</H2>

        <NewRenewalsForm />
      </DialogContent>
    </Dialog>
  );
}
