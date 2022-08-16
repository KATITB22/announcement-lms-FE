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
    FaBook,
} from 'react-icons/fa';
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
        icon: <FaBook />,
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
        icon: <FaTwitter size={20} />,
    },
    {
        to: 'https://www.instagram.com/oskm.itb/',
        icon: <FaInstagram size={20} />,
    },
    {
        to: 'https://www.youtube.com/channel/UCmkkBEqwMZ1SEZN937pdpgA',
        icon: <FaYoutube size={20} />,
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
            <Box className="relative bg-Yellow text-DarkerOrange z-20">
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="6xl"
                    px={4}
                    className="mx-auto"
                    borderBottom={isOpen ? '1px solid' : 'none'}
                >
                    <Link className="h-full min-w-max flex items-center" to="/">
                        <img
                            className="h-[75%] w-[75%] md:h-[90%] md:w-full object-contain"
                            src={defaultLogo}
                            alt=""
                        />
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
                        ml="2"
                    />
                </Flex>
                {isOpen ? (
                    <Box
                        bg="#FFEBB0"
                        pb={4}
                        pt={2}
                        display={{ md: 'none' }}
                        position="absolute"
                        top={16}
                        px={4}
                        w="100%"
                    >
                        <Stack as="nav" spacing={4}>
                            {links.map((link) => (
                                <Navbar
                                    key={`navlink${links.indexOf(link)}`}
                                    to={link.to}
                                >
                                    <Flex
                                        alignItems="center"
                                        gap="2"
                                        onClick={onClose}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Flex>
                                </Navbar>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box onClick={onClose}>{children}</Box>
            <Box className="bg-Orange relative text-DarkestOrange z-10">
                <Container
                    maxW={{
                        md: '704px',
                        lg: '960px',
                        xl: '1216px',
                        '2xl': '1472px',
                    }}
                    className="h-full flex flex-col md:flex-row justify-center md:justify-between items-center"
                    py={4}
                >
                    <div className="h-[80%] md:h-full flex flex-col justify-center">
                        <Link className="h-[40%] flex justify-center" to="/">
                            <img
                                className="w-[120px]"
                                src={LogoTextRight}
                                alt=""
                            />
                        </Link>
                        <Flex className="h-[20%]">
                            <h1 className="font-Caption">
                                &copy;{' '}
                                <em>DEVA 2022 - Content and Publication</em>
                            </h1>
                        </Flex>
                    </div>
                    <Flex
                        flexDirection="column"
                        alignItems={{ base: 'center', md: 'flex-start' }}
                        mt={{ base: 2, md: 0 }}
                    >
                        <Text className="font-Caption" fontSize="lg">
                            <em>Find us on</em>
                        </Text>
                        <Stack
                            direction="row"
                            spacing={4}
                            mt={{ base: 1, md: 0 }}
                        >
                            {socials.map((social) => (
                                <chakra.button
                                    rounded="full"
                                    cursor="pointer"
                                    as="a"
                                    href={social.to}
                                    target="_blank"
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
