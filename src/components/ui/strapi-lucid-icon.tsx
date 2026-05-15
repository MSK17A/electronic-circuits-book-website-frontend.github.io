import { Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import * as icons from "lucide-solid";

interface Props {
  name: string;
}

const StrapiLucidIcon = (props: Props) => {
  // Converts "graduation-cap" to "GraduationCap"
  const toPascal = (str: string) => {
    if (!str) return "";
    return str
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("");
  };

  const IconComponent = () => {
    const formattedName = toPascal(props.name);
    return (icons as Record<string, any>)[formattedName];
  };

  return (
    <Show
      when={IconComponent()}
      fallback={<span class="text-xs opacity-50">?</span>}
    >
      {/* size={20} fits perfectly in your text-xl span container */}
      <Dynamic component={IconComponent()} size={20} stroke-width={2} />
    </Show>
  );
};

export default StrapiLucidIcon;
