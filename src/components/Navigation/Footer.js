// import React from "react";
// import {
//   faYoutube,
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import AppStoreBadge from "../Applinks/AppStoreBadge";
// import PlayStoreBadge from "../Applinks/PlayStoreBadge";
// import {
//   Box,
//   Container,
//   Stack,
//   SimpleGrid,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Button } from "@chakra-ui/react";

// const Footer = () => {
//   return (
    
//       <Box
//         bg={useColorModeValue("gray.50", "gray.900")}
//         color={useColorModeValue("gray.700", "gray.200")}
//       >
//         <Container as={Stack} maxW={"7xl"} py={8}>
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={12}>
//             <Stack alignItems={"center"}>
//               <Text style={{ fontWeight: "bold" }}>About </Text>
//               <p>
//                 Welcome to CO— Designed for business owners, CO— is a site that
//                 connects like minds and delivers actionable insights for
//                 next-level growth.
//               </p>
//             </Stack>

//             <Stack alignItems={"center"}>
//               <Text style={{ fontWeight: "bold" }}>Social Follow</Text>
//               <a href="/" className="youtube social">
//                 <FontAwesomeIcon icon={faYoutube} size="2x" color="#eb3223" />
//               </a>
//               <a href="/" className="facebook social">
//                 <FontAwesomeIcon icon={faFacebook} size="2x" color="#4968ad" />
//               </a>
//               <a href="/" className="twitter social">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" color="#49a1eb" />
//               </a>
//               <a href="/" className="instagram social">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" />
//               </a>
//             </Stack>
//             <Stack alignItems={"center"}>
//               <Text style={{ fontWeight: "bold" }}>Contact Us</Text>
//               <p>Mob.: +91 7057445737 </p>
//               <p> sushantgodase1048@gmailcom</p>
//               <Button colorScheme="blue">
//                 {/* <Link  to="/support"  gap={5}>
//                   Support
//                 </Link> */}
//               </Button>
//               ;
//             </Stack>

//             <Stack alignItems={"center"} gap={3}>
//               <Text style={{ fontWeight: "bold" }}>Install App</Text>
//               <AppStoreBadge />
//               <PlayStoreBadge />
//             </Stack>
//           </SimpleGrid>
//         </Container>

//         <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray"}>
//           <Container
//             as={Stack}
//             maxW={"4xl"}
//             py={2}
//             spacing={4}
//             justify={{ md: "space-between" }}
//             align={{ md: "center" }}
//           >
//             <Text style={{ fontWeight: "bold" }}>
//               © 2023 Yacht Booking Portal. All rights reserved
//             </Text>
//           </Container>
//         </Box>
//       </Box>
   
//   );
// };

// export default Footer;
