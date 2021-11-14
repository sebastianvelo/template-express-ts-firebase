import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import StyleableProps from "../../../../model/common/util/StyleableProps";
import TextContentProps from "../../../../model/common/util/TextContentProps";

export interface ActionAnchorProps
  extends StyleableProps,
    TextContentProps,
    ColorProps {
  url?: string;
}

const ActionAnchorWidget = (props: ActionAnchorProps) =>
  Widget.builder<ActionAnchorProps>(`anchor`).setData(props);

export default ActionAnchorWidget;
