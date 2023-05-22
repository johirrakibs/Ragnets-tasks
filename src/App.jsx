import { Route, Routes } from 'react-router-dom';

import LoginPage from './components/login/Login';
import Home from './pages/Home';
import Details from './components/details/Details';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';
import ProtectedRoutes from './ProtectedRoutes';
import PurchaseHistory from './components/purchaseHistory/PurchaseHistory';
import Buynow from './components/buynow/Buynow';
import RegistrationPage from './components/registration/Registration';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />,
        <Route path='/home' element={<Home />} />,
        <Route path='/registration' element={<RegistrationPage />} />,
        <Route path='/login' element={<LoginPage />} />,
        <Route path='/details/:id' element={<Details />} />,
        <Route path='/buynow/:id' element={<Buynow />} />,
        <Route element={<ProtectedRoutes />}>
          <Route path='/profile' element={<Profile />} />,
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchaseHistory' element={<PurchaseHistory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
