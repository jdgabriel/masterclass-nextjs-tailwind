'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem, TabItemProps } from './TabItem'

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

export default function SettingsTab() {
  return (
    <Tabs.Root defaultValue={tabs[0].value}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map((tab) => (
          <TabItem key={tab.value} value={tab.value} title={tab.title} />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
