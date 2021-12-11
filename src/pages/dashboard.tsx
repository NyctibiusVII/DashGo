import type { NextPage } from 'next'

import { Header }  from '../components/Header'
import { Sidebar } from '../components/Sidebar'

import {
    Flex,
    SimpleGrid,
    Box,
    Text,
    theme
} from '@chakra-ui/react'

import dynamic from 'next/dynamic'
import Head    from 'next/head'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const series = [
    {
        name: 'series-1',
        data: [33, 66, 44, 55, 22, 11, 77]
    },
]
const options: ApexOptions = {
    chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        foreColor: theme.colors.gray[500],
    },
    grid: { show: false, },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    xaxis: {
        type: 'datetime',
        axisBorder: { color: theme.colors.gray[600] },
        axisTicks: { color: theme.colors.gray[600] },
        categories: [
            '2022-01-01T00:00:00.000Z',
            '2022-02-22T00:00:00.000Z',
            '2022-03-03T00:00:00.000Z',
            '2022-04-14T00:00:00.000Z',
            '2022-05-05T00:00:00.000Z',
            '2022-06-16T00:00:00.000Z',
            '2022-07-07T00:00:00.000Z'
        ]
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 1,
            gradientToColors: [theme.colors.pink[500]]
        },
        opacity: 0.3,
    }
}

const DashBoard: NextPage = () => {
    return (
        <>
            <Head><title>DashBoard | DashGo</title></Head>

            <Flex h='100vh' direction='column'>
                <Header />

                <Flex w='100%' maxW={1480} px='6' my='6' mx='auto'>
                    <Sidebar />

                    <SimpleGrid minChildWidth={320} flex='1' align='flex-start' gap='4'>
                        <Box
                            bgColor='gray.800'
                            p={['6', '8']}
                            pb='4'
                            borderRadius={8}
                        >
                            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                            <Chart type='area' height={160} series={series} options={options} />
                        </Box>

                        <Box
                            bgColor='gray.800'
                            p={['6', '8']}
                            pb='4'
                            borderRadius={8}
                        >
                            <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                            <Chart type='area' height={160} series={series} options={options} />
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}
export default DashBoard
