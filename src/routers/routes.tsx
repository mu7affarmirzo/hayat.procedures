import Procedural from '../pages/procedural/Procedural';
import ProceduralInfo from '../pages/proceduralInfo/ProceduralInfo';

const ROUTES: any[] = [
  {
    path: '/',
    component: <Procedural />,
  },
  {
    path: '/proceduralinfo',
    component: <ProceduralInfo />,
  },
];
export default ROUTES;
