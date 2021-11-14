import Widget from "../../../../common/widget/Widget";
import FeedbackType from "../../../../model/common/types/FeedbackType";
import TextContentProps from "../../../../model/common/util/TextContentProps";

export interface MessageProps extends TextContentProps {
  color?: FeedbackType;
  quiet?: boolean;
}

const MessageWidget = (props: MessageProps) =>
  Widget.builder<MessageProps>("message").setData(props);

export default MessageWidget;
