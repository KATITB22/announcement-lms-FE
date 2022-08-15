import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    chakra,
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
import { AiFillHome } from 'react-icons/ai';
import {
    FaInfo,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPeopleCarry,
    FaHandshake,
} from 'react-icons/fa';
import { GrCatalog } from 'react-icons/gr';
import Navbar from '@components/Navbar';
import Logo from '@/assets/images/logo/logo.png';
import LogoTextRight from '@/assets/images/logo/logo-oskm-itb.png';
import { Link, useNavigate } from 'react-router-dom';
import { breakPointSize } from '@/types/enum';
import { BaseProps } from '../types/interface';
import { Animate } from './Animate';

const links = [
    {
        name: 'Home',
        to: '/',
        icon: <AiFillHome />,
    },
    {
        name: 'Catalogue',
        to: '/catalogue',
        icon: <GrCatalog />,
    },
    {
        name: 'Defile',
        to: '/defile',
        icon: <FaPeopleCarry />,
    },
    {
        name: 'Partner',
        to: '/partner',
        icon: <FaHandshake />,
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

    let defaultLogo = LogoTextRight;
    const { width } = window.screen;
    if (width < breakPointSize.md) {
        defaultLogo = Logo;
    }

    return (
        <Animate>
            <Box className="bg-Yellow px-4 text-DarkerOrange z-20">
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="6xl"
                    className="mx-auto"
                >
                    <Link className="h-full min-w-max flex items-center" to="/">
                        <img className="h-[90%]" src={defaultLogo} alt="" />
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
            <Box h={40} className="bg-Orange text-DarkestOrange">
                <Container
                    maxW="6xl"
                    className="h-full flex flex-col md:flex-row justify-center md:justify-between items-center"
                    py={4}
                >
                    <div className="h-[80%] md:h-full flex flex-col justify-center">
                        <Link className="h-[40%] flex justify-center" to="/">
                            <img
                                className="h-full"
                                src={LogoTextRight}
                                alt=""
                            />
                        </Link>
                        <Flex className="h-[20%]">
                            <h1 className="font-Caption">
                                &copy; <em>DEVA 2022 - Content and Publication</em>
                            </h1>
                        </Flex>
                    </div>
                    <Flex
                        flexDirection="column"
                        alignItems={{ base: 'center', md: 'flex-start' }}
                    >
                        <Text className="font-Caption" fontSize="md">
                            <em>Find us on</em>
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
