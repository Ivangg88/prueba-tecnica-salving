import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import MapsPage from "../../pages/MapsPage/MapsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import CredentialRoutes from "../CredentialRoute/CredentialRoute";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/maps"
        element={
          <CredentialRoutes>
            <MapsPage />
          </CredentialRoutes>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
