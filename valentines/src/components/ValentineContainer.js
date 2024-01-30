import React, { useState } from "react";

import Home from "./pages/Home";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Home currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
