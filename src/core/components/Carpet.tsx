import { Box, Center, Image } from '@chakra-ui/react';
import carpet from '@core/assets/images/carpet.png';
import plus from '@core/assets/icons/plus.svg';

interface CarpetProps {
  isActive: boolean;
  onClick: () => void;
}

const Carpet = ({ isActive, onClick }: CarpetProps) => {
  return (
    <Center onClick={onClick}>
      <Box opacity={isActive ? 1 : 0.5} className="step-1">
        <Image src={carpet} />
      </Box>
      {!isActive && <Image src={plus} position="absolute" ml={6} pb={2} />}
    </Center>
  );
};

export default Carpet;
