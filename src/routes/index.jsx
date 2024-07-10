import Home from '@/page/home/Home.jsx'
import Search from '@/page/search/Search.jsx'

const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home'
  },
  {
    path: '/search',
    element: <Search />,
    name: 'Search'
  },
];

export default routes;
