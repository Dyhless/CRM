import React from 'react';
// import { Category, Company, getCategories, getCompanies } from '@/app/lib/api';
// import getCountById from '@/app/lib/utils/getCountById';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export type PageProps = object;

export default async function Page({}: PageProps) {
  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        <div className="col-span-3">
          <StatCard type={StatCardType.Dark} label="Category 1" counter={0} />
        </div>
      </div>
    </DashboardCard>
  );
}
