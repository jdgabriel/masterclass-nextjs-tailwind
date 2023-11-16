import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/jdgabriel.png"
        alt="Image profile"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gabriel Duarte
        </span>
        <span className="truncate text-sm text-zinc-500">
          jds.gabrielduarte@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
