import React from 'react';
import { Category, Company, getCategories, getCompanies } from '@/app/lib/api';
import getCountById from '@/app/lib/utils/getCountById';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export type PageProps = object;

export default async function Page({}: PageProps) {
  let categories: Category[] = [];
  let companies: Company[] = [];

  try {
    categories = await getCategories();
    companies = await getCompanies();
  } catch (error) {
    console.error('Error loading data:', error);
    return <div>Error loading data</div>;
  }

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={counts[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
