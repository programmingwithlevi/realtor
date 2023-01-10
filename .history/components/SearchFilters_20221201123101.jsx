import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Buttton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import { Image } from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {

  }

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select 
            placeholder={filter.placeholder}
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
            >
                {filter?.items?.map((item) => (
                    <option></option>
                ))}

            </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
