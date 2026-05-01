import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "./ui/sidebar";
import { NavUser, NavItems } from "./index";
import { Store } from "lucide-react";

const AppSidebar = () => {
  const user = {
    name: "John Doe",
    email: "jkjbe@gmail.com",
    avatar: "",
  };
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className=" data-[state=closed]:overflow-hidden">
        <Link to="/" className="flex gap-2 p-2">
          <Store />
          {state === "expanded" && (
            <span className="font-bold">Admin Panel</span>
          )}
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
