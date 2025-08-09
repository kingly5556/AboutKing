import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a href='/'className="btn btn-ghost text-xl">About King</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/aboutme'>About Me</a></li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Hobby</a></li>
            <li><a>Interesting</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
