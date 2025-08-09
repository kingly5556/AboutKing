'use client'

import { login } from './actions'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primary">Log In</h2>
      <form className="space-y-4">
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input id="email" name="email" type="email" required className="input input-bordered" />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">Password</span>
          </label>
          <input id="password" name="password" type="password" required className="input input-bordered" />
        </div>

        <div className="flex flex-col gap-2">
          <button formAction={login} className="btn btn-primary w-full">
            Log in
          </button>
          <Link href="/signup">
            <button type="button" className="btn btn-outline w-full">
              สมัครสมาชิก
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
