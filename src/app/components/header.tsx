import React from 'react';
import Image from 'next/image';
import ThemeToggle from '@/app/components/theme-toggle';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center gap-5 border-b border-gray-300 bg-white px-10 py-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900 dark:text-zinc-100">
        {children}
      </h1>
      <ThemeToggle />
      <div className="w-px self-stretch bg-gray-300 dark:bg-zinc-700" />
      <div className="flex gap-3">
        <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
        <div>
          <p className="text-base font-semibold text-gray-900 dark:text-zinc-100">Adam Smith</p>
          <p className="text-sm font-light text-gray-900 dark:text-zinc-300">adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
