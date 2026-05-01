import { StatsCard } from "~/components";
import ListingCard from "~/components/ListingCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "~/components/ui/sidebar";
import { listings } from "~/constants";

const Dashboard = () => {
  return (
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
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <section className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <StatsCard
              title="Total Users"
              total={1000}
              lastMonthCount={900}
              currentMonthCount={1000}
            />
            <StatsCard
              title="Active Users"
              total={1000}
              lastMonthCount={900}
              currentMonthCount={1000}
            />
            <StatsCard
              title="Total Listings"
              total={1000}
              lastMonthCount={900}
              currentMonthCount={1000}
            />
          </div>
        </section>
        <section className="flex flex-col gap-9 mt-8">
          <h1 className="text-xl font-semibold text-dark-100">
            Created Listings
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {listings.map(({ id, title, imageUrls, category, tags, price }) => (
              <ListingCard
                key={id}
                id={id}
                title={title}
                imageUrl={imageUrls[0]}
                category={category}
                tags={tags}
                price={price}
              />
            ))}
          </div>
        </section>
      </main>
    </SidebarInset>
  );
};

export default Dashboard;
