import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, scrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
                d={['none', 'none', 'none', 'block' ]}
                />    
        </Flex>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginLeft='1'>
        <Icon
          as={FaArrowAltCircleRight}
          onClick={() => scrollNext()}
          fontSize='2xl'
          cursor='pointer'
          d={['none','none','none','block']}
      />
      </Flex>
    );
  }

const ImageScrollbar = () => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden'}}>

    </ScrollMenu>
)