import React from 'react';
import Header from '@/app/components/header';

export type PageProps = object;

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dark Mode</Header>
      <section className="min-h-[calc(100vh-93px)] bg-zinc-950 text-zinc-100 px-8 py-8 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/20">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">Theme</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Night Workspace</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Dark palettes reduce eye strain for long sessions and keep key actions in focus.
            </p>
            <div className="mt-6 h-2 rounded-full bg-zinc-800">
              <div className="h-full w-3/4 rounded-full bg-cyan-400" />
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/20">
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">Readability</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Balanced Contrast</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Surfaces use subtle luminance steps so panels are separated without harsh edges.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-zinc-200">
              <li className="rounded-lg bg-zinc-800/70 px-3 py-2">Primary text: zinc-100</li>
              <li className="rounded-lg bg-zinc-800/70 px-3 py-2">Secondary text: zinc-300</li>
              <li className="rounded-lg bg-zinc-800/70 px-3 py-2">Borders: zinc-800</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-900/60 bg-gradient-to-br from-cyan-500/15 via-zinc-900 to-zinc-900 p-6 shadow-xl shadow-cyan-950/20">
            <p className="text-sm font-medium uppercase tracking-wide text-cyan-300">Accent</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Focused Actions</h2>
            <p className="mt-2 text-sm text-zinc-300">
              A single accent color highlights calls to action while preserving a calm dark canvas.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-300"
            >
              Preview Theme
            </button>
          </article>
        </div>
      </section>
    </>
  );
}