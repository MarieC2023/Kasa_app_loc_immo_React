import { Route, Routes } from 'react-router-dom'

import { Layout, Home, PropertyPage, About } from '@/pages'
import Error from '@/_utils/Error'


const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties/:id" element={<PropertyPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>

  );
};

export default PublicRouter;