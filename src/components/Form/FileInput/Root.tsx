'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

interface InputFileContextType {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const InputFileContext = createContext({} as InputFileContextType)

type InputFileRootProps = ComponentProps<'div'>

export function InputFileRoot(props: InputFileRootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[]) {
    setFiles(files)
  }

  return (
    <InputFileContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </InputFileContext.Provider>
  )
}
export const useFileInput = () => useContext(InputFileContext)
