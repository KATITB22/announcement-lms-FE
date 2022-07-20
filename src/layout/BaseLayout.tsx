import { CloseIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillHome, AiFillTag } from 'react-icons/ai';
import { FaUser, FaInfo } from 'react-icons/fa';
import Navbar from '../components/Navbar';
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

const BaseLayout: React.FC<BaseProps> = (props) => {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg="base.700" px={4}>
                <Flex
                    h={16}
                    alignItems="center"
                    justifyContent="space-between"
                    minWidth="max-content"
                >
                    <Box>Logo</Box>
                    <InputGroup
                        minWidth="200px"
                        maxWidth={{ base: '3xs', md: 'md' }}
                    >
                        <InputLeftElement pointerEvents="none">
                            {' '}
                            <SearchIcon />{' '}
                        </InputLeftElement>
                        <Input pr="4.5rem" placeholder="Search" />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() => {
                                    console.log('hi');
                                }}
                            >
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <HStack
                        minWidth="max-content"
                        as="nav"
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
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
                        bg="base.700"
                        pb={4}
                        display={{ md: 'none' }}
                        zIndex="100"
                    >
                        <Stack as="nav" spacing={4}>
                            {Links.map((link) => (
                                <Navbar key={link.to} to={link.to}>
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Navbar>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            <Box>{children}</Box>
        </>
    );
};

export default BaseLayout;
