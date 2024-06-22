import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton,  LatestInvoicesSkeleton,  CardsSkeleton,} from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import CardCategories from '@/app/ui/dashboard/card-categories';


export default async function Page() {

  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
  
  return (
    <main>
      
    <div className="flex w-full flex-col md:col-span-2">
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <CardCategories />
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