import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo }             from './Logo'
import { Search }           from './Search'
import { NotificationsNav } from './NotificationsNav'
import { Profile }          from './Profile'

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

export const Header = () => {
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return(
        <Flex
            as='header'
            w='100%'
            h='20'
            maxW={1480}
            px='6'
            mx='auto'
            mt='4'
            align='center'
        >
            { !isWideVersion &&
                <IconButton
                    aria-label='Abrir menu de navegação'
                    icon={<Icon as={RiMenuLine} />}
                    fontSize='24'
                    variant='unstyled'
                    mr='2'
                    onClick={onOpen}
                >

                </IconButton>
            }

            <Logo />

            { isWideVersion && <Search /> }

            <Flex ml='auto' align='center'>
                <NotificationsNav />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}