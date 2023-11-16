import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div className="flex items-center" {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-300 placeholder-zinc-600"
      {...props}
    />
  )
}
type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-start gap-2 rounded-lg border border-zinc-900 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Root: InputRoot,
  Control: InputControl,
}