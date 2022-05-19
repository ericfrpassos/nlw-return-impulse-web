import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar Formulário de Feedback">
      <X weight="bold" className="h-4 w-4"></X>
    </Popover.Button>
  )
}