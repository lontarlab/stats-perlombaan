import { NavigationChild } from "./navigation_child";

export interface NavigationItem {
  icon: JSX.Element;
  label: string;
  route: string;
  children: NavigationChild[];
  role: string[]
}
