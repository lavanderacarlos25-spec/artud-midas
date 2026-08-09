import { BusinessEditPage } from "@/components/businesses/BusinessEditPage";

type EditBusinessPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditBusinessPage({
  params,
}: EditBusinessPageProps) {
  const { id } = await params;
  return <BusinessEditPage businessId={id} />;
}
