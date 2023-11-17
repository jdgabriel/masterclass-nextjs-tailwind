import { twMerge } from 'tailwind-merge'

export function UsedSpaceWidget() {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5',
        'dark:bg-zinc-800',
      )}
    >
      <div className="space-y-1">
        <span
          className={twMerge(
            'text-sm/5 font-medium text-violet-700',
            'dark:text-zinc-100',
          )}
        >
          Used space
        </span>
        <p
          className={twMerge('text-sm/5 text-violet-500', 'dark:text-zinc-400')}
        >
          You team has used 80% of your available space. Need more?
        </p>
      </div>

      <div
        className={twMerge(
          'h-2 rounded-full bg-violet-100',
          'dark:bg-zinc-600',
        )}
      >
        <div
          className={twMerge(
            'h-2 w-4/5 rounded-full bg-violet-600',
            'dark:bg-zinc-400',
          )}
        ></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className={twMerge(
            'text-sm font-medium text-violet-500',
            'dark:text-violet-300 dark:hover:text-violet-100',
          )}
        >
          Dismiss
        </button>
        <button
          type="button"
          className={twMerge(
            'text-sm font-medium text-violet-700',
            'dark:text-zinc-300 dark:hover:text-zinc-100',
          )}
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
