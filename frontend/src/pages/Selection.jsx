import React from 'react'
import { Box, Text, Center, Stack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { Mail, Globe } from 'lucide-react'

const Selection = () => {
    return (
        <Center p={4}>
            <Box
                borderWidth='1px'
                borderRadius='10px'
                overflow='hidden'
                display='flex'
                alignItems='center'
                justifyContent='center'
                padding='inherit'
                flexDirection='column'
                borderColor='gray.500'
                width={{ base: '100%', md: '80%', lg: '60%', xl: '40%' }}
            >
                <Text fontWeight='extrabold' fontSize='3xl' textAlign='center'>
                    Choose Announcement Type
                </Text>
                <Text fontSize='2xl' mb={10} textAlign='center'>
                    What kind of announcement would you like to make?
                </Text>

                <Stack direction={{ base: 'column', md: 'row' }} spacing='4' justify='center'>
                    {/* Email Announcement */}
                    <Box
                        as={Link}
                        to="/EmailCreate"
                        borderWidth='thin'
                        borderRadius='md'
                        padding='10'
                        flex='1'
                        textAlign='center'
                        _hover={{ borderColor: 'blue.400', boxShadow: 'md' }}
                        cursor='pointer'
                        borderColor="black"
                    >
                        <Mail size={30} color='blue' style={{ justifySelf: "center" }}/>
                        <Text fontWeight='extrabold' fontSize='2xl' textAlign='center' mb="2.5" >Email Announcement</Text>
                        <Text fontSize='xl' color='gray.600'>Share an update through email</Text>
                    </Box>

                    {/* Social Media Announcement */}
                    <Box
                        as={Link}
                        to="/SocialCreate"
                        borderWidth='thin'
                        borderRadius='md'
                        padding='10'
                        flex='1'
                        textAlign='center'
                        _hover={{ borderColor: 'blue.400', boxShadow: 'md' }}
                        cursor='pointer'
                        borderColor="black"
                    >
                        <Globe size={30} color='blue' style={{ justifySelf: "center" }}/>
                        <Text fontWeight='extrabold' fontSize='2xl' textAlign='center' mb="2.5">Social Media Announcement</Text>
                        <Text fontSize='xl' color='gray.600'>Share an update through social media</Text>
                    </Box>
                </Stack>

            </Box>
        </Center>
        
    )
}

export default Selection