
import { Box, Text } from "@chakra-ui/react"
import { useState } from 'react'
import Card from "../components/card"


const Approval = () => {
    const [Approve, setApprove] = useState(false)



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
                    name="Nian Obias"
                    date="January 1, 2025"
                    body="WHATASJKLFHASJKFHAS JKHASFJKH FAASASD ASD AD"
                    approve={false}
                />

            </Box>
        </Center>

    )
}

export default Approval