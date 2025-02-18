import { useEffect, useState } from 'react'

import './ThemeToggle.css'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = sessionStorage.getItem('theme')

    if (stored === 'light' || stored === 'dark') {
      return stored
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove('light-mode', 'dark-mode')
    root.classList.add(`${theme}-mode`)
    sessionStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </svg>
    </button>
  )
}
