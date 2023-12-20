// App.js
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <SideBar isOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
        <main style={{ flex: 1, padding: '16px' }}>
          {/* Your main content goes here */}
          <h1>Main Content</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
