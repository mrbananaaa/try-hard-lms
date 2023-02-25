import Link from "next/link";
import { useRouter } from "next/router";
import { type FC, cloneElement, type ReactElement } from "react";
import { type IconProps } from "react-feather";

interface INavItem {
  to: string;
  label: string;
  children: ReactElement;
}

/**
 * NavItem - Navigation bar Item and Link to another page
 * 
 * How to use:
 *  Just wrap the Icon(must be react element) with NavItem
 * 
 * @param children - icon for nav items 
 * @param to - href to another page 
 * @param label - label for nav items 
 * @returns 
 */
const NavItem: FC<INavItem> = ({ children, to, label }) => {
  const { pathname } = useRouter();

  const iconProps: IconProps = {
    color: pathname === to ? "white" : "gray",
    strokeWidth: pathname === to ? 2 : 1.5,
    size: 22,
  };

  const styledChild = cloneElement(children, iconProps);

  return (
    <div className="group relative px-4">
      <Link href={to}>{styledChild}</Link>
      <div className="absolute top-0 left-16 origin-left scale-0 rounded bg-stone-800 px-2 py-1 transition-all duration-150 group-hover:scale-100">
        <p className="font-inter text-xs font-light text-white ">{label}</p>
      </div>
    </div>
  );
};

export default NavItem;
