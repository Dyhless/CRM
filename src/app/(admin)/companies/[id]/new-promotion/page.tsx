import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import { getCompanies, getCompany } from '@/app/lib/api';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const company = await getCompany(params.id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="py-6 px-10">
      <h1>{company.title}</h1>
      <PromotionForm companyId={params.id} />
    </div>
  );
}

export async function generateStaticParams() {
  const companies = await getCompanies(); 
  return companies.map((company) => ({
    id: company.id.toString(),
  }));
}