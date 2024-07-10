import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';

const App = () => {
  console.log('routes: ', routes);
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* 默认路由 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
