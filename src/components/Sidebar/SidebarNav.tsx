import { NavSection } from './NavSection'
import { NavLink }    from './NavLink'

import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export const SidebarNav = () => {
    return (
        <Stack spacing='12' align='flex-start'>
            <NavSection title='GERAL'>
                <NavLink href='/dashboard' icon={RiDashboardLine}>
                    DashBoard
                </NavLink>

                <NavLink href='/users' icon={RiContactsLine}>
                    Usuários
                </NavLink>
            </NavSection>


            <NavSection title='AUTOMAÇÃO'>
                <NavLink href='/forms' icon={RiInputMethodLine}>
                    Formulários
                </NavLink>

                <NavLink href='/automation' icon={RiGitMergeLine}>
                    Automação
                </NavLink>
            </NavSection>
        </Stack>
    )
}