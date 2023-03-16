import React from 'react'
import { useState } from "react";
// import "./Generalliability&Artisan.css";
import { Container, Grid, GridItem, Sidebar, Stack } from "@chakra-ui/react";
import {
  Box,
  Center,
  IconButton,
  InputLeftElement,
  Divider,
  InputGroup,
  Input,
  HStack,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  Button,
  AccordionPanel,
  Select,
  AccordionIcon,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

import Header from "../../Header/Header";
import { Checkbox } from "antd";
// import { Header } from 'antd/es/layout/layout';

const Generalliability = () => {
  return (
    <div>
         
      <Container
        maxW="container"
        marginLeft="15%"
        p="10"
        width=""
        rounded="lg"
        boxShadow="md"
        columns={{ sm: 2, md: 4 }}
        backgroundColor="red.100"
        // spacing='8'
        // textAlign='center'
        // backgroundColor='#F6F6F6'
      >
        <Flex
          h=""
          width="auto"
          rounded="md"
          boxShadow="md"
          backgroundColor="#F6F6F6"
        >
          <Box flex="1">
            <Center>
             
            </Center>
            <br />
            <HStack>
              <Box flex="1" padding="2%">
                <Accordion allowTogGeneralliabilitye>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          MGA View Only Data
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <Flex>
                        <Box flex="1" bg="">
                          <Heading size="32" textColor="gray">
                            Policy Locked <Checkbox> </Checkbox>
                          </Heading>

                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Policy No.</FormLabel>
                            <Input placeholder="QuoteEM911799" />
                          </FormControl>

                          <HStack mt="2%">
                            <FormControl isRequired>
                              <FormLabel textColor="gray">First Name</FormLabel>
                              <Input
                                placeholder="First name"
                                variant="outline"
                              />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel textColor="gray">
                                Middle Name
                              </FormLabel>
                              <Input placeholder="Middle name" />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel textColor="gray">Last Name</FormLabel>
                              <Input placeholder="Last name" />
                            </FormControl>
                          </HStack>

                          <HStack mt="2%">
                            <FormControl isRequired>
                              <FormLabel textColor="gray">
                                Busniess Name
                              </FormLabel>
                              <Input placeholder="Enter Busniess Name" />
                            </FormControl>

                            <FormControl isRequired>
                              <FormLabel textColor="gray">DBA Name</FormLabel>
                              <Input placeholder="Enter DBA Name" />
                            </FormControl>
                          </HStack>

                          <Text fontWeight="bold" mt="2%">
                            Line: Generalliability Rate
                          </Text>
                        </Box>

                        <Box flex="1" bg="" ml="2%">
                          <Heading size="32" textColor="gray">
                            Status Quoto: 1/23/2023
                          </Heading>

                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Term:</FormLabel>
                            <Input placeholder="1 Year" />
                          </FormControl>
                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Effective:</FormLabel>
                            <Input placeholder="1/23/2023" />
                          </FormControl>
                          <FormControl isRequired mt="2%">
                            <FormLabel textColor="gray">Experation:</FormLabel>
                            <Input placeholder="1/23/24" />
                          </FormControl>

                          <Text fontWeight="bold" mt="2%">
                            STATE: ALABAMA
                          </Text>
                        </Box>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                         GL Coverage
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Box    display={'flex'}   flexDir={'column'}     alignItems={'center'}  >
                       
                    
                     <HStack w={'100%'} h={'20vh'} >
                      <HStack w={'50%'} >
                        <Text w={'70%'}>Each Occurance/General Aggregate</Text>
                        <Select placeholder='$100,000/$200,000' w={'30%'}/>
                      </HStack>
                      <HStack w={'50%'} >
                        <Text w={'70%'}>Damage to Rented Premises</Text>
                        <Select placeholder='$100,000' w={'30%'}/>
                      </HStack>
                     </HStack>
                    
                     <HStack w={'100%'} h={'20vh'} >
                     <Text >eyz</Text>
                        <Select placeholder='$100,000' w={'30%'}/>
                     
                     </HStack>

                       

                  
                       
                        </Box>
                
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Optional Coverage
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Box    display={'flex'}   flexDir={'column'}     alignItems={'center'}  >
                       
                    
                     
                     <HStack w={'100%'}  >
                     <Text >Would you like to quote inland Marine coverage for this for this client?</Text>
                        <Select placeholder='No' w={'30%'}/>
                     
                     </HStack>
                    
                     <HStack w={'100%'}  >
                     <Text >Terrorism Coverage</Text>
                        <Select placeholder='NO' w={'30%'}/>
                     
                     </HStack>

                       

                  
                       
                        </Box>
                
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Location
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Box    display={'flex'}   flexDir={'column'}     alignItems={'center'}  >
                        <HStack w={'100%'} mb={2} >
                        <HStack w={'50%'}>
                           <Text fontSize={'xl'} color={'blue'} >Location 1</Text>
                           <Button colorScheme='blue' size='sm'>Add Location +</Button>
                           </HStack>                
                        <HStack w={'50%'} justifyContent={'flex-end'}>
                           
                           <Button colorScheme='blue' size='sm'>Delete Location</Button>
                           </HStack>                
                         </HStack>
                    
                     
                     <HStack w={'100%'}  mb={2} >
                     <Text >Zip Code</Text>
                        <Input  w={'30%'}/>
                     
                     </HStack>
                    
                     <HStack w={'100%'}  >
                     <Text >Country </Text>
                        <Select placeholder='-select-' w={'30%'}/>
                     
                     </HStack>

                       

                  
                       
                        </Box>
                
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Selected class code
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Box    display={'flex'}   flexDir={'column'}     alignItems={'center'}  >
                        <HStack w={'100%'} mb={2} >
                        <HStack w={'50%'}>
                           <Text fontSize={'xl'} color={'blue'} >L1-</Text>
                           <Button colorScheme='blue' size='sm'>Add Class Code +</Button>
                           </HStack>                                
                         </HStack>
                    
                     
                     <HStack w={'100%'} >
                    <HStack w={'40%'}>
                    <Select placeholder='Location 1' />
                    </HStack>
                       
                     
                     
                    
                     <HStack w={'60%'}  >
                   
                 <Select placeholder='-select-' />
                     
                     </HStack>

                     </HStack>

                  
                       
                        </Box>
                
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem mt="2%">
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "#2347F0", color: "white" }}
                      >
                        <Box
                          as="span"
                          flex="1"
                          textAlign="center"
                          fontWeight="bold"
                        >
                          Additional Insured
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Box    display={'flex'}   flexDir={'column'}     alignItems={'center'}  >
                        <HStack w={'100%'} mb={2} >
                        <HStack w={'50%'}>
                           <Text fontSize={'xl'} color={'blue'} >   Additional Insured</Text>
                           <Button colorScheme='blue' size='sm'>Add Additional Insured +</Button>
                           </HStack>                
                        <HStack w={'50%'} justifyContent={'flex-end'}>
                           
                           <Button colorScheme='blue' size='sm'>Delete </Button>
                           </HStack>                
                         </HStack>
                    
                     
                     <HStack w={'100%'}  mb={2} >
                     <Text w={'30%'}>Type</Text>
                        <Select placeholder='--Not Selected--'  w={'50%'}/>
                     
                     </HStack>
                    
                     <HStack w={'100%'}  >
                     <Text w={'30%'}>Waiver </Text>
                        <Select placeholder='no' w={'50%'}/>
                     
                     </HStack>
                     <HStack w={'100%'}  >
                     <Text w={'30%'}>Primary & NC </Text>
                        <Select placeholder='no' w={'50%'}/>
                     
                     </HStack>

                       

                  
                       
                        </Box>
                
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem mt='2%'>
                                        <h2>
                                            <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
                                                <Box as="span" flex='1' textAlign='center' fontWeight="bold">
                                                    Agency Information
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Flex >
                                                <Box flex="1" bg="">
                                                    <VStack >
                                                        <FormControl mt="2%">
                                                            <FormLabel textColor="gray">Agency and user</FormLabel>
                                                            <Select placeholder="Select" w={'60%'} >
                                                                <option>Yes</option>
                                                                <option>No</option>
                                                            </Select>
                                                        </FormControl>
                                                       
                                                        <HStack alignSelf={'flex-start'}>
                                                            <Text>Marketing Zone:</Text>
                                                        </HStack>
                                                    </VStack>
                                                </Box>

                                              
                                            </Flex>
                                        </AccordionPanel>
                                    </AccordionItem>
                
                 
                 
                  
                
                </Accordion>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default Generalliability