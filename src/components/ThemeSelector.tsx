'use client'
import { useTheme } from 'next-themes'
import { Button } from './Button'
import { MoonStar, SunMedium } from 'lucide-react'

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex w-full place-content-center gap-2">
      <Button
        variant={theme === 'dark' ? 'primary' : 'ghost'}
        onClick={() => setTheme('dark')}
      >
        <MoonStar className="h-4 w-4" />
        Dark
      </Button>
      <Button
        variant={theme === 'light' ? 'primary' : 'ghost'}
        onClick={() => setTheme('light')}
      >
        <SunMedium className="h-4 w-4" />
        Light
      </Button>
    </div>
  )
}
