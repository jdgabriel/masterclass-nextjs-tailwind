'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type InputFileControlProps = ComponentProps<'input'>

export function InputFileControl({
  multiple = false,
  ...props
}: InputFileControlProps) {
  const { id, files, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return
    const filesSelected = Array.from(event.target.files)
    if (multiple) {
      onFilesSelected([...files, ...filesSelected])
    } else {
      onFilesSelected(filesSelected)
    }
  }

  return (
    <input
      onChange={handleFilesSelected}
      className="sr-only"
      id={id}
      type="file"
      multiple={multiple}
      {...props}
    />
  )
}
