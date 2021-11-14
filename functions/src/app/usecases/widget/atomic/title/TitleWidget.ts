import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import SizeProps from "../../../../model/common/util/SizeProps";
import TextContentProps from "../../../../model/common/util/TextContentProps";

export interface TitleProps extends TextContentProps, ColorProps, SizeProps {}

const TitleWidget = (props: TitleProps) =>
  Widget.builder<TitleProps>("title").setData(props);

export default TitleWidget;
