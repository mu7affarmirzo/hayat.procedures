import { Suspense } from 'react';
import './App.css';
import AppRouting from './routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[rgb(235,233,233)] w-full h-full flex justify-center ">
        <Suspense fallback={'Loading...'}>
          <AppRouting />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
