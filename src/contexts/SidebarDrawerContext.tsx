import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

type SidebarDrawerContextDataType = UseDisclosureReturn
interface SidebarDrawerProviderProps {
    children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextDataType)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => disclosure.onClose, [ disclosure.onClose, router.asPath ])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)