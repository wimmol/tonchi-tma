import tocnhiCat from '@core/assets/images/tonchi-cat.png';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import murSound from '@core/assets/sound/mur-mur-sound.wav';
import WebApp from '@twa-dev/sdk';
import { useAppDispatch } from '@core/storeConfig/store.ts';
import { rootActions } from '@core/store/root/slice.ts';

const TonchiCatAppear = () => {
  const dispatch = useAppDispatch();
  const transition = {
    type: 'spring',
    duration: 1,
  };
  const [play, { stop }] = useSound(murSound, {
    volume: 0.5,
    sprite: { main: [0, 6000] },
  });
  const progress = useRef(0);
  const startInterval = useCallback(async () => {
    progress.current = 0;
    while (progress.current < 100) {
      WebApp.HapticFeedback.impactOccurred('soft');
      progress.current += 1;
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    if (progress.current === 100) {
      dispatch(rootActions.changeBalance(0.2));
      stop();
    }
  }, [progress]);

  const onStartTouch = () => {
    play({ id: 'main' });
    startInterval();
  };
  const onEndTouch = () => {
    progress.current = 110;
    stop();
  };
  useEffect(() => {
    play();
    stop();
  }, []);
  return (
    <Box
      position="absolute"
      top={-130}
      left={0}
      w="100%"
      justifyContent="center"
      display="flex"
      pl={20}
    >
      <motion.div
        transition={transition}
        animate={{
          translateX: [120, 0, 0],
          translateY: [130, 0, 0],
          opacity: [0, 1, 1],
        }}
      >
        <Image
          src={tocnhiCat}
          onTouchStart={onStartTouch}
          onTouchEnd={onEndTouch}
          onTouchCancel={onEndTouch}
          onMouseDown={onStartTouch}
          onMouseUp={onEndTouch}
          onMouseLeave={onEndTouch}
          draggable={false}
          className="prevent-select"
        />
      </motion.div>
    </Box>
  );
};

export default TonchiCatAppear;
