import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export const ManageAssets = () => {
  return (
    <div className="py-2">
      <BreadcrumbList className="p-2">
        <BreadcrumbItem>
          <BreadcrumbLink href="/admin">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Assets Management</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
      <div className="h-screen bg-gray-100">
        <div className="border mt-2 border-gray-300  ">
          <aside className="flex gap-2 px-2">
            <p className="underline underline-offset-6">Song images</p>
            <p className="">Song images</p>
          </aside>
        </div>
      </div>
    </div>
  );
};
