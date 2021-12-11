import { ActiveLink } from '../ActiveLink'

import { ElementType } from 'react'
import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'


interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType
    href: string
    children: string
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' align='center' {...rest}>
                <Icon as={icon} fontSize='20' />
                <Text fontWeight='medium' ml='4'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}