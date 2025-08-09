'use client'

import { signup } from './action'
import { useActionState } from 'react'

export default function SignUp() {
  const [state, formAction] = useActionState(signup, { message: '' })

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-primary">Sign Up</h2>
      <form action={formAction} className="space-y-4">
        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">Username</span>
          </label>
          <input id="username" name="username" type="text" required className="input input-bordered" />
        </div>

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

        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>

        {state.message && state.message !== 'ok' && (
          <div className="text-red-500 text-sm mt-2">{state.message}</div>
        )}
        {state.message === 'ok' && (
          <div className="text-green-500 text-sm mt-2">Signup successful!</div>
        )}
      </form>
    </div>
  )
}
