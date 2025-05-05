import { Box, Text, Center, Container, Grid, GridItem, ButtonGroup, Button, Flex, Avatar, Spacer } from "@chakra-ui/react"
import { useState } from 'react'
import Card from "../components/card"


const Approval = () => {



    return (
        <Center maxH={'100vh'} my={'2'}>
            <Box
                borderWidth='1px'
                borderRadius='10px'
                overflow='hidden'
                display='flex'
                alignItems='center'
                justifyContent='center'
                padding='5'
                flexDirection='column'
                borderColor='gray.500'
            >

                <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"left"}>Pending Announcements</Text>
                <Text textAlign={"left"}>Review and approve announcements submitted.</Text>

                <Card
                    name="Jibril Bugtong"
                    date="January 1, 2025"
                    body="WHATASJKLFHASJKFHAS JKHASFJKH FAASASD ASD AD"
                    approve={false}
                />

            </Box>
        </Center>

    )
}

export default Approval