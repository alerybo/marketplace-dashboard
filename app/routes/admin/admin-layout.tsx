import { Outlet } from "react-router";
import { AppSidebar } from "~/components";
import { SidebarProvider } from "~/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* MobileSidebar */}
      <SidebarProvider>
        <AppSidebar />
        <aside className="children">
          <Outlet />
        </aside>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;
