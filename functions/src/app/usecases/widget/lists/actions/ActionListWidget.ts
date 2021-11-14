import Widget from "../../../../common/widget/Widget";

export interface ActionListProps {
  actions?: ActionProps[];
}

const ActionListWidget = (props: ActionListProps) =>
  Widget.builder<ActionListProps>("actions").setData(props);

export default ActionListWidget;
