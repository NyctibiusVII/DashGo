import type { NextPage } from 'next'

import { Input } from '../components/Form/input'

import { Flex, Stack, Button } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

import Head from 'next/head'

type SignInFormData = {
    email: string
    password: string
}

const SignInFormSchema = yup.object().shape({
    email: yup.string().email('E-mail invalido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória'),
})

const SignIn: NextPage = () => {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(SignInFormSchema)
    })
    const { errors } = formState

    const handleSignIn: SubmitHandler<SignInFormData> = async values => {
        await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return (
        <>
            <Head><title>Login | DashGo</title></Head>

            <Flex
                w='100vw'
                h='100vh'
                align='center'
                justify='center'
            >
                <Flex
                    as='form'
                    w='100%'
                    maxW={360}
                    bgColor='gray.800'
                    p='8'
                    flexDir='column'
                    borderRadius='8'
                    onSubmit={handleSubmit(handleSignIn)}
                >
                    <Stack spacing='4'>
                        <Input type='email'    label='E-mail'   errors={errors.email}    {...register('email')}    />
                        <Input type='password' label='Password' errors={errors.password} {...register('password')} />
                    </Stack>

                    <Button
                        type='submit'
                        size='lg'
                        colorScheme='pink'
                        mt='6'
                        isLoading={formState.isSubmitting}
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}
export default SignIn
