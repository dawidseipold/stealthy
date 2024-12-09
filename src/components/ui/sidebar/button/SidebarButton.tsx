import { RequiredParentComponent } from "src/utils/types/component";

interface SidebarButtonProps {
}

export const SidebarButton: RequiredParentComponent<SidebarButtonProps> = (props) => {
  return (
    <button class="rounded-2xl bg-white py-3 px-4 uppercase tracking-wide font-semibold">
      {props.children}
    </button>
  )
};
