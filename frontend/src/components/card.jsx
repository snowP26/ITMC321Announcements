import React from 'react';
import { Text, Container, Grid, GridItem, ButtonGroup, Button, Flex, Avatar, Spacer } from "@chakra-ui/react";

const Card = ({ name, date, body, approve }) => {
    

    return (
        <Container
            borderWidth='1px'
            borderRadius='10px'
            borderColor='black'
            maxH={"30vh"}
            width={"50vh"}
            padding={4}
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
                {/* Header */}
                <GridItem px='2.5' area={'header'} alignContent={"center"}>
                    <Flex flexDirection={'row'}>
                        <Flex flexDirection={'column'} marginRight={2}>
                            <Avatar size={"md"} />
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <Text fontSize={'sm'} fontWeight={"bold"}>{name}</Text>
                            <Text fontSize={'xs'}>{date}</Text>
                        </Flex>
                        <Spacer />
                        <Flex flexDirection={"column"}>
                            <Flex
                                as={Text}
                                borderWidth={approve ? "thin" : "0.2175vh"}
                                borderRadius={"30px"}
                                borderStyle={"dotted"}
                                borderColor={approve ? "white" : "red"}
                                width={"80px"}
                                height={"25px"}
                                fontSize={"2xs"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                backgroundColor={approve ? "green" : "white"}
                                color={approve ? "white" : "red"}
                            >
                                {approve ? "Approved" : "Pending"}
                            </Flex>
                        </Flex>
                    </Flex>
                </GridItem>

                {/* Main */}
                <GridItem px='2.5' area={'main'}>
                    <Flex flexDirection={"column"}>
                        <Text fontWeight={"extrabold"} fontSize={'lg'}>Header</Text>
                        <Flex flexDirection={"column"}>
                            <Text fontSize={'sm'} maxWidth="80%" isTruncated>{body}</Text>
                            <Text fontSize={'xs'} color={"blue"}>Read More</Text>
                        </Flex>
                    </Flex>
                </GridItem>

                {/* Footer */}
                <GridItem px='2.5' area={'footer'}>
                    <Flex flexDirection={"column-reverse"}>
                        <ButtonGroup>
                            <Text fontSize={'xs'} alignContent={"center"} color='blackAlpha.600'>Info</Text>
                            <Spacer />
                            <Button fontSize={'2xs'} bg={"gray.400"} height={"2.8vh"} borderWidth={1} borderColor={"gray"}>
                                Revise
                            </Button>
                            <Button fontSize={'2xs'} bg={"white"} height={"2.8vh"} color={"red"} borderWidth={1} borderColor={"red"}>
                                Reject
                            </Button>
                            <Button fontSize={'2xs'} bg={"green"} height={"2.8vh"} color={"white"}>
                                Approve
                            </Button>
                        </ButtonGroup>
                    </Flex>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Card;
