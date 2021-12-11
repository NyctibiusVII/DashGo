import type { NextPage } from 'next'

import { Header }     from '../../components/Header'
import { Sidebar }    from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

import {
    Flex,
    Text,
    Box,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Checkbox,
    Tbody,
    Td,
    useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import Head from 'next/head'
import Link from 'next/Link'

const Users: NextPage = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    const isWideVersionForBtn = useBreakpointValue({
        base: false,
        md: true
    })

    return (
        <>
            <Head><title>Users | DashGo</title></Head>

            <Box>
                <Header />

                <Flex w='100%' maxW={1480} px='6' my='6' mx='auto'>
                    <Sidebar />

                    <Box bgColor='gray.800' p='8' flex='1' borderRadius='8'>
                        <Flex mb='8' align='center' justify='space-between'>
                            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                            <Link href='/users/create' passHref>
                                <Button
                                    as='a'
                                    colorScheme='pink'
                                    size='sm'
                                    fontSize='sm'
                                    leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                                >
                                    Criar novo usuário
                                </Button>
                            </Link>
                        </Flex>

                        <Table colorScheme='whiteAlpha'>
                            <Thead>
                                <Tr>
                                    <Th w='8' color='gray.300' px={['4', '4', '6']}>
                                        <Checkbox colorScheme='pink' />
                                    </Th>
                                    <Th>Usuário</Th>
                                    { isWideVersion && <Th>Data de cadastro</Th> }
                                    <Th w='8' />
                                </Tr>
                            </Thead>

                            <Tbody>
                                <Tr>
                                    <Td px={['4', '4', '6']}>
                                        <Checkbox colorScheme='pink' />
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight='bold'>Matheus Vidigal</Text>
                                            <Text color='gray.300' fontSize='sm'>matheus.dev.07@gmail.com</Text>
                                        </Box>
                                    </Td>
                                    { isWideVersion && <Td>04 de abril, 2022</Td> }
                                    <Td>
                                        { isWideVersionForBtn &&
                                            <Button
                                                as='a'
                                                colorScheme='purple'
                                                size='sm'
                                                fontSize='sm'
                                                leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                            >
                                                Editar
                                            </Button>
                                        }
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Pagination />
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default Users