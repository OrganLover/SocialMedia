import { useState, useLayoutEffect } from 'react';

export const useTheme = () => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const systemTheme = isDarkTheme ? 'dark' : 'light'

  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || systemTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return { theme, setTheme }
}