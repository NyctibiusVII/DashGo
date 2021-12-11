import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
    name: string
    label?: string
    errors?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, errors = null, ...rest }, ref) => {
    return (
        <>
            <FormControl isInvalid={!!errors}>
                { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

                <ChakraInput
                    id={name}
                    name={name}
                    type='email'
                    size='lg'
                    bgColor='gray.900'
                    variant='filled'
                    focusBorderColor='pink.500'
                    _hover={{ bgColor: 'gray.900' }}
                    ref={ref}
                    {...rest}
                />

                { !!errors && <FormErrorMessage>{errors.message}</FormErrorMessage> }
            </FormControl>
        </>
    )
}
export const Input = forwardRef(InputBase)