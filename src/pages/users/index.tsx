import type { GetServerSideProps, NextPage } from 'next'

import { Header }     from '../../components/Header'
import { Sidebar }    from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

import { useState } from 'react'
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
    useBreakpointValue,
    Spinner,
    Link as ChakraLink
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { api } from '../../services/api'
import { getUsers, useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'

import Head from 'next/head'
import Link from 'next/Link'

const Users: NextPage = () => {
    const [ page, setPage ] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    const isWideVersionForBtn = useBreakpointValue({
        base: false,
        md: true
    })

    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`/users/${userId}`)

            return response.data
        }, { staleTime: 1000 * 60 * 10 }) // 10 minutes
    }

    return (
        <>
            <Head><title>Users | DashGo</title></Head>

            <Box>
                <Header />

                <Flex w='100%' maxW={1480} px='6' my='6' mx='auto'>
                    <Sidebar />

                    <Box bgColor='gray.800' p='8' flex='1' borderRadius='8'>
                        <Flex mb='8' align='center' justify='space-between'>
                            <Heading size='lg' fontWeight='normal'>
                                Usuários
                                { !isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' /> }
                            </Heading>
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

                        { isLoading ?
                            <Flex justify='center'><Spinner /></Flex>
                        : error ?
                            <Flex justify='center'><Text>Falha ao obter dados dos usuários.</Text></Flex>
                        :
                            <>
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
                                        { data?.users.map(user => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px={['4', '4', '6']}>
                                                        <Checkbox colorScheme='pink' />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <ChakraLink color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                                <Text fontWeight='bold'>{user.name}</Text>
                                                            </ChakraLink>
                                                            <Text color='gray.300' fontSize='sm'>{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    { isWideVersion && <Td>{user.createdAt}</Td> }
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
                                            )
                                        }) }
                                    </Tbody>
                                </Table>

                                <Pagination
                                    totalCountOfRegisters={data?.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        }
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default Users