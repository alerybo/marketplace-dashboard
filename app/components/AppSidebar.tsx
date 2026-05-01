import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./ui/sidebar";
import { NavUser, NavItems } from "./index";
import { Store } from "lucide-react";

const AppSidebar = () => {
  const user = {
    name: "John Doe",
    email: "jkjbe@gmail.com",
    avatar: "",
  };
  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/" className="flex gap-2 p-2">
          <Store />
          <h1 className="font-bold">Admin Panel</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavItems />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
