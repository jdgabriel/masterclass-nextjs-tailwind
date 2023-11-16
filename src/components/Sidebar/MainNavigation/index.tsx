import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem, NavItemProps } from './NavItem'

const navigation: Array<NavItemProps> = [
  { title: 'Home', icon: Home },
  { title: 'Dashboard', icon: BarChart },
  { title: 'Projects', icon: SquareStack },
  { title: 'Tasks', icon: CheckSquare },
  { title: 'Reporting', icon: Flag },
  { title: 'Users', icon: Users },
]

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      {navigation.map((nav) => (
        <NavItem key={nav.title} title={nav.title} icon={nav.icon} />
      ))}
    </nav>
  )
}
