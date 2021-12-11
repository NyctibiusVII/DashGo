import { HStack, Icon } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export const NotificationsNav = () => {
    return (
        <HStack
            spacing={['6', '8']}
            color='gray.300'
            borderColor='gray.700'
            pr={['6', '8']}
            py='1'
            mx={['6', '8']}
            borderRightWidth={1}
        >
            <Icon as={RiNotificationLine} fontSize='20' />
            <Icon as={RiUserAddLine} fontSize='20' />
        </HStack>
    )
}