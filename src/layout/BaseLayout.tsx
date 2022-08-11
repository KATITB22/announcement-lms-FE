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
    InputRightElement,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillHome, AiFillTag } from 'react-icons/ai';
import { FaInfo, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Navbar from '@components/Navbar';
// import Logo from '@/assets/images/oskm-logo.svg';
import Logo from '@/assets/images/logo-sementara.png';
import { Link, useNavigate } from 'react-router-dom';
import { LAYOUT_TITLE } from '@/types/constant';
import { BaseProps } from '../types/interface';
import { Animate } from './Animate';

const links = [
    {
        name: 'Home',
        to: '/',
        icon: <AiFillHome />,
    },
    {
        name: 'Partner',
        to: '/partner',
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
        to: 'https://twitter.com/oskmitb',
        icon: <FaTwitter />,
    },
    {
        to: 'https://www.instagram.com/oskm.itb/',
        icon: <FaInstagram />,
    },
    {
        to: 'https://www.youtube.com/channel/UCmkkBEqwMZ1SEZN937pdpgA',
        icon: <FaYoutube />,
    },
];

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
                    maxW="6xl"
                    className="mx-auto"
                >
                    <Link to="/">
                        <Flex alignItems="center" gap="2">
                            <Avatar
                                size="md"
                                src={Logo}
                                // bg="transparent"
                                className="transition-all hover:scale-105"
                            />
                            <h1 className="font-Heading m-auto pt-3px hidden md:block text-2xl transition-all hover:scale-105">
                                {LAYOUT_TITLE}
                            </h1>
                        </Flex>
                    </Link>
                    <InputGroup
                        minWidth="150px"
                        maxWidth={{ base: '3xs', md: 'xs', lg: 'sm' }}
                    >
                        <Input
                            bg="#FFCD90"
                            pr="3rem"
                            focusBorderColor="#D27C2F"
                            borderColor="#D27C2F"
                            placeholder="Search post"
                            _placeholder={{ color: '#D27C2F' }}
                            color="#511D05"
                            onChange={(event: any) =>
                                setSearchValue(event.target.value)
                            }
                            onKeyUp={(event: React.KeyboardEvent) => {
                                if (!searchValue) return;
                                if (event.key !== 'Enter') return;
                                navigate(`/search?q=${searchValue}`);
                            }}
                            outline="none"
                            className="text-DarkerOrange"
                            _hover={{ border: '1px solid #D27C2F' }}
                        />
                        <InputRightElement width="3rem">
                            <Button
                                bg="none"
                                h="1.75rem"
                                color="#511D05"
                                size="sm"
                                onClick={() => {
                                    if (!searchValue) return;
                                    navigate(`/search?q=${searchValue}`);
                                }}
                                transition="background transform .5s ease-out"
                                _hover={{
                                    background: '#D27C2F',
                                    transform: 'scale(1.05)',
                                }}
                                _active={{}}
                            >
                                <SearchIcon />
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
                            <Navbar
                                key={`navlink${links.indexOf(link)}`}
                                to={link.to}
                            >
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
                                <Navbar
                                    key={`navlink${links.indexOf(link)}`}
                                    to={link.to}
                                >
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
                    <Flex direction={{ base: 'column' }}>
                        <Link to="/">
                            <Flex
                                alignItems="center"
                                gap="2"
                                flexDirection={{ base: 'column', md: 'row' }}
                            >
                                <Avatar
                                    size="md"
                                    src={Logo}
                                    // bg="transparent"
                                    className="transition-all hover:scale-105"
                                />
                                <h1 className="font-Heading pt-3px text-2xl transition-all hover:scale-105">
                                    {LAYOUT_TITLE}
                                </h1>
                            </Flex>
                        </Link>
                        <Flex>
                            <h1 className="font-Caption">
                                &copy; DEVA 2022 - Content and Publication
                            </h1>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        alignItems={{ base: 'center', md: 'flex-start' }}
                    >
                        <Text className="font-Caption" fontSize="md">
                            Find us on
                        </Text>
                        <Stack direction="row" spacing={4}>
                            {socials.map((social) => (
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
                                    className="transition-all hover:scale-105 hover:text-Brown"
                                    key={social.to}
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
