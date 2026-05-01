import { Outlet } from "react-router";
import { AppSidebar } from "~/components";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
  );
};

export default AdminLayout;
