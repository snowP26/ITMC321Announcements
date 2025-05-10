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
                </Box>
            </Center>
        </Box>
    );
};

export default Approval;
