import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../components/card";
import { useAnnouncementStore } from "../../store/announcements";

const Approval = () => {
  const [Approve, setApprove] = useState(false);
  const { fetchAnnouncements, announcements } = useAnnouncementStore();

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);
  console.log("Announcements:", announcements);

  return (
    <Center maxH={"100vh"} my={"2"}>
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
        <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"left"}>
          Pending Announcements
        </Text>
        <Text textAlign={"left"}>
          Review and approve announcements submitted.
        </Text>
        <SimpleGrid spacing={2} w={"full"}></SimpleGrid>
        <Card />

        {announcements && announcements.length > 0 ? (
          announcements.map((item) => (
            <Card
              key={item.id}
              name={item.recipient}
              date={new Date(item.createdAt).toLocaleDateString()}
              body={item.description}
              header={item.header}
              urgent={item.urgent}
            />
          ))
        ) : (
          <Text>No announcements found.</Text>
        )}
      </Box>
    </Center>
  );
};

export default Approval;
