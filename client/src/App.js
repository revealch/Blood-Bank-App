// App.js

import "./App.css";
import { Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import HomePage from "./pages/auth/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import PublicRoutes from "./components/Routes/PublicRoutes";
import Donar from './pages/Dashboard/Donar';
import Hospital from "./pages/Dashboard/Hospital";
import Organization from "./pages/Dashboard/Organization";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Dashboard/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrganizationList from "./pages/Admin/OrganizationList";
import AdminPage from "./pages/Admin/AdminPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Donar"
          element={
            <ProtectedRoutes>
              <Donar />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donar-list"
          element={
            <ProtectedRoutes>
              <DonarList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoutes>
              <Hospital />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoutes>
              <HospitalList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/organization"
          element={
            <ProtectedRoutes>
              <Organization />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/organization-list"
          element={
            <ProtectedRoutes>
              <OrganizationList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoutes>
              <Consumer />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoutes>
              <Donation />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoutes>
              <Analytics />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoutes>
              <AdminPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
