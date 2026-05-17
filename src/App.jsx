import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { appRoutes } from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

