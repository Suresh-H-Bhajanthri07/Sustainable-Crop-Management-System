import { Routes,Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import LoginForm from './pages/loginPage/loginPage';
import Register from './pages/registrationPage/registrationPage';
import Dashboard from './pages/Dashboard/dashboard';
import Sell from './pages/Sell/sell'
import Cropinfo from './pages/CropInfo/cropinfo';
import { withCookies } from 'react-cookie';
import CropDetail from './pages/CropPageinfo/cropdetail';
import Selectiontab from './pages/SelectionTab/selectiontab';

import i18next from './i18n';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/dashboard/:id" element={<Dashboard />}></Route>
        <Route path="/sell/search" element={<Sell />}></Route>
        {/* <Route path="/cropinfo" element={<Cropinfo />}></Route> */}
        <Route path="/cropDetail/:id" element={<CropDetail />}></Route>
        <Route path="/cropinfo/:cropName" element={<Cropinfo />} />
        <Route path="/selectiontab/:id" element={<Selectiontab />}></Route>
      </Routes>
    </I18nextProvider>
  );
}

export default withCookies(App);
