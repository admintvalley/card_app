
import { fetchCardsByCategoryTitle } from '@/app/lib/data';
import CardTable from '@/app/ui/card/cards';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const title = params.id;
    const [card] = await Promise.all([fetchCardsByCategoryTitle(title)]);
    if (!card) {
    notFound();
    }

    return (
    <CardTable card={card} title={title}></CardTable>
  );
}