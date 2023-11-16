import { Mail } from 'lucide-react'

import { InputFile } from '@/components/Form/FileInput'
import { Input } from '@/components/Form/Input'
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

        <form
          id="form-settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Gabriel" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="lastName" defaultValue="Duarte" />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="jds.gabrielduarte@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="photo"
              className="gap-2 text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <InputFile.Root className="flex items-start gap-5">
              <InputFile.Preview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" type="text" defaultValue="Developer I" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Input.Root>
              <Input.Control id="country" type="text" defaultValue="Brazil" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Input.Root>
              <Input.Control
                id="timezone"
                type="text"
                defaultValue="Pacific Standard Time (PST) UTC−08:00"
              />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
            </label>
            <Input.Root>
              <Input.Control id="bio" type="text" defaultValue="Bio" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="portfolio"
              className="gap-3 text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <InputFile.Root>
              <InputFile.Trigger />
              <InputFile.Control multiple />
              <InputFile.FileList />
            </InputFile.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white  shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
