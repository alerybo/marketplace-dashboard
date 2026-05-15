import { StatsCard } from "~/components";
import ListingCard from "~/components/ListingCard";
import { BreadcrumbLink } from "~/components/ui/breadcrumb";
import { listings } from "~/constants";

export const handle = {
  breadcrumb: () => (
    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
  ),
};

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
