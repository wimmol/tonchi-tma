import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from '@core/theme/chackraTheme.ts';
import store from '@core/storeConfig/store.ts';
import { Provider } from 'react-redux';
import RootRouter from '@core/navigation/RootRouter.tsx';
import WebApp from '@twa-dev/sdk';

WebApp.setHeaderColor('#FFFFFF');
WebApp.setBackgroundColor('#FFFFFF');

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ChakraProvider theme={chakraTheme}>
          <RootRouter />
        </ChakraProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
