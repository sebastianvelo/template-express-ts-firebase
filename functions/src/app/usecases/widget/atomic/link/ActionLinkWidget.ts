import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import TextContentProps from "../../../../model/common/util/TextContentProps";

export interface ActionLinkProps
  extends TextContentProps,
    ColorProps {
  route?: string;
}

const ActionLinkWidget = (props: ActionLinkProps) =>
  Widget.builder<ActionLinkProps>("link").setData(props);

export default ActionLinkWidget;
