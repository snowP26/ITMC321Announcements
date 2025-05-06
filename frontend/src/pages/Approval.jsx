
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import Card from "../components/card"
import { useAnnouncementStore } from "../../store/announcements"


const Approval = () => {
    const [Approve, setApprove] = useState(false)
    const { fetchAnnouncements, announcements } = useAnnouncementStore();


    useEffect(() => {
        fetchAnnouncements();
    }, [fetchAnnouncements])
    console.log("Announcements:", announcements)


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
                <SimpleGrid
                    spacing={2}
                    w={"full"}
                >

                </SimpleGrid>
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