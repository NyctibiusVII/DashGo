import { NextPage } from 'next'

import { Header }  from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/input'

import {
    Flex,
    Box,
    Heading,
    Divider,
    VStack,
    SimpleGrid,
    HStack,
    Button
} from '@chakra-ui/react'

import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import Head from 'next/head'
import Link from 'next/Link'

type CreateUserFormData = {
    name:  string
    email: string
    password:              string
    password_confirmation: string
}

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'Senha deve ter no minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem')
})

const CreateUser: NextPage = () => {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })
    const { errors } = formState

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
        await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return (
        <>
            <Head><title>Users | DashGo</title></Head>

            <Box>
                <Header />

                <Flex w='100%' maxW={1480} px='6' my='6' mx='auto'>
                    <Sidebar />

                    <Box as='form' bgColor='gray.800' p={['6', '8']} flex='1' borderRadius='8' onSubmit={handleSubmit(handleCreateUser)}>
                        <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

                        <Divider borderColor='gray.700' my='6' />

                        <VStack spacing='8'>
                            <SimpleGrid w='100%' minChildWidth={240} spacing={['6', '8']}>
                                <Input type='text' label='Nome completo' placeholder='Digite seu nome completo' errors={errors.name} {...register('name')} />
                                <Input type='email' label='E-mail' placeholder='Digite seu melhor e-mail' errors={errors.email} {...register('email')} />
                            </SimpleGrid>

                            <SimpleGrid w='100%' minChildWidth={240} spacing={['6', '8']}>
                                <Input type='password' label='Senha' placeholder='Digite sua senha' errors={errors.password} {...register('password')} />
                                <Input type='password' label='Confirmar senha' placeholder='Confirme sua senha' errors={errors.password_confirmation} {...register('password_confirmation')} />
                            </SimpleGrid>
                        </VStack>

                        <Flex mt='8' justify='flex-end'>
                            <HStack spacing='4'>
                                <Link href='/users' passHref><Button as='a' colorScheme='whiteAlpha'>Cancelar</Button></Link>
                                <Button type='submit' colorScheme='pink' isLoading={formState.isSubmitting}>Salvar</Button>
                            </HStack>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default CreateUser