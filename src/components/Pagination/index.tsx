import { PaginationItem } from './PaginationItem'

import { Box, Stack } from '@chakra-ui/react'

export const Pagination = () => {
    return (
        <Stack
            spacing='6'
            direction={['column', 'row' ]}
            mt='8'
            justify='space-between'
            align='center'
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack spacing='2' direction='row'>
                <PaginationItem number={1} isCurrent={true} />

                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
                <PaginationItem number={5} />
                <PaginationItem number={6} />
                <PaginationItem number={7} />
            </Stack>
        </Stack>
    )
}