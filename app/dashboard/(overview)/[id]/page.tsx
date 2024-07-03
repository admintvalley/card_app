import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers, fetchCardByWord } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const [cards] = await Promise.all([
      fetchCardByWord(id),
      ]);

    if (!cards) {
    notFound();
    }


    return (
    <div className="hola">hola</div>
   
  );
}