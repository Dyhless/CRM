'use client';

import React, { useEffect, useState } from 'react';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';
import getCountById from '@/app/lib/utils/getCountById';

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesRes = await fetch('/api/companies');
        const companiesData = await companiesRes.json();
        setCompanies(companiesData);

        const categoriesRes = await fetch('/api/categories');
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

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