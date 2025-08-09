'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-base-200">
      <section className="bg-base-100 border-b border-base-300">
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-14 flex flex-col md:flex-row items-center gap-8">
          <div className="avatar">
            <div className="w-36 md:w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <Image
                src="/image/king.png"
                alt="Kongkat profile picture"
                width={176}
                height={176}
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary">
              About Me
            </h1>
            <p className="mt-3 text-lg leading-relaxed">
              Hello! I’m <strong>Kongkat</strong> — an <strong>AI Engineer</strong> and{' '}
              <strong>Back-end Developer</strong>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/image/Kongkat_Resume.png"
                className="btn btn-primary btn-sm"
                download="Kongkat_Resume.jpg"
                aria-label="Download resume as JPG"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 md:py-14 space-y-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title text-secondary">Focus</h3>
              <p>AI systems, LLM tooling, RAG, scalable APIs.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title text-secondary">Currently</h3>
              <p>Building back-end services and AI-powered analysis features.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title text-secondary">Looking for</h3>
              <p>Back-end / AI Engineer</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-secondary">Featured Project</h2>

          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="/image/icon.png" 
              alt="Quill logo"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
              priority
            />
          </div>

              <div className="lg:w-1/2">
                <h3 className="card-title text-lg md:text-xl">Quill</h3>
                <p className="mt-2 leading-relaxed">
                  A website for writing and reading novels, featuring an AI-powered novel
                  analysis system. The analysis is based on a Role system built using
                  <strong> RAG</strong>, combined with the OpenAI API to create personas
                  modeled after real-life professions to analyze user-written novels.
                  <br />
                  <br />
                  <span className="font-medium">My responsibility:</span> Back-end system
                  for the novel analysis.
                  <br />
                  <span className="font-medium">Tech stack:</span>
                  <strong> Python, FastAPI, OpenAI API, ChromaDB</strong>
                </p>

                <div className="card-actions justify-start mt-4">
                  <a
                    href="https://github.com/kingly5556/QuillRoleService"
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                  <a
                    href="https://writer-assistant-pied.vercel.app/"
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>

       
      </section>
    </main>
  );
}
