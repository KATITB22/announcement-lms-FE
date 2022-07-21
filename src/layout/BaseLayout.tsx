import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    chakra,
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    Heading,
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

const Links = [
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

const Socials = [
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

const BaseLayout: React.FC<BaseProps> = (props) => {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchValue, setSearchValue] = React.useState('');
    const navigate = useNavigate();
    return (
        <>
            <Box bg="base.header-bg" px={4} color="base.header-text">
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                    minWidth="max-content"
                >
                    <Flex alignItems="center" gap="2">
                        <Avatar size="md" src={Logo} />
                        <Heading
                            margin="auto"
                            paddingTop="3px"
                            display={{ base: 'none', md: 'block' }}
                            fontSize="2xl"
                            fontFamily="heading"
                        >
                            OSKM 2022
                        </Heading>
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
                            _placeholder={{ color: 'base.header-text' }}
                            onChange={(event) =>
                                setSearchValue(event.target.value)
                            }
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                bg="base.header-text"
                                h="1.75rem"
                                color="base.header-selected-text"
                                size="sm"
                                onClick={() => {
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
                        {Links.map((link) => (
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
                        bg="base.header-bg"
                        pb={4}
                        display={{ md: 'none' }}
                        zIndex="100"
                    >
                        <Stack as="nav" spacing={4}>
                            {Links.map((link) => (
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
            <Box bg="base.footer-bg" color="base.footer-text">
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
                        <Heading
                            margin="auto"
                            paddingTop="3px"
                            fontSize="2xl"
                            fontFamily="heading"
                        >
                            OSKM 2022
                        </Heading>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems={{ base: 'center', md: 'flex-start' }}
                    >
                        <Text fontSize="md">Find us on</Text>
                        <Stack direction="row" spacing={4}>
                            {Socials.map((social) => (
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
        </>
    );
};

export default BaseLayout;
