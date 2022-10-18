import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { FormSendDress } from '../pages/SendDress';
import { DetailsDress } from '../pages/DetailsDress';
export const Router = () => {
  return (
    <BrowserRouter>
      {console.log('aquii')}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/categories/:id" element={<DetailsDress />} />
        <Route path="/sendDress" element={<FormSendDress />} />
      </Routes>
    </BrowserRouter>
  );
};
