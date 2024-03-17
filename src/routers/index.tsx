import { Box } from '@mui/material';
import { Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Procedural from '../pages/procedural/Procedural';
import ProceduralInfo from '../pages/proceduralInfo/ProceduralInfo';
import { useReduxSelector } from '../hooks/useReduxHook';

export const MainContainer = styled.div`
  display: flex;
  height: calc(100vh - 76px);
`;

const AppRouting = () => {
  const { isAuthenticated } = useReduxSelector(
    (loginState) => loginState?.login,
  );
  console.log('isAuthenticated', isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'*'} element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Box className="w-[744px] ">
      <Header />
      <MainContainer>
        <Routes>
          <Route path={'/procedural'} element={<Procedural />} />
          <Route path={'/proceduralinfo'} element={<ProceduralInfo />} />
          <Route path={'*'} element={<Navigate to="/procedural" />} />
        </Routes>
      </MainContainer>
    </Box>
  );
};

export default AppRouting;
