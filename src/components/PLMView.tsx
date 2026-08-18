import { motion } from 'framer-motion';
import { Layers, FileText, Settings2, Share2, Eye } from 'lucide-react';

const PLMView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-col gap-6 h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-light mb-1">Product Lifecycle Management</h1>
          <p className="text-secondary mono text-xs">DESIGN VAULT // BILL OF MATERIALS</p>
        </div>
        <div className="flex gap-2">
          <button className="panel flex items-center gap-2 px-4 py-2" style={{ padding: '8px 16px', cursor: 'pointer' }}>
            <Share2 size={16} />
            <span className="mono text-xs">Export BOM</span>
          </button>
        </div>
      </div>

      <div className="grid-cols-12 flex-1" style={{ minHeight: 0 }}>
        {/* BOM Tree */}
        <div className="panel col-span-4 flex-col overflow-hidden h-full">
          <div className="panel-header mb-0">
            <span className="panel-title">Engineering BOM (eBOM)</span>
            <Layers size={16} color="var(--text-secondary)" />
          </div>
          <div className="overflow-y-auto pt-4">
            <div className="flex-col gap-2">
              {[
                { id: 'ASM-100', name: 'Main Fuselage Assembly', rev: 'C', status: 'RELEASED', indent: 0 },
                { id: 'PRT-101', name: 'Titanium Framework', rev: 'B', status: 'RELEASED', indent: 1 },
                { id: 'ASM-102', name: 'Sensor Array Housing', rev: 'D', status: 'IN_REVIEW', indent: 1 },
                { id: 'PRT-102a', name: 'Thermal Camera Mount', rev: 'A', status: 'RELEASED', indent: 2 },
                { id: 'PRT-102b', name: 'LIDAR Bracket', rev: 'A', status: 'DRAFT', indent: 2 },
                { id: 'ASM-103', name: 'Propulsion Unit', rev: 'F', status: 'RELEASED', indent: 1 },
                { id: 'PRT-103a', name: 'Brushless Motor', rev: 'C', status: 'RELEASED', indent: 2 },
                { id: 'PRT-103b', name: 'Carbon Fiber Propeller', rev: 'B', status: 'RELEASED', indent: 2 },
                { id: 'ASM-104', name: 'Power Distribution', rev: 'B', status: 'RELEASED', indent: 1 },
                { id: 'PRT-104a', name: 'Main Battery Pack', rev: 'D', status: 'RELEASED', indent: 2 },
                { id: 'PRT-104b', name: 'Wiring Harness', rev: 'A', status: 'IN_REVIEW', indent: 2 },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-2 hover:bg-white/5 cursor-pointer rounded transition-colors"
                  style={{ paddingLeft: `${item.indent * 1.5 + 0.5}rem`, borderLeft: item.indent > 0 ? '1px solid var(--border-subtle)' : 'none' }}
                >
                  <div className="flex flex-col">
                    <span className="mono text-xs text-primary">{item.id} <span className="text-tertiary ml-2">REV {item.rev}</span></span>
                    <span className="text-sm text-secondary">{item.name}</span>
                  </div>
                  <div className={`status-indicator ${
                    item.status === 'RELEASED' ? 'text-success' : 
                    item.status === 'IN_REVIEW' ? 'text-warning' : 'text-secondary'
                  }`} style={{ color: `var(--status-${item.status === 'RELEASED' ? 'success' : item.status === 'IN_REVIEW' ? 'warning' : 'tertiary'})` }}>
                    {item.status === 'RELEASED' && <div className="status-dot success"></div>}
                    {item.status === 'IN_REVIEW' && <div className="status-dot warning"></div>}
                    {item.status === 'DRAFT' && <div className="status-dot" style={{ backgroundColor: 'var(--text-tertiary)' }}></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Viewer Mock & Details */}
        <div className="col-span-8 flex flex-col gap-6 h-full overflow-hidden">
          <div className="panel flex-1 flex flex-col justify-center items-center relative">
            <div className="absolute top-4 left-4">
              <span className="panel-title">CAD Visualization</span>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-2 border border-subtle rounded hover:bg-white/5"><Eye size={16} /></button>
              <button className="p-2 border border-subtle rounded hover:bg-white/5"><Settings2 size={16} /></button>
            </div>
            
            {/* Mock 3D Model Wireframe Box */}
            <div className="w-64 h-64 border border-accent-primary/30 relative flex items-center justify-center animate-pulse" style={{ transform: 'rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}>
              <div className="absolute w-full h-full border border-accent-primary/20" style={{ transform: 'translateZ(64px)' }}></div>
              <div className="absolute w-full h-full border border-accent-primary/20" style={{ transform: 'translateZ(-64px)' }}></div>
              <span className="mono text-accent-primary/50" style={{ transform: 'rotateX(-60deg) rotateZ(-45deg)' }}>ASM-100 RENDER</span>
            </div>
          </div>

          <div className="panel h-48 overflow-y-auto">
            <div className="panel-header">
              <span className="panel-title">Part Details: ASM-100</span>
              <FileText size={16} color="var(--text-secondary)" />
            </div>
            <table className="data-table">
              <tbody>
                <tr>
                  <td className="text-secondary w-32">Description</td>
                  <td>Main Fuselage Assembly (Block II)</td>
                </tr>
                <tr>
                  <td className="text-secondary">Material</td>
                  <td>Carbon Composite / Titanium</td>
                </tr>
                <tr>
                  <td className="text-secondary">Mass</td>
                  <td>14.2 kg</td>
                </tr>
                <tr>
                  <td className="text-secondary">Last Modified</td>
                  <td>2026-08-15 14:32 PST by J. Doe (Eng)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PLMView;
