import { Outlet, redirect, useMatches } from "react-router";
import { getExistingUser, storeUserData } from "~/appwrite/auth";
import { account } from "~/appwrite/client";
import { AppSidebar } from "~/components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) return redirect("/sign-in");

    const existingUser = await getExistingUser(user.$id);

    if (existingUser?.status === "user") {
      return redirect("/");
    }

    return existingUser?.$id ? existingUser : await storeUserData();
  } catch (error) {
    console.log("Error in clientLoader:", error);
    return redirect("/sign-in");
  }
}

const AdminLayout = () => {
  const matches = useMatches();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col gap-10 w-full pb-20">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {matches
                  .filter(
                    (
                      match: any,
                    ): match is {
                      handle: {
                        breadcrumb: (match: any) => React.ReactNode;
                      };
                    } =>
                      Boolean(match.handle) &&
                      typeof match.handle.breadcrumb === "function",
                  )
                  .map((match, index) => (
                    <BreadcrumbItem key={index} className="hidden md:block">
                      {(match.handle as any).breadcrumb(match)}
                    </BreadcrumbItem>
                  ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
