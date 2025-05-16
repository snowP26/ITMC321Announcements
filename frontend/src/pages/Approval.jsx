import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../components/card";
import { useAnnouncementStore } from "../../store/announcements";
import { fetchNotes, fetchApprovedNotes } from "../../store/notesAPI";
import { getTicketStatus } from "../../../backend/controllers/ticket.controller";

const Approval = () => {
  const { fetchAnnouncements, announcements } = useAnnouncementStore();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

  useEffect(() => {
    const loadNotes = async () => {

      try {
        const data = await fetchNotes();
        const notesWithStatus = await Promise.all(
          data.map(async (note) => {
            try {
              const statusRes = await getTicketStatus(note._id);
              console.log(statusRes);
              const ticketData = statusRes.data.ticket[0] || {};
              const ticketStatus = ticketData.status || "Unavailable";
              const remarks = ticketData.remarks || ""; 
              return { ...note, ticketStatus, remarks };
            } catch (err) {
              return { ...note, ticketStatus: "Unavailable", remarks: "" };
            }
          })
        );
        const filtered = notesWithStatus.filter(
          (note) =>
            note.ticketStatus === "Approved"
        );

        setNotes(filtered);

      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    loadNotes();
  }, []);

  return (
    <Box h="100vh" overflowY="auto">
      <Center my={2}>
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
          w="100%"
          maxW="800px"
        >
          <Text fontSize="3xl" fontWeight="bold" w="full" mb={1}>
            Pending Announcements
          </Text>
          <Text w="full" mb={4}>
            Review and approve announcements submitted.
          </Text>

          <SimpleGrid spacing={2} w="full">
            {announcements && announcements.length > 0 ? (
              announcements
                .slice()
                .reverse()
                .map((item) => (
                  <Card
                    key={item._id || item.id}
                    name={item.recipient}
                    date={`${new Date(item.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )} • ${new Date(item.createdAt).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}`}
                    body={item.description}
                    header={item.header}
                    urgent={item.urgent}
                  />
                ))
            ) : (
              <Text>No announcements found.</Text>
            )}
          </SimpleGrid>

          <Text fontSize="2xl" fontWeight="bold" w="full" mb={2}>
            Notes
          </Text>
          <SimpleGrid spacing={2} w="full">
            {notes && notes.length > 0 ? (
              notes
                .slice()
                .reverse()
                .map((note) => (
                  <Card
                    name="test"
                    urgent="false"
                    date={`${new Date(note.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )} • ${new Date(note.createdAt).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    )}`}
                    body={note.content}
                    header={note.title || "Note"}
                  />
                ))
            ) : (
              <Text>No notes found.</Text>
            )}
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
  );
};

export default Approval;
