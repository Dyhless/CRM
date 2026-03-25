import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900 dark:bg-zinc-950 dark:text-zinc-100 sm:px-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-cyan-300">
            CRM for Vendors
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">Главная страница проекта</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 dark:text-zinc-300">
            Панель поставщиков с аналитикой, компаниями и промо. Используйте быстрые переходы ниже,
            чтобы открыть нужный раздел.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <Link
            className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            href="/dashboard"
          >
            Перейти в Dashboard
          </Link>
          <Link
            className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            href="/companies"
          >
            Открыть Companies
          </Link>
          <Link
            className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            href="/dark-mode"
          >
            Проверить Dark Mode
          </Link>
        </section>
      </div>
    </main>
  );
}