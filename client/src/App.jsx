import Layout from './components/Layout';
import Decks from './components/pages/Decks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/pages/Cards';

function App() {
  const routes = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Decks />,
        },
        {
          path: '/card/:id',
          element: <Cards />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
