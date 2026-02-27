import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminAuthProvider } from "../../restaurant/AdminAuthContext";
import ProtectedAdminRoute from "../../restaurant/ProtectedAdminRoute";

const RestaurantHome = lazy(() => import("../../Pages/RestaurantHome"));
const RestaurantAdmin = lazy(() => import("../../Pages/RestaurantAdmin"));
const RestaurantAdminLogin = lazy(() => import("../../Pages/RestaurantAdminLogin"));

const PageFallback = () => (
  <div className="min-h-[30vh] flex items-center justify-center text-slate-300">
    Loading...
  </div>
);

function RestaurantApp() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageFallback />}>
                <RestaurantHome />
              </Suspense>
            }
          />
          <Route
            path="/admin-login"
            element={
              <Suspense fallback={<PageFallback />}>
                <RestaurantAdminLogin />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <Suspense fallback={<PageFallback />}>
                  <RestaurantAdmin />
                </Suspense>
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default RestaurantApp;
