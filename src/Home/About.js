
import React from 'react'
import User from './User';
import {
  Flex,Text,
} from "@chakra-ui/react";

const About = () => {

  return (
    <>
    <Flex
    justifyContent="center"
    alignItems="center"
    padding={10}
    flexDirection="column"
  >
    <Text fontWeight="bold ">About Us</Text>
    <Text padding={5}  fontWeight="bold ">This is Sushant World web Series</Text>
   
    </Flex>
    <Flex  justifyContent="center"
    alignItems="center">
       <User/>
    </Flex>
    </>
  )
};

export default About;