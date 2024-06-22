import { ArrowRightCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';


export function RedirectToCategory({ title }: { title: string }) {
  return (
    <Link
    href={`/dashboard/cards/${title}/`}
    className="rounded-md w-2/3 border p-2 m-2 hover:bg-gray-100 flex justify-around text-sm"
    >Go to {title} Category
      <ArrowRightCircleIcon className="w-5" />
    </Link>
  );
}
