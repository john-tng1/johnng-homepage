import { Container, Box, Heading } from '@chakra-ui/react'


const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" color='white' bg="#5d66c0" p={3} mb={6} align="center" >
                Hello! I&apos;m a software engineer based in Sydney Australia!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        John Nguyen
                    </Heading>
                <p> Developer / Electronics Engineer / ML Enthusiast </p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page