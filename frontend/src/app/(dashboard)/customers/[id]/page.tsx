import { CustomerDetail360 } from "@/components/customers/CustomerDetail360";

type CustomerPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CustomerPage({ params }: CustomerPageProps) {
  const { id } = await params;
  return <CustomerDetail360 customerId={id} />;
}
