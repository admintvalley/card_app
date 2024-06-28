import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton,  LatestInvoicesSkeleton,  CardsSkeleton, InvoicesTableSkeleton,} from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
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
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <Search placeholder="Search cards..." />
          <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            <Table query={query} currentPage={currentPage} />
          </Suspense>
          <CardCategories/>
        </Suspense>
      </div>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      
      </div>
    </main>
  );
}