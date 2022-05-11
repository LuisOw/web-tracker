import { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/loginPage";

import { AuthProvider, AuthContext } from "./context/auth";
import ResearchesPage from "./pages/ResearchesPage/ResearchesPage";
import QuestionnairesPage from "./pages/questionnairePage/QuerionnairesPage";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/pesquisas"
            element={
              <Private>
                <ResearchesPage />
              </Private>
            }
          />
          <Route
            path="/pesquisas/:researchId/questionarios"
            element={
              <Private>
                <QuestionnairesPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
