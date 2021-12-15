import { Stack } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

import { NavSection } from './NavSection'
import { NavLink } from './NavLink'


export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" title="Dashboard" icon={RiDashboardLine} />
        <NavLink href="/users" title="Usuários" icon={RiContactsLine} />
      </NavSection>
      <NavSection title="AUTOMAÇÂO">
        <NavLink href="/forms" title="Formulários" icon={RiInputMethodLine} />
        <NavLink href="/automation" title="Automação" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}