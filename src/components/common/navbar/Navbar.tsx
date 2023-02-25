import { type FC } from "react";
import NavbarBase from "./base/NavbarBase";
import NavItem from "./NavItem";
import {
  Grid,
  BookOpen,
  Edit3,
  Calendar,
  FileText,
  HelpCircle,
  Settings,
} from "react-feather";

const Navbar: FC = () => {
  const basePath = "/dashboard/student";

  return (
    <NavbarBase>
      <div className="space-y-24">
        <div className="flex flex-col space-y-8">
          {(
            [
              ["", "Dashboard", <Grid key="gridIcn" />],
              ["/course", "Course", <BookOpen key="bookIcn" />],
              ["/assignment", "Assignment", <Edit3 key="editIcn" />],
              ["/schedule", "Schedule", <Calendar key="calendarIcn" />],
              ["/reports", "Reports", <FileText key="fileIcn" />],
            ] as const
          ).map(([to, label, icon]) => (
            <NavItem key={label} to={basePath + to} label={label}>
              {icon}
            </NavItem>
          ))}
        </div>
        <div className="flex flex-col space-y-8">
          {(
            [
              ["/faq", "FAQ", <HelpCircle key="helpIcn" />],
              ["/settings", "Settings", <Settings key="settingsIcn" />],
            ] as const
          ).map(([to, label, icon]) => (
            <NavItem key={label} to={basePath + to} label={label}>
              {icon}
            </NavItem>
          ))}
        </div>
      </div>
    </NavbarBase>
  );
};

export default Navbar;
