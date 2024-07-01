import { Box, Center, Image } from '@chakra-ui/react';
import homeBg from '@core/assets/images/home-bg.png';
import house from '@core/assets/images/house.png';
import Carpet from '@core/components/Carpet.tsx';
import { useAppSelector } from '@core/storeConfig/store.ts';
import { selectIsTutorialComplete } from '@core/store/selectors.ts';

const HomePage = () => {
  const isTutorialCompleted = useAppSelector(selectIsTutorialComplete);
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
        <Carpet isTutorialCompleted={isTutorialCompleted} />
      </Center>
    </Box>
  );
};

export default HomePage;
