// app/components/SiteFooter.tsx
'use client';

import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="footer bg-base-200 text-base-content p-8 mt-12">
      {/* Contact */}
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a href="" className="link link-hover">kingly5556@gmail.com</a>
        <a href="https://github.com/kingly5556" target="_blank" rel="noreferrer" className="link link-hover">GitHub</a>
      </nav>

      {/* Quick links */}
      <nav>
        <h6 className="footer-title">Explore</h6>
        <Link href="/aboutme" className="link link-hover">About Me</Link>
        <Link href="/hobby" className="link link-hover">Hobby</Link>
      </nav>

      {/* Powered by / Support */}
      <nav>
        <h6 className="footer-title">Powered by</h6>
        <span>Next.js · DaisyUI · Tailwind</span>
        <span>Deployed on Vercel</span>
        <span>AI services by OpenAI</span>
      </nav>
    </footer>
  );
}
