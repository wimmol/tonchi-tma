import { Box, Center, Image } from '@chakra-ui/react';
import homeBg from '@core/assets/images/home-bg.png';
import house from '@core/assets/images/house.png';
import Carpet from '@core/components/Carpet.tsx';

const HomePage = () => {
  return (
    <Box
      className="tab-content"
      backgroundImage={homeBg}
      mx={-4}
      position="relative"
      overflow="hidden"
    >
      <Image src={house} position="absolute" right={-4} top={4} h="50%" />
      <Center position="absolute" top="55%" w="100%">
        <Carpet isActive={false} onClick={() => false} />
      </Center>
    </Box>
  );
};

export default HomePage;
