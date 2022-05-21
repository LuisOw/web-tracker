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
import QuestionsPage from "./pages/questionPage/QuestionsPage";
import AlternativesPage from "./pages/alternativesPage/AlternativesPage";

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
          <Route exact path="/" element={<LoginPage />} />
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
          <Route
            path="/pesquisas/:researchId/questionarios/:questionnaireId"
            element={
              <Private>
                <QuestionsPage />
              </Private>
            }
          />
          <Route
            path="/pesquisas/:researchId/questionarios/:questionnaireId/questoes/:questionId"
            element={
              <Private>
                <AlternativesPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
