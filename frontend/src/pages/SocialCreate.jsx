import {
  Input,
  Box,
  Text,
  Center,
  Textarea,
  ButtonGroup,
  Button,
  useToast,
  Select
} from "@chakra-ui/react";
import { useState } from "react";
import { useAnnouncementStore } from "../../store/announcements";
import { Link, useNavigate } from "react-router-dom";
import { postToFacebookPage } from '../components/facebookApi'; 

const SocialCreate = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const [selected, setSelected] = useState("normal");
  const [ticket, setTicket] = useState({
    header: "",
    type: "Pending",
    urgent: false,
    recipient: "Social Media",
    description: "",
    isSocial: true,
  });

  const accessToken = import.meta.env.VITE_FB_PAGE_ACCESS_TOKEN; 
  const pageId = import.meta.env.VITE_FB_PAGE_ID;

  const { createAnnouncement } = useAnnouncementStore();
  const handleNewAnnouncement = async () => {

    if (
      ticket.header.trim() === "" ||
      ticket.description.trim() === "" ||
      ticket.recipient.trim() === ""
    ) {
      toast({
        title: "Missing Fields",
        description: "Please complete all fields before submitting.",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
      return;
    }

    try {
      const emphasizedTitle = `📢 ${ticket.header.toUpperCase()} 📢`;
      const message = `${emphasizedTitle}\n\n${ticket.description}`;
      await postToFacebookPage(message, accessToken, pageId);


      toast ({
        title: "Posted to Facebook",
        description: "Announcement successfully posted to your Facebook Page.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/");
    } catch (err) {
      console.log(err);
      toast({
        title: "Error posting to your Facebook Page.",
        description: "error",
        duration: 7000,
        isClosable: true,
      });
    }

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <Center minH="100vh" marginY={"2"}>
        <Box
          borderWidth="1px"
          borderRadius="10px"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="5"
          flexDirection="column"
          borderColor="gray.500"
        >
          <Text fontWeight="extrabold" fontSize="3xl" textAlign="center">
            Post New Social Media Announcement
          </Text>

          <Text fontSize="2xl" mb={5} textAlign="center">
            Share an update or important information with your audience.
          </Text>

          {/* Title Input */}
          <Text fontWeight="bold" fontSize="2xl" alignSelf="flex-start" my={2}>
            Announcement Title:
          </Text>

          <Input
            placeholder="Enter announcement title here..."
            onChange={(x) => setTicket({ ...ticket, header: x.target.value })}
          />
          <Text textColor="red.500" alignSelf="flex-start">
            Title is required!
          </Text>

          {/* Body Input */}
          <Text
            fontWeight="bold"
            fontSize="2xl"
            alignSelf="flex-start"
            mb={2}
            mt={3}
          >
            Announcement Body:
          </Text>

          <Textarea
            placeholder="Enter announcement body here..."
            h="40vh"
            resize="none"
            maxLength={1000}
            onChange={(x) =>
              setTicket({ ...ticket, description: x.target.value })
            }
          />
          <Text fontSize="sm" mt={1} color="gray.600" alignSelf="flex-end">
            Max 1000 characters
          </Text>

          {/* Submission Button */}
          <Box display="flex" flexDirection="row-reverse" gap={2} width="100%">
            <Button
              bgColor="#232EFF"
              color="white"
              w="full"
              h="40px"
              my="2"
              fontWeight="bold"
              onClick={handleNewAnnouncement}
            >
              Submit
            </Button>
            <Button
              w="full"
              h="40px"
              my="2"
              variant="outline"
              borderColor="black"
              borderWidth="thin"
              fontWeight="bold"
              as={Link}
              to="/"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default SocialCreate;
