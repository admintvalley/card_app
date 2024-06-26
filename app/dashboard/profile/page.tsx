import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import ProfilePage from '@/app/ui/profile/profile';
import { getSessionData } from '@/app/lib/actions';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  const sessionData = getSessionData()
  console.log("sessionData",sessionData)
  return (
    <main> 
      
      <ProfilePage customers={customers} />
    </main>
  );
}