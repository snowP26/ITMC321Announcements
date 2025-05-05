import { Input, Box, Text, Center, Textarea, Select, ButtonGroup, Button } from "@chakra-ui/react"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAnnouncementStore } from "../../store/announcements";
import { useToast } from '@chakra-ui/react'

function EmailCreate() {
    const navigate = useNavigate();
    const toast = useToast()

    const [selected, setSelected] = useState('normal');
    const [ticket, setTicket] = useState({
        header: "",
        type: "Pending",
        urgent: false,
        recipient: "",
        description: "",
    })
    
    const {createAnnouncement} = useAnnouncementStore()
    const handleNewAnnouncement = async () => {

        if (
            ticket.header.trim() === '' ||
            ticket.description.trim() === '' ||
            ticket.recipient.trim() === ''
        ) {
            toast({
                title: 'Missing Fields',
                description: 'Please complete all fields before submitting.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;  
        }
    
        const { success, message } = await createAnnouncement(ticket);
        toast({
            title: 'Announcement Posted',
            description: "You have successfully created an announcement",
            status: "success",
            duration: 7000,
            isClosable: true,
        });
    
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }

    return (
        <>
            <Center minH="100vh" marginY={'2'}>
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
                    <Text fontWeight='extrabold' fontSize='3xl' textAlign='center'>
                        Post New Announcement
                    </Text>

                    <Text fontSize='2xl' mb={10} textAlign='center'>
                        Share an update or important information with your audience.
                    </Text>

                    {/* Title Input */}
                    <Text fontWeight='bold' fontSize='2xl' alignSelf='flex-start' mb={2}>
                        Announcement Title:
                    </Text>

                    <Input placeholder='Enter announcement title here...' onChange={(x) => setTicket({ ...ticket, header: x.target.value })} />
                    <Text textColor='red.500' alignSelf='flex-start'>Title is required!</Text>

                    {/* Body Input */}
                    <Text fontWeight='bold' fontSize='2xl' alignSelf='flex-start' mb={2} mt={3}>
                        Announcement Body:
                    </Text>

                    <Textarea placeholder='Enter announcement body here...' h='35vh' resize='none' maxLength={1000}
                        onChange={(x) => setTicket({ ...ticket, description: x.target.value })} />
                    <Text fontSize='sm' mt={1} color='gray.600' alignSelf='flex-end'>
                        Max 1000 characters
                    </Text>

                    {/* Announcement Type Selection */}
                    <ButtonGroup isAttached variant='outline' borderRadius='full' mt='2'>
                        <Button
                            onClick={() => {
                                setSelected('normal');
                                setTicket({ ...ticket, urgent: false });
                            }
                            }
                            bg={selected === 'normal' ? 'gray.300' : 'white'}
                            borderColor='gray.700'
                            borderWidth='2px'
                            _hover={{ bg: selected === 'normal' ? 'gray.300' : 'gray.100' }}
                            onChange={(x) => setTicket({ ...ticket, urgent: x.target.value })}
                        >
                            Normal Announcement
                        </Button>
                        <Button
                            onClick={() => {
                                setSelected('urgent');
                                setTicket({ ...ticket, urgent: true });
                            }
                            }
                            bg={selected === 'urgent' ? 'red.200' : 'white'}
                            borderColor='gray.700'
                            borderWidth='2px'
                            _hover={{ bg: selected === 'urgent' ? 'gray.300' : 'gray.100' }}
                        >
                            Urgent Announcement
                        </Button>
                    </ButtonGroup>

                    {/* Department Input */}
                    <Text fontWeight='bold' fontSize='2xl' alignSelf='flex-start' mb={2} mt={3}>
                        Department:
                    </Text>
                    <Select placeholder='Choose who to announce to...' color='gray.500' borderColor='gray.500' onChange={(x) => setTicket({ ...ticket, recipient: x.target.value })}>
                        <option>Budget</option>
                        <option>Finance</option>
                        <option>Management</option>
                        <option>Executive</option>
                    </Select>

                    {/* Submission Button */}
                    <Box display="flex" flexDirection="row-reverse" gap={2} width="100%" mt={2}>
                        <Button bgColor='#232EFF' color='white' w='full' h='40px' my='2' fontWeight='bold' onClick={handleNewAnnouncement} as={Link} to="/EmailCreate">
                            Submit
                        </Button>
                        <Button w='full' h='40px' my='2' variant='outline' borderColor='black' borderWidth='thin' fontWeight='bold' as={Link} to="/">
                            Cancel
                        </Button>
                    </Box>


                </Box>
            </Center>

        </>
    )
}

export default EmailCreate