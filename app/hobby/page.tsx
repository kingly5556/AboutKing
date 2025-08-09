// app/hobby/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hobby() {
  return (
    <main className="min-h-screen bg-base-200">
      <section className="bg-base-100 border-b border-base-300">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center gap-8">
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold">Hobbies & Interests</h1>
            <p className="mt-2 text-lg opacity-80">
              What I Like to Do in My Free Time
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-6">
        <h2 className="text-3xl font-bold text-secondary">What I Enjoy</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">💡 Tech & AI</h3>
              <p className="opacity-90">
                I’m currently studying at Rajamangala University of Technology Isan, majoring in Computer Science. My main interest is in AI and LLMs, as I believe they are truly the future. Right now, I’m particularly fascinated by the concept of Agentic systems and am actively studying them.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="badge badge-primary">AI</div>
                <div className="badge badge-primary">RAG</div>
                <div className="badge badge-ghost">LLM</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">🎹 Music & Piano</h3>
              <p className="opacity-90">
                I really love classical music — its depth, the various interpretations, and the joy of playing it. Even though I’m self-taught and may not play exactly as written on the sheet music, I always try my best. Pieces I can play include Prelude in E minor, Op. 28 No. 4, Moonlight Sonata (Mvt. 1), and Clair de Lune. I’m currently practicing Prelude in C-sharp minor, Op. 3 No. 2.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">📚 Reading</h3>
              <p className="opacity-90">
                I read books about various mechanisms, such as memory techniques, from the book How We Learn. I also read novels — mainly Classroom of the Elite — as well as science and astronomy.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">🏃‍♂️ Fitness</h3>
              <p className="opacity-90">
                I do weight training because I’m inspired by several anime characters, such as Fushiguro Toji, Hanma Baki, and Sung Jin-Woo. Right now, I’m cutting fat in preparation for bulking again.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">🕹️ Game</h3>
              <p className="opacity-90">
               Most of the games I play are story-driven single-player titles, such as the Devil May Cry series, Genshin Impact, Honkai: Star Rail, and Zenless Zone Zero. The last three have been tough on my wallet, haha, but I really enjoy immersing myself in their stories.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
              </div>
            </div>
          </div>
        
        </div>
        <div>
            <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">📺 Reading</h3>
              <p className="opacity-90">
                Anime is the first thing I turn to whenever I have free time. I love Japanese culture, though that doesn’t mean I only watch Japan-style anime. I enjoy many different styles of anime—actually, I should say I enjoy anime with great stories. No matter the genre, if the story is good, it’s always worth watching.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
              </div>
            </div>
          </div>
        </div>
        
      </section>

      
    </main>
  );
}
