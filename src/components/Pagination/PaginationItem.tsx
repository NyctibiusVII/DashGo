import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
    number: number
    isCurrent?: boolean
    onPageChange: (page: number) => void
}

export const PaginationItem = ({ number, isCurrent = false, onPageChange }: PaginationItemProps) => {
    if (isCurrent) {
        return (
            <Button
                w='4'
                size='sm'
                colorScheme='pink'
                fontSize='xs'
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            w='4'
            size='sm'
            bgColor='gray.700'
            fontSize='xs'
            _hover={{ bgColor: 'gray.500' }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}