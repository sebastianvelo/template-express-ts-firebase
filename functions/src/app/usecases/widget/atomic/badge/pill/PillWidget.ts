import Widget from "../../../../../common/widget/Widget";
import ColorProps from "../../../../../model/common/util/ColorProps";
import TextContentProps from "../../../../../model/common/util/TextContentProps";

interface PillProps extends TextContentProps, ColorProps {}

const PillWidget = (props: PillProps) =>
  Widget.builder<PillProps>("pill").setData(props);

export default PillWidget;
