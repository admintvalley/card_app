import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton,  LatestInvoicesSkeleton,  CardsSkeleton, InvoicesTableSkeleton,} from '@/app/ui/skeletons';
import CardCategories from '@/app/ui/dashboard/card-categories';
import Search from '@/app/ui/search';
import Table from '@/app/ui/dashboard/table'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      
    <div className="flex w-full flex-col md:col-span-2">
      <div className="">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <Search placeholder="Search cards..." />
          <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
            <Table query={query}/>
          </Suspense>
          <CardCategories/>
        </Suspense>
      </div>
        {/* <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
      
      </div>
    </main>
  );
}