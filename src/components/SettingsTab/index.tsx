'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem, TabItemProps } from './TabItem'
import { useState } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

const tabs: Array<TabItemProps> = [
  { value: '1', title: 'My details' },
  { value: '2', title: 'Profile' },
  { value: '3', title: 'Password' },
  { value: '4', title: 'Team' },
  { value: '5', title: 'Plan' },
  { value: '6', title: 'Billing' },
  { value: '7', title: 'Email' },
  { value: '8', title: 'Notifications' },
  { value: '9', title: 'Integrations' },
  { value: '10', title: 'API' },
]

export function SettingsTab() {
  const [currentTab, setCurrentTab] = useState(tabs[0].value)
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            {tabs.map((tab) => (
              <TabItem
                key={tab.value}
                value={tab.value}
                title={tab.title}
                isSelected={currentTab === tab.value}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-x-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
