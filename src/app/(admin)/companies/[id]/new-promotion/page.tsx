import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import { getCompanies, getCompany } from '@/app/lib/api';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  if (!id) {
    return <div>Company ID is required</div>;
  }

  try {
    const company = await getCompany(id);

    if (!company) {
      return <div>Company not found</div>;
    }

    return (
      <div className="py-6 px-10">
        <h1>{company.title}</h1>
        <PromotionForm companyId={id} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching company:', error);
    return <div>Error loading company data</div>;
  }
}

export async function generateStaticParams() {
  console.log("Fetching companies...");
  const companies = await getCompanies();
  console.log("Fetched companies:", companies);

  if (!companies.length) {
    console.error("No companies found");
    return [];
  }

  return companies.map((company) => {
    if (!company.id) {
      console.error("Company without id:", company);
    }
    return { id: company.id.toString() };
  });
}