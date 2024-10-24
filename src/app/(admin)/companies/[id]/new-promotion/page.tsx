import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import { getCompanies, getCompany } from '@/app/lib/api';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  try {
    const company = await getCompany(params.id);

    if (!company) {
      return <div>Company not found</div>; 
    }

    return (
      <div className="py-6 px-10">
        <h1>{company.title || 'Без названия'}</h1>
        <PromotionForm companyId={params.id} />
      </div>
    );
  } catch (error) {
    console.error('Ошибка при загрузке компании:', error);
    return <div>Error fetching company</div>; 
  }
}

export async function generateStaticParams() {
  console.log("Fetching companies...");
  const companies = await getCompanies();
  console.log("Fetched companies:", companies);
  return companies.map((company) => ({
    id: company.id.toString(),
  }));
}