import SettingsTab from '@/components/SettingsTab'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTab />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white  shadow-sm hover:bg-violet-700"
              type="submit"
              form="form-settings"
            >
              Save
            </button>
          </div>
        </div>

        <form id="form-settings" className="mt-6 flex w-full flex-col">
          form
        </form>
      </div>
    </>
  )
}
