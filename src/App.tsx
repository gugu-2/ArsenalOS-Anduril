import { useState } from 'react';
import { LayoutDashboard, Factory, Boxes, HardHat, Bell, Settings, Activity } from 'lucide-react';
import DashboardView from './components/DashboardView';
import PLMView from './components/PLMView';
import MESView from './components/MESView';
import WMSView from './components/WMSView';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'plm':
        return <PLMView />;
      case 'mes':
        return <MESView />;
      case 'wms':
        return <WMSView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="mb-4">
          <div className="sidebar-item" style={{ color: 'var(--accent-primary)' }}>
            <Activity size={24} />
          </div>
        </div>
        
        <div 
          className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
          title="Command Center"
        >
          <LayoutDashboard size={20} />
        </div>
        
        <div 
          className={`sidebar-item ${activeTab === 'plm' ? 'active' : ''}`}
          onClick={() => setActiveTab('plm')}
          title="Product Lifecycle Management"
        >
          <Boxes size={20} />
        </div>
        
        <div 
          className={`sidebar-item ${activeTab === 'mes' ? 'active' : ''}`}
          onClick={() => setActiveTab('mes')}
          title="Manufacturing Execution System"
        >
          <Factory size={20} />
        </div>
        
        <div 
          className={`sidebar-item ${activeTab === 'wms' ? 'active' : ''}`}
          onClick={() => setActiveTab('wms')}
          title="Warehouse Management System"
        >
          <HardHat size={20} />
        </div>

        <div className="sidebar-item" style={{ marginTop: 'auto' }} title="Settings">
          <Settings size={20} />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Navbar */}
        <header className="top-nav">
          <div className="top-nav-logo">
            <span>ARSENAL</span>
            <span style={{ color: 'var(--accent-primary)' }}>OS</span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginLeft: '8px' }}>
               // BUILD CHAIN 01
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="status-indicator">
              <div className="status-dot success"></div>
              <span>SYSTEM NOMINAL</span>
            </div>
            <div style={{ color: 'var(--text-tertiary)', cursor: 'pointer' }}>
              <Bell size={20} />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
