import { useRef } from 'react'
import { Flex, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export const Search = () => {
    const searchInputRef = useRef<HTMLInputElement>(null)

    return (
        <Flex
            as='label'
            maxW={400}
            bgColor='gray.800'
            color='gray.200'
            py='4'
            px='8'
            ml='4'
            position='relative'
            flex='1'
            alignSelf='center'
            borderRadius='full'
        >
            <Input
                as='input'
                type='text'
                bg='transparent'
                color='gray.50'
                border='none'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder='Buscar na plataforma'
                _placeholder={{ color: 'gray.400' }}
                ref={searchInputRef}
            />
            <Icon as={RiSearchLine} fontSize='20' />
        </Flex>
    )
}