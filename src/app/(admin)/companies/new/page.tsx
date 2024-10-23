'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';

export type PageProps = object

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
