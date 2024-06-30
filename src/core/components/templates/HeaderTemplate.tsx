import Header from '@core/components/Header.tsx';
import {
  Box,
  Center,
  CloseButton,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import HomePage from '@core/pages/HomePage.tsx';
import WalletPage from '@core/pages/WalletPage.tsx';
import { useEffect, useMemo, useState } from 'react';
import Tutorial from '@core/components/Tutorial.tsx';
import { useAppSelector } from '@core/storeConfig/store.ts';
import { selectIsTutorialComplete } from '@core/store/selectors.ts';
import ReactModal from 'react-modal';
import homeBg from '@core/assets/images/home-bg.png';
import buttonImage from '@core/assets/icons/button1.svg';

const HeaderTemplate = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const onChangeTab = (index: number) => {
    setTabIndex(index);
  };
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const isTutorialCompleted = useAppSelector(selectIsTutorialComplete);
  useEffect(() => {
    if (!isTutorialCompleted) {
      setIsTutorialOpen(true);
    }
  }, [isTutorialCompleted]);
  const steps = useMemo(() => {
    return [
      {
        id: 'step-1',
        text: '',
        xOffset: 16,
        onClick: () => {
          setIsModalOpen(true);
          setTimeout(() => {
            setCurrentStep(1);
          }, 100);
          setOpacity(0);
          setTimeout(() => {
            setOpacity(1);
          }, 1000);
        },
      },
      {
        id: 'step-2',
        text: '',
        onClick: () => {
          setIsModalOpen(false);
          setTimeout(() => {
            setCurrentStep(2);
          }, 100);
          setOpacity(0);
          setTimeout(() => {
            setOpacity(1);
          }, 1000);
        },
      },
      {
        id: 'step-3',
        text: 'Now you need to buy some food go to “Wallet”',
        onClick: () => {
          setTabIndex(1);
          setOpacity(0);
        },
      },
    ];
  }, []);

  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => setOpacity(1), 750);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Box
        h="100vh"
        className="bg-transition"
        backgroundColor={tabIndex ? '#F2F2F7' : 'white'}
        position="relative"
        overflow="hidden"
      >
        {isTutorialOpen && (
          <Tutorial steps={steps} currentStep={currentStep} opacity={opacity} />
        )}
        <Header />
        <Box pt={2} px={4}>
          <Tabs
            position="relative"
            variant="unstyled"
            onChange={onChangeTab}
            index={tabIndex}
          >
            <Box
              borderRadius="9px"
              h="32px"
              backgroundColor="#74748014"
              px="2.5px"
            >
              <TabList
                w="100%"
                justifyContent="center"
                borderRadius="9px"
                h="32px"
                position="absolute"
                top="0"
                zIndex={1}
                px="2.5px"
              >
                <Tab w="50%" userSelect="none">
                  Home
                </Tab>
                <Tab w="50%" userSelect="none" className="step-3">
                  Wallet
                </Tab>
              </TabList>
            </Box>
            <TabIndicator
              mt="-30px"
              height="28px"
              borderRadius="7px"
              backgroundColor="white"
              className="tab-shadows"
              borderWidth={0.5}
              borderColor="#74748014"
            />
            <TabPanels>
              <TabPanel p={0}>
                <HomePage />
              </TabPanel>
              <TabPanel>
                <WalletPage />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <ReactModal
        isOpen={isModalOpen}
        ariaHideApp={false}
        style={{
          content: {
            height: 250,
            width: 250,
            left: window.innerWidth / 2 - 125,
            top: 150,
            border: 'none',
            borderRadius: 10,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            padding: 0,
          },
        }}
      >
        <Box h="100%" w="100%" backgroundImage={homeBg}>
          <CloseButton
            onClick={() => setIsModalOpen(false)}
            right={2}
            top={2}
            position="absolute"
            size="md"
          />
          <Center flexDirection="column" h="100%" className="step-2">
            <Image src={buttonImage} w={58} />
            <Text fontSize={12}>Buy Carpet</Text>
          </Center>
        </Box>
      </ReactModal>
    </>
  );
};

export default HeaderTemplate;
