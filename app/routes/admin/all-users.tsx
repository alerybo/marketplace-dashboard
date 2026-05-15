import { BreadcrumbLink } from "~/components/ui/breadcrumb";

export const handle = {
  breadcrumb: () => (
    <BreadcrumbLink href="/all-users">All Users</BreadcrumbLink>
  ),
};

const AllUsers = () => {
  return <div>AllUsers</div>;
};

export default AllUsers;
