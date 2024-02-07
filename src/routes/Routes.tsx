import { lazy } from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";

const UsersPage = lazy(() => import("pages/users/users"));
const ProductPage = lazy(() => import("pages/products/products"));
const D3Page = lazy(() => import("pages/d3/d3"));

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/d3" element={<D3Page />} />
    </RouterRoutes>
  );
}

export default Routes;
