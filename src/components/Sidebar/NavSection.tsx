import { ReactNode } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

interface NavSectionProps {
    title: string
    children: ReactNode
}

export const NavSection = ({ title, children }: NavSectionProps) => {
    return(
        <Box>
            <Text color='gray.400' fontSize='small' fontWeight='bold'>{title}</Text>
            <Stack spacing='4' mt='8' align='stretch'>
                { children }
            </Stack>
        </Box>
    )
}