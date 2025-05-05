import { Box, Text, Center, ButtonGroup, Button, Flex, Avatar } from "@chakra-ui/react"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Approval = () => {
    const[Approve, setApprove] = useState(false)


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
                
                <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"left"}>Pending Announcements</Text>
                <Text fontSize={"xs"} textAlign={"left"}>Review and approve announcements submitted.</Text>

                <Flex
                    flexDirection={'column'}
                    borderWidth='1px'
                    borderRadius='10px'
                    borderColor='black'
                    maxH={"30vh"}
                    width={"50vh"}
                    paddingX={3}
                    paddingY={1.5}
                    marginTop={2}
                >
                    
                    <Flex flexDirection={'row'}>
                    <Avatar size={"sm"}/>
                        <Text fontSize={'2xs'}>Name</Text>
                        <Flex 
                            as={Text} 
                            borderWidth= {Approve ? "thin" : "0.2175vh"}
                            borderRadius={"30px"} 
                            borderStyle={"dotted"} 
                            borderColor= {Approve ? "white" : "red"}
                            width={"80px"} 
                            height={"25px"}
                            fontSize={"2xs"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            backgroundColor = {Approve ? "green" : "white"}
                            color= {Approve ? "white" : "red"}
                            alignSelf={"flex-end"}
                        >
                        For Revision
                        </Flex>
                    </Flex>
                    <Text fontSize={'2xs'}>Date</Text>
                    <Text fontSize={'2xs'}>Header</Text>
                    <Text fontSize={'2xs'}>Read More</Text>
                    <Text fontSize={'2xs'}>Body</Text>
                    <ButtonGroup spacing={0.5} justifyContent={"flex-end"}>
                    <Text fontSize={'2xs'} justifyContent={"flex-start"}>Info</Text>
                        <Button fontSize={'2xs'} backgroundColor={"green"} height={"2.8vh"} color={"white"}>
                            Approve
                        </Button>
                        <Button fontSize={'2xs'} backgroundColor={"white"} height={"2.8vh"} color={"red"} borderWidth={1} borderColor={"red"}>
                            Reject
                        </Button>
                        <Button fontSize={'2xs'} backgroundColor={"gray-400"} height={"2.8vh"} borderWidth={1} borderColor={"gray"}>
                            Revise
                        </Button>
                        
                    </ButtonGroup>
                </Flex>
            </Box>
        </Center>

    )
}

export default Approval