import { BusinessDetailPage } from "@/components/businesses/BusinessDetailPage";

type BusinessPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { id } = await params;
  return <BusinessDetailPage businessId={id} />;
}
