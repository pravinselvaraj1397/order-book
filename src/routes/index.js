import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
} from "react-router-dom";
import { browserHistory } from "./browserHistory";
import routePaths from "./routePaths";

const AppRoutes = () => {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={routePaths.root}
          element={<Navigate to={routePaths.home} />}
        />
      </Routes>
    </HistoryRouter>
  );
};

export default AppRoutes;
