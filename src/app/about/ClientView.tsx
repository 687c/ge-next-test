"use client"

import Image from "next/image";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Button, Stack, Link } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { getOfficialSite } from "@/lib/utils";

import { useState } from "react";


function paginate(items: any[], currentPage: number, pageSize: number) {
    const totalCount = items.length;
    const pageCount = Math.ceil(totalCount / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const result = {
        currentPage,
        pageSize,
        pageCount,
        totalCount,
        paginatedMedia: items.slice(startIndex, endIndex),
        next: () => { }
    };

    result.next = () => {
        if (currentPage < pageCount) {
            return paginate(items, currentPage + 1, pageSize);
        } else {
            return null;
        }
    };

    return result;
}

export default function ClientView({ media }: { media: any[] }) {
    const [page, setPage] = useState(1);

    const { paginatedMedia, pageCount } = paginate(media, page, 10);

    return <Box>
        <Tabs orientation="vertical" >
            <TabList aria-orientation="vertical" px={50} border="1px solid black">
                <Tab my={10}>
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        width={100}
                        height={45}
                        priority
                    />
                </Tab>
                <Tab my={10}>About</Tab>
                <Tab my={5}>Test</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Box my="10">
                        <Text textAlign="center" fontSize="2xl" fontWeight="extrabold">
                            Action Anime Movies from 2020
                        </Text>
                    </Box>

                    <Box>
                        <TableContainer border="1px solid black" borderRadius="17px">
                            <Table variant='striped' colorScheme='teal'>
                                <TableCaption>list of action anime movies release from 2020</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>title</Th>
                                        <Th isNumeric>link</Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {
                                        paginatedMedia.map((media, index) => (
                                            <Tr key={index}>
                                                <Td> {media.title.native} </Td>
                                                <Td><Link href={getOfficialSite(media.externalLinks)}>{getOfficialSite(media.externalLinks)}</Link> </Td>
                                            </Tr>
                                        ))
                                    }

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box display="flex" justifyContent="right" my={4}>
                        <Button onClick={() => page > 1 ? setPage(page => page - 1) : ""}>

                            Previous
                        </Button>

                        <Button onClick={() => pageCount > page ? setPage(page => page + 1) : console.log("not running")}
                            colorScheme="teal" mr="10" w="100px"
                        >
                            Next
                        </Button>
                    </Box>
                </TabPanel>

                <TabPanel height="100vh">
                    <p>two!</p>
                </TabPanel>

                <TabPanel height="100vh">
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
}
