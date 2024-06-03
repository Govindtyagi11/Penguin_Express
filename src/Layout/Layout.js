import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Footer } from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import routes from '../routes';
import Page404 from '../components/Page404/Page404';

const Layout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebarVisibility = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="layout-container">
      {/* Example: Add a header component */}

      <header>
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebarVisibility} />
      </header>

      {/* Main content area */}
      <div className="main">
        <div className="main_section">
        <Navbar toggleSidebar={toggleSidebarVisibility} />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              {
                routes.map((route, key) => {
                  return (
                    <Route
                      key={key}
                      exact={true}
                      path={`${route.path}`}
                      element={<route.component />}
                    />
                  )
                })
              }

              {/* Redirecting unknown url to 404 page */}
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </div>
      </div>
      {/* Example: Add a footer component */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

