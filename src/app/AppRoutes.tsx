/**
 * App Routes Component
 * This component is rendered inside the Router context and handles routing logic
 */

import React, { useEffect } from "react";
import { useRoutes, useNavigate } from "react-router-dom";
import { setNavigateFunction } from "./utils/navigationHelper";
import { routes } from "./routes/routes";

export default function AppRoutes() {
  const navigate = useNavigate();
  const element = useRoutes(routes);

  // Initialize navigation helper with React Router's navigate function
  useEffect(() => {
    setNavigateFunction((path: string) => {
      navigate(path);
    });
  }, [navigate]);

  return <>{element}</>;
}