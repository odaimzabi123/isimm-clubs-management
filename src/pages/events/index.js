import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Grid,
    Button,
    ChakraProvider
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from '@chakra-ui/icons'
  import Navbar from '../../components/navbar'
  import EventItem from '../../components/event-item'
  import {theme} from '../../theme/chakra-theme'
  import CustomCard from '../../components/custom-card'
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  const image2="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/74624070_2611387025574369_2560075562416603136_o.png?_nc_cat=104&ccb=3&_nc_sid=09cbfe&_nc_ohc=YfMd226QcwIAX_tm7jS&_nc_ht=scontent-mrs2-1.xx&oh=c2e030251cec030074255045055d36c3&oe=605D02A9"
  export default function Home() {
    return (
      <ChakraProvider theme={theme}>
        <Navbar>
        <Box display="grid" placeItems="center">
          <Flex>
          <Heading as="h4" size="lg" color="white">
              Events
          </Heading>
    
          </Flex>
          <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:['repeat(2, 1fr)','repeat(5,1fr)']}} gap={3} mt="1.5rem" mb="2rem">
            {
              Array(7).fill("").map((_,i)=>(
                <CustomCard portrait={true} event={true}/>
              ))
            }
          </Grid>
      </Box>
      </Navbar>
      </ChakraProvider>
    );
  }
  