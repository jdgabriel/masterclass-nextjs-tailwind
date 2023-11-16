'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type InputFileControlProps = ComponentProps<'input'>

export function InputFileControl(props: InputFileControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return
    const files = Array.from(event.target.files)
    onFilesSelected(files)
  }

  return (
    <input
      onChange={handleFilesSelected}
      className="sr-only"
      id={id}
      type="file"
      {...props}
    />
  )
}
