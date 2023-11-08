import { Navigation } from '@/typings/navigation.type'
import {
  CalculatorIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
  BellIcon,
  CodeIcon
} from '@heroicons/vue/outline'

export const navigations: Navigation[] = [
  {
    name: 'Dashboard',
    module: 'DASHBOARD',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Settings',
    module: 'SETTING',
    href: '/setting',
    icon: CogIcon
  },
  {
    name: 'User Security',
    icon: UserIcon,
    children: [{
      name: 'User',
      module: 'USER',
      href: '/user'
    },
    {
      name: 'Role',
      module: 'ROLE',
      href: '/role'
    },
    {
      name: 'Permission',
      module: 'PERMISSION',
      href: '/permission'
    }]
  }
]

export const secondaryNavigations: Navigation[] = [
  {
    name: 'Maintenance',
    icon: CalculatorIcon,
    children: [{
      name: 'System Log',
      module: 'LOG',
      href: '/log',
      icon: BellIcon
    },
    {
      name: 'Statistic',
      module: 'STATISTIC',
      href: '/statistic',
      icon: CodeIcon
    }]
  }
]
