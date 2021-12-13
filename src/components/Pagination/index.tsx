import { PaginationItem } from './PaginationItem'

import { Box, Stack, Text } from '@chakra-ui/react'

interface PaginationProps {
    currentPage?: number
    registersPerPage?: number
    totalCountOfRegisters: number | undefined
    onPageChange: (page: number) => void
}

const siblingsCount = 1
const generatePagesArray = (from: number, to: number) => [...new Array(to - from)].map((_, index) => from + index + 1).filter(page => page > 0)
const f_lastPage      = (totalCountOfRegisters: number, registersPerPage: number) => Math.floor(totalCountOfRegisters / registersPerPage)
const f_previousPages = (currentPage: number) => currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []
const f_nextPages     = (currentPage: number, lastPage: number) => currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

export const Pagination = ({ currentPage = 1, registersPerPage = 10, totalCountOfRegisters = 0, onPageChange }: PaginationProps) => {
    const lastPage      = f_lastPage(totalCountOfRegisters, registersPerPage)
    const previousPages = f_previousPages(currentPage)
    const nextPages     = f_nextPages(currentPage, lastPage)

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
                { currentPage > (1 + siblingsCount) &&
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        { currentPage > (2 + siblingsCount) &&
                            <Text w='8' color='gray.300' textAlign='center'>...</Text>
                        }
                    </>
                }
                { previousPages.length > 0 && previousPages.map(page =>
                    <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                ) }
                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
                { nextPages.length > 0 && nextPages.map(page =>
                    <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                ) }
                { (currentPage + siblingsCount) < lastPage &&
                    <>
                        { (currentPage + 1 + siblingsCount) < lastPage &&
                            <Text w='8' color='gray.300' textAlign='center'>...</Text>
                        }
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                }
            </Stack>
        </Stack>
    )
}
