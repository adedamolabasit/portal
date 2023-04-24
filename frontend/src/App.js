import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routesObjects from "./routes";
import { AuthProvider } from "./context/authContext";
import { PortalProvider } from "./context/portalContent";

function App() {
  return (
    <div className="">
      <Router>
        <AuthProvider>
          <PortalProvider>
            <Routes>
              {routesObjects.map((route) => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Routes>
          </PortalProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
