import React from "react";
import {
  Text,
  Container,
  Grid,
  GridItem,
  ButtonGroup,
  Button,
  Flex,
  Avatar,
  Spacer,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';

const Card = ({ name, date, body, approve, urgent, header, type }) => {

  const getDeptEmail = (department) => {
    const departmentEmails = {
      Budget: 'bjbalona@gbox.adnu.edu.ph',
      Finance: 'dfvargas@gbox.adnu.edu.ph',
      Management: 'jodacuba@gbox.adnu.edu.ph',
      Executive: 'mapawan@gbox.adnu.edu.ph',
    }
    return departmentEmails[department] || '';
  }

  const cardWidth = useBreakpointValue({
    base: "90vw",
    md: "60vw",
    lg: "40vw",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()

  const approveTicket = async () => {
    try {
      const recipientEmail = getDeptEmail(name);
      await emailjs.send(
        'service_tntzwzi',
        'template_uu1bo4z',
        {
          header: header,
          description: body,
          recipient: name,
          urgent: urgent ? "Urgent" : "Normal",
          email: recipientEmail
        },
        'of2c11tg74qRsTu9R'
      );
      console.log(recipientEmail)
      toast({
        title: 'Email sent!',
        description: "Announcement sent to the receiver!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email failed:", error);
    }
  }

  return (
    <Container
      borderWidth="1px"
      borderRadius="10px"
      borderColor="black"
      width={cardWidth}
      padding={4}
      marginTop={2}
    >
      <Grid
        templateAreas={`"header" "main" "footer"`}
        gridTemplateRows={"auto 1fr auto"}
        gap="2"
        fontWeight="semibold"
      >
        {/* Header */}
        <GridItem area={"header"}>
          <Flex flexDirection={"row"} alignItems="center">
            <Avatar size={"md"} mr={3} />
            <Flex flexDirection={"column"}>
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold">
                {name}
              </Text>

            </Flex>
            <Spacer />
            <Flex>
              <Flex
                as={Text}
                borderWidth={approve ? "1px" : "0.5px"}
                borderRadius="30px"
                borderStyle="dotted"
                borderColor={approve ? "white" : "red"}
                width="80px"
                height="25px"
                fontSize="2xs"
                alignItems="center"
                justifyContent="center"
                bg={approve ? "green" : "white"}
                color={approve ? "white" : "red"}
              >
                {approve ? "Approved" : "Pending"}
              </Flex>
              {urgent && (
                <Flex
                  as={Text}
                  borderRadius="30px"
                  border="2px solid red"
                  bg="red.500"
                  color="white"
                  fontSize="2xs"
                  fontWeight="bold"
                  alignItems="center"
                  justifyContent="center"
                  px={3}
                  height="25px"
                  animation="pulse 2s infinite"
                  boxShadow="0 0 8px rgba(255, 0, 0, 0.7)"
                  ml={2}
                >
                  URGENT
                </Flex>
              )}
            </Flex>
          </Flex>
        </GridItem>

        {/* Main */}
        <GridItem area={"main"}>
          <Flex flexDirection="column">
            <Text fontWeight="extrabold" fontSize={{ base: "md", md: "lg" }}>
              {header}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} maxWidth={"60%"} noOfLines={1}>
              {body}
            </Text>
            <Text
              fontSize="xs"
              color="blue.500"
              cursor="pointer"
              mt={1}
              onClick={onOpen}
            >
              Read More
            </Text>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>{body}</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </GridItem>

        {/* Footer */}
        <GridItem area={"footer"}>
          <Flex justifyContent="flex-end">
            <ButtonGroup size="sm" spacing={1} flexWrap="wrap">
              <Text
                fontSize="xs"
                color="blackAlpha.600"
                mr={2}
                alignSelf="center"
              >
                Additional info: {date}
              </Text> 
              
              <Button fontSize="xs" bg="green" color="white" onClick={approveTicket}>
                Send Email
              </Button>
            </ButtonGroup>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Card;
