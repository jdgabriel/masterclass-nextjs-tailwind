'use client'
import * as Tabs from '@radix-ui/react-tabs'

export interface TabItemProps {
  value: string
  title: string
}

export function TabItem({ value, title }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-500"
    >
      <span>{title}</span>

      <div className="absolute -bottom-px left-0 right-0 h-0 bg-violet-500 group-data-[state=active]:h-0.5" />
    </Tabs.Trigger>
  )
}
