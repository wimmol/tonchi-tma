import { Center, Spinner } from '@chakra-ui/react';
import { selectRequestStatus, selectUser } from '@core/store/root/selectors.ts';
import { useAppDispatch, useAppSelector } from '@core/storeConfig/store.ts';
import { useNavigate } from 'react-router-dom';
import routes from '@core/navigation/routes.ts';
import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import rootThunks from '@core/store/root/thunks.ts';

const RootPage = () => {
  const requestStatus = useAppSelector(selectRequestStatus);
  const userStored = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  useEffect(() => {
    if (isFirstLoad) {
      WebApp.sendData('entered');
      preloadData();
      setIsFirstLoad(false);
    }
  }, []);
  const preloadData = async () => {
    const user = WebApp.initDataUnsafe.user;
    if (user?.id) {
      await dispatch(rootThunks.getUser(user?.id));
      if (requestStatus.getUser === 'success' && userStored !== null) {
        navigate(routes.home);
      } else {
        navigate(routes.onboarding);
      }
    }
  };
  return (
    <Center w="100vw" h="100vh">
      <Spinner />
    </Center>
  );
};

export default RootPage;
