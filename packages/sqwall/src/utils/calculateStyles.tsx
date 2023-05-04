import { ComponentStyle } from "@/types";

export const calculateStyles = <T extends ComponentStyle>(
  themeClass: string,
  props: T
) => {
  let classes = `${themeClass} ${props.class}`;
  if (props.rClass) {
    classes = props.rClass;
  }
  return { class: classes, style: props.style };
};
