import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Buttton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from 'react-icons/md';
import { Image } from "next/image";
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
    const [filters, setFilters] =useState(filterData);

    return(
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            
        </Flex>
    )
    }

export default SearchFilters;