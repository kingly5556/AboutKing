'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-[80vh] space-y-12">
      <section className="hero bg-base-200 rounded-xl shadow-md p-6">
        <div className="hero-content flex-col text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-primary">Welcome to AboutKing</h1>
          <p className="py-4 text-lg opacity-90">
            Good to see you. Take a look at my latest projects and explore my skills.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/aboutme" className="btn btn-primary" aria-label="Go to About Me">
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-secondary">Quick Links</h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h3 className="card-title">About Me</h3>
              <p>Who I am, what I do, and what I care about.</p>
              <div className="card-actions justify-end">
                <Link href="/aboutme" className="btn btn-sm btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h3 className="card-title">Hobby</h3>
              <p>Music, fitness, reading, and the things that energize me.</p>
              <div className="card-actions justify-end">
                <Link href="/hobby" className="btn btn-sm btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h3 className="card-title">Resume</h3>
              <p>Download my latest resume (PDF/JPG).</p>
              <div className="card-actions justify-end">
                <a href="/image/Kongkat_resume.jpg" download className="btn btn-sm btn-primary">
                  Download
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <div className="card-body">
              <h3 className="card-title">Contact</h3>
              <p>Get in touch for collaboration or opportunities.</p>
              <div className="card-actions justify-end">
                <Link href="/contact" className="btn btn-sm btn-primary">Open</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
}
