import { A } from "@solidjs/router";
import { type JSX } from "solid-js";
import { RequiredParentComponent } from "src/utils/types/component";

interface SidebarButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string
}

export const SidebarButton: RequiredParentComponent<SidebarButtonProps> = (props) => {
  return (
    <A href={props.href}>
      <button class="rounded-2xl bg-white py-3 px-4 uppercase tracking-wide font-semibold" {...props}>
        {props.children}
      </button>
    </A>
  )
};
