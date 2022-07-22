import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    chakra,
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillHome, AiFillTag } from 'react-icons/ai';
import {
    FaUser,
    FaInfo,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaFacebook,
} from 'react-icons/fa';
import Navbar from '@components/Navbar';
import Logo from '@styles/images/logo-sementara.jpeg';
import { useNavigate } from 'react-router-dom';
import { BaseProps } from '../types/interface';
import Animate from './Animate';

const links = [
    {
        name: 'Home',
        to: '/',
        icon: <AiFillHome />,
    },
    {
        name: 'Partner',
        to: '/partner',
        icon: <FaUser />,
    },
    {
        name: 'E-Catalogue',
        to: '/ecatalogue',
        icon: <AiFillTag />,
    },
    {
        name: 'About',
        to: '/about',
        icon: <FaInfo />,
    },
];

const socials = [
    {
        to: 'https://twitter.com',
        icon: <FaTwitter />,
    },
    {
        to: 'https://instagram.com',
        icon: <FaInstagram />,
    },
    {
        to: 'https://youtube.com',
        icon: <FaYoutube />,
    },
    {
        to: 'https://facebook.com',
        icon: <FaFacebook />,
    },
];

const title = '\uE028\uE094\uE021\uE086 2022';

const BaseLayout: React.FC<BaseProps> = (props) => {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchValue, setSearchValue] = React.useState('');
    const navigate = useNavigate();
    return (
        <Animate>
            <Box className="bg-Yellow px-4 text-DarkerOrange">
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                    minWidth="max-content"
                >
                    <Flex alignItems="center" gap="2">
                        <Avatar size="md" src={Logo} />
                        <h1 className="font-Heading m-auto pt-3px hidden md:block text-2xl">
                            {title}
                        </h1>
                    </Flex>
                    <InputGroup
                        minWidth="150px"
                        maxWidth={{ base: '3xs', md: 'xs', lg: 'sm' }}
                    >
                        <InputLeftElement pointerEvents="none" color="white">
                            {' '}
                            <SearchIcon />{' '}
                        </InputLeftElement>
                        <Input
                            bg="#FFCD90"
                            pr="4.5rem"
                            placeholder="Search"
                            _placeholder={{ color: '#D27C2F' }}
                            onChange={(event) =>
                                setSearchValue(event.target.value)
                            }
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                bg="#D27C2F"
                                h="1.75rem"
                                color="#511D05"
                                size="sm"
                                onClick={() => {
                                    if (!searchValue) return;
                                    console.log(`Searching for ${searchValue}`);
                                    // TODO: integrate with search page
                                    navigate(`/search?q=${searchValue}`);
                                }}
                            >
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <HStack
                        minWidth="max-content"
                        as="nav"
                        spacing={3}
                        display={{ base: 'none', md: 'flex' }}
                        fontSize={{ lg: 'xl', md: 'md' }}
                    >
                        {links.map((link) => (
                            <Navbar key={link.to} to={link.to}>
                                {link.name}
                            </Navbar>
                        ))}
                    </HStack>
                    <IconButton
                        size="md"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>
                {isOpen ? (
                    <Box
                        bg="base.headerBg"
                        pb={4}
                        display={{ md: 'none' }}
                        zIndex="100"
                    >
                        <Stack as="nav" spacing={4}>
                            {links.map((link) => (
                                <Navbar key={link.to} to={link.to}>
                                    <Flex alignItems="center" gap="2">
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Flex>
                                </Navbar>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box>{children}</Box>
            <Box className="bg-Orange text-DarkestOrange">
                <Container
                    as={Stack}
                    maxW="6xl"
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Flex
                        alignItems="center"
                        gap="2"
                        flexDirection={{ base: 'column', md: 'row' }}
                    >
                        <Avatar size="md" src={Logo} />
                        <h1 className="font-Heading m-auto pt-3px text-2xl">
                            {title}
                        </h1>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems={{ base: 'center', md: 'flex-start' }}
                    >
                        <Text fontSize="md">Find us on</Text>
                        <Stack direction="row" spacing={4}>
                            {socials.map((social) => (
                                // <Navbar key={social.to} to={social.to}>
                                //     {social.icon}
                                // </Navbar>
                                <chakra.button
                                    rounded="full"
                                    w={8}
                                    h={8}
                                    cursor="pointer"
                                    as="a"
                                    href={social.to}
                                    display="inline-flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    transition="background 0.3s ease"
                                >
                                    {social.icon}
                                </chakra.button>
                            ))}
                        </Stack>
                    </Flex>
                </Container>
            </Box>
        </Animate>
    );
};

export default BaseLayout;
