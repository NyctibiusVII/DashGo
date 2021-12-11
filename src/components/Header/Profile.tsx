import {
    Flex,
    Text,
    Box,
    Avatar
} from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export const Profile = ({ showProfileData }: ProfileProps) => {
    return (
        <Flex align='center'>
            { showProfileData &&
                <Box mr='4' textAlign='right'>
                    <Text>Matheus Vidigal</Text>
                    <Text color='gray.300' fontSize='small'>
                        matheus.dev.07@gmail.com
                    </Text>
                </Box>
            }
            
            <Avatar
                src='https://github.com/nyctibiusvii.png'
                name='Matheus Vidigal'
                size='md'
            />
        </Flex>
    )
}