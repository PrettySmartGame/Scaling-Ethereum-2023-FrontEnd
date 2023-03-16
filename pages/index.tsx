import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Avatar, Badge, Box, Button, Container, VStack, HStack, StackDivider, Stack, Text, IconButton } from '@chakra-ui/react'

import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { experiences } from '../data/data'

const Landing: NextPage = () => {

    return (
        <>
            <Box as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}
                bgGradient={[
                    'linear(to-tr, teal.300, yellow.400)',
                    'linear(to-t, blue.200, teal.500)',
                    'linear(to-b, orange.100, purple.300)',
                  ]}>
                <Container
                    w='100%'
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    borderTopRadius={'xl'}
                    >


                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                        width={{ base: 'full', md: 'md' , lg: 'lg', xl: 'xl'}}
                        >
                        <Box
                            bg="bg-surface"
                            px={{ base: '4', md: '6' }}
                            pt="5"
                            boxShadow="sm"
                            borderColor="accent"
                            >
                            <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} justify="space-between">
                                <HStack spacing="4">
                                <Avatar
                                    src="https://tinyurl.com/yhkm2ek8"
                                    name="Christoph Winston"
                                    boxSize={{ base: '12', sm: '14' }}
                                />
                                <Box>
                                    <HStack>
                                    <Text fontSize="lg" fontWeight="medium">
                                        Christoph Winston
                                    </Text>
                                    <Badge variant="subtle" colorScheme="cyan">
                                        Verified
                                    </Badge>
                                    </HStack>
                                    <Text color="muted" fontSize="sm">
                                    user@ETHGlobal.com
                                    </Text>
                                </Box>
                                </HStack>
                            </Stack>
                        </Box>
                        <Box bg="bg-surface"
                            px={{ base: '4', md: '6' }}
                            pb="5"
                            boxShadow="sm"
                            borderColor="accent"
                            >
                            <Stack direction="row" spacing="3">
                                <ConnectButton />
                            </Stack>
                        </Box>
                    </VStack>  


                </Container>

                {/* <Container maxW="3xl"></Container> */}
                <Container
                    w='100%'
                    borderBottomRadius={'xl'}
                    bgGradient='linear(to-r, #F6F0EA, #F1DFD1)'
                    >
                <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                    <Stack spacing="5" divider={<StackDivider />}>
                    <Stack justify="space-between" direction={{ base: 'column', sm: 'row' }} spacing="5">
                        <Stack spacing="1">
                        <Text fontSize="lg" fontWeight="medium">
                            Experiences
                        </Text>
                        <Text fontSize="sm" color="muted">
                            Write in a few short sentences where you have already worked.
                        </Text>
                        </Stack>
                        <Button variant="primary">Add</Button>
                    </Stack>
                    {experiences.map((experience, id) => (
                        <Stack key={id} justify="space-between" direction="row" spacing="4">
                        <Stack spacing="0.5" fontSize="sm">
                            <Text color="emphasized" fontWeight="medium">
                            {experience.title}
                            </Text>
                            <Text color="muted">{experience.description}</Text>
                        </Stack>

                        <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '0', sm: '1' }}>
                            <IconButton
                            icon={<FiEdit2 fontSize="1.25rem" />}
                            variant="ghost"
                            aria-label="Edit experience"
                            />
                            <IconButton
                            icon={<FiTrash2 fontSize="1.25rem" />}
                            variant="ghost"
                            aria-label="Delete experience"
                            />
                        </Stack>
                        </Stack>
                    ))}
                    </Stack>
                </Box>
                </Container>

            </Box>

        </>
    );
};

export default Landing;
