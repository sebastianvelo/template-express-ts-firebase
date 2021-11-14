import { IWidgetPage } from "../../../common/widget/WidgetPage";
import {
    ActionLinkProps,
    ActionProps,
    ImageProps
} from "../../common/CommonProps";

interface MenuProps {
  toggler: ImageProps;
  options: ActionProps[];
}
interface BrandProps {
  header?: string;
}
interface NavigationHeaderProps extends BrandProps {
  header?: string;
  menu?: MenuProps;
}
interface NavigationActionsProps {
  actions?: ActionLinkProps[];
}

export interface NavigationProps
  extends NavigationHeaderProps,
    NavigationActionsProps {}

export interface MainProps {
  pages?: IWidgetPage<any>[];
}

interface AuthorProps {
  name?: string;
  linkedin?: string;
}
export interface FooterProps {
  author?: AuthorProps;
}
