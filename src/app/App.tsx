/**
 * Main App Component with React Router
 * 
 * IMPORTANT FOR DEVELOPERS:
 * - Each page must render correctly on initial load when accessed directly by its URL
 * - Routing must be URL-driven, not state-driven
 * - All routes are defined in /src/app/routes/routes.tsx
 * - Deep linking is fully supported - every route is accessible directly
 */

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchModal } from "./components/SearchModal";
import AppRoutes from "./AppRoutes";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
          <AppRoutes />
          <SearchModal 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
