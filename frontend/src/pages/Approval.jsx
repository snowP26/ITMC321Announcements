import { Box, Text, Center, Container, Grid, GridItem, ButtonGroup, Button, Flex, Avatar, Spacer } from "@chakra-ui/react"
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

                <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"left"}>Pending Announcements</Text>
                <Text fontSize={"xs"} textAlign={"left"}>Review and approve announcements submitted.</Text>

                <Container
                    borderWidth='1px'
                    borderRadius='10px'
                    borderColor='black'
                    maxH={"30vh"}
                    width={"50vh"}
                    paddingX={2}
                    paddingY={1.5}
                    marginTop={2}
                >
                    <Grid
                        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
                        gridTemplateRows={'50px 1fr 30px'}
                        maxH={"30vh"}
                        gap='1'
                        fontWeight='semi-bold'
                    >
                        <GridItem px='2.5' area={'header'} alignContent={"center"}>
                            <Flex flexDirection={'row'}>
                                <Flex flexDirection={'column'} marginRight={2}>
                                    <Avatar size={"sm"} />
                                </Flex>
                                <Flex flexDirection={'column'}>
                                    <Text fontSize={'xs'} fontWeight={"bold"}>James Verceluz</Text>
                                    <Text fontSize={'2xs'}>January 1, XXXX</Text>
                                </Flex>
                                <Spacer />
                                <Flex flexDirection={"column"}>
                                    <Flex
                                        as={Text}
                                        borderWidth={Approve ? "thin" : "0.2175vh"}
                                        borderRadius={"30px"}
                                        borderStyle={"dotted"}
                                        borderColor={Approve ? "white" : "red"}
                                        width={"80px"}
                                        height={"25px"}
                                        fontSize={"2xs"}
                                        alignItems={"center"} //items inside y axis
                                        justifyContent={"center"} //items inside x axis
                                        backgroundColor={Approve ? "green" : "white"}
                                        color={Approve ? "white" : "red"}
                                    >
                                        For Revision
                                    </Flex>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem px='2.5' area={'main'}>
                            <Flex flexDirection={"column"}>
                                <Text fontSize={'2xs'} fontWeight={"extrabold"}>Header</Text>
                                <Flex flexDirection={"row"}>
                                    <Text fontSize={'2xs'}>Body...</Text>
                                    <Text fontSize={'2xs'}>Read More</Text>
                                </Flex>
                            </Flex>
                        </GridItem>
                        <GridItem px='2.5' area={'footer'}>
                            <Flex flexDirection={"column-reverse"}>
                                <ButtonGroup >
                                    <Text fontSize={'2xs'} alignContent={"center"} color='blackAlpha.600'>Info</Text>
                                    <Spacer />
                                    <Button fontSize={'2xs'} backgroundColor={"gray-400"} height={"2.8vh"} borderWidth={1} borderColor={"gray"}>
                                        Revise
                                    </Button>
                                    <Button fontSize={'2xs'} backgroundColor={"white"} height={"2.8vh"} color={"red"} borderWidth={1} borderColor={"red"}>
                                        Reject
                                    </Button>
                                    <Button fontSize={'2xs'} backgroundColor={"green"} height={"2.8vh"} color={"white"}>
                                        Approve
                                    </Button>
                                </ButtonGroup>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>


            </Box>
        </Center>

    )
}

export default Approval