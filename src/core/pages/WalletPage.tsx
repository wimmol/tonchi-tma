import styled from '@emotion/styled';
import { Box, Button, IconButton, Text, VStack } from '@chakra-ui/react';
import SendButtonIcon from '@core/assets/icons/send_button.svg';
import TopUpButtonIcon from '@core/assets/icons/topup_button.svg';
import ChangeButtonIcon from '@core/assets/icons/change_button.svg';
import ShopButtonIcon from '@core/assets/icons/shop_button.svg';
import BlueCoinIcon from '@core/assets/icons/blue_coin.svg';


// Styled components
const Container = styled(Box)`
    background-color: #f7f7f7;
    padding: 20px;
    text-align: center;
    height: 80vh;
`;

const BalanceText = styled(Text)`
    font-size: 24px;
    font-weight: bold;
`;

const CoinContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    min-width: 358px;
    width: 80%;
    border-radius: 10px;
`;

const CoinInfo = styled(Box)`
    display: flex;
    align-items: center;
`;

const CoinIcon = styled(Box)`
    width: 37px;
    height: 37px;
    background-color: #74B9FF;
    border-radius: 50%;
    margin-right: 10px;
`;

const CoinText = styled(Text)`
    font-size: 18px;
    margin-left: 10px;
`;

const WalletPage = () => {
  return (
    <Container>
      <VStack spacing={4}>
        <BalanceText>Balance</BalanceText>
        <Text fontSize="48px">5 YTC</Text>
        <Box marginBottom={6} display="flex" justifyContent="space-around" width="100%">
          <IconButton backgroundColor={'#f7f7f7'} icon={<img src={SendButtonIcon} />} aria-label="Send" />
          <IconButton backgroundColor={'#f7f7f7'} icon={<img src={TopUpButtonIcon} />} aria-label="Top Up" />
          <IconButton backgroundColor={'#f7f7f7'} icon={<img src={ChangeButtonIcon} />} aria-label="Change" />
          <IconButton backgroundColor={'#f7f7f7'} icon={<img src={ShopButtonIcon} />} aria-label="Change" />
        </Box>
        <CoinContainer>
          <CoinInfo>
            <img height={40} width={40} src={BlueCoinIcon} alt="Blue Tonchi Coin" />
            <CoinText>Blue Tonchi Coin</CoinText>
          </CoinInfo>
          <Button textColor={'white'} backgroundColor={'#007AFF'} rounded={20}>BUY</Button>
        </CoinContainer>
        <CoinContainer>
          <CoinInfo>
            <CoinIcon backgroundColor={'#74B9FF'} />
            <CoinText>Yummy Treats</CoinText>
          </CoinInfo>
          <Button textColor={'white'} backgroundColor={'#8E8E93'} rounded={20}>BUY</Button>
        </CoinContainer>
      </VStack>
    </Container>
  );
};

export default WalletPage;
