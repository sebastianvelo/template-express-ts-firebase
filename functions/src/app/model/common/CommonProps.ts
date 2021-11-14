import ColorProps from "./util/ColorProps";
import ParentProps from "./util/ParentProps";
import SizeProps from "./util/SizeProps";
import StyleableProps from "./util/StyleableProps";
import TextContentProps from "./util/TextContentProps";

export interface ImageProps {
    src: string;
    alt?: string;
}

export interface ActionLinkProps
  extends StyleableProps,
    TextContentProps,
    ColorProps,
    ParentProps {
  route?: string;
}

export interface ActionAnchorProps
  extends StyleableProps,
    TextContentProps,
    ColorProps,
    ParentProps {
  url?: string;
}

export interface ActionButtonProps
  extends TextContentProps,
    StyleableProps,
    ColorProps,
    ParentProps,
    SizeProps {
  quiet?: boolean;
  disabled?: boolean;
}

export interface ActionProps
  extends ActionLinkProps,
    ActionAnchorProps,
    ActionButtonProps {}