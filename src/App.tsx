import { Route, BrowserRouter as Router, Routes } from "react-router";
import { ScrollToTop } from "./ui/components/common/ScrollToTop";
import AppLayout from "./ui/layout/AppLayout";
import SignIn from "./ui/pages/AuthPages/SignIn";
import SignUp from "./ui/pages/AuthPages/SignUp";
import Home from "./ui/pages/Dashboard/Home";
import PrivateRoute from "./ui//hooks/PrivateRoute";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route
              index
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

