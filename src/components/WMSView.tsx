import { motion } from 'framer-motion';
import { Package, Truck, ArrowDownToLine, ArrowUpFromLine, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const inventoryData = [
  { name: 'Titanium Base', stock: 400, min: 100 },
  { name: 'Sensors', stock: 150, min: 200 }, // Under min
  { name: 'Batteries', stock: 600, min: 300 },
  { name: 'Propellers', stock: 1200, min: 800 },
  { name: 'Carbon Fiber', stock: 80, min: 100 }, // Under min
  { name: 'Motors', stock: 450, min: 200 },
];

const WMSView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-col gap-6 h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-light mb-1">Supply Chain & Inventory</h1>
          <p className="text-secondary mono text-xs">GLOBAL LOGISTICS // WAREHOUSE MGMT</p>
        </div>
      </div>

      <div className="grid-cols-12 mb-6">
        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Total SKUs</span>
            <Package size={16} color="var(--text-secondary)" />
          </div>
          <div className="metric-value">4,892</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Across all facilities</span>
          </div>
        </div>

        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Inbound Shipments</span>
            <ArrowDownToLine size={16} color="var(--status-info)" />
          </div>
          <div className="metric-value">24</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Arriving next 24h</span>
          </div>
        </div>

        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Outbound Shipments</span>
            <ArrowUpFromLine size={16} color="var(--status-success)" />
          </div>
          <div className="metric-value">12</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Pending dispatch</span>
          </div>
        </div>

        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Critical Shortages</span>
            <AlertTriangle size={16} color="var(--status-danger)" />
          </div>
          <div className="metric-value" style={{ color: 'var(--status-danger)' }}>2</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Impacting active builds</span>
          </div>
        </div>
      </div>

      <div className="grid-cols-12 flex-1" style={{ minHeight: 0 }}>
        {/* Inventory Levels Chart */}
        <div className="panel col-span-8 flex flex-col h-full">
          <div className="panel-header">
            <span className="panel-title">Critical Component Stock Levels</span>
          </div>
          <div className="flex-1 w-full min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'var(--bg-elevated)'}}
                  contentStyle={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-default)' }}
                />
                <Bar dataKey="stock" radius={[4, 4, 0, 0]}>
                  {
                    inventoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.stock < entry.min ? 'var(--status-danger)' : 'var(--accent-primary)'} opacity={0.8} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Logistics Feed */}
        <div className="panel col-span-4 flex flex-col h-full overflow-hidden">
          <div className="panel-header">
            <span className="panel-title">Logistics Feed</span>
            <Truck size={16} color="var(--text-secondary)" />
          </div>
          <div className="overflow-y-auto flex-1 pr-2">
            <div className="flex-col gap-3">
              {[
                { id: 'SHP-9021', type: 'inbound', status: 'delayed', text: 'Sensor shipment delayed at customs. Expected +48h.', time: '10m ago' },
                { id: 'INT-4412', type: 'internal', status: 'moving', text: 'Transferring 200 units of PRT-102a to Line B.', time: '45m ago' },
                { id: 'SHP-9020', type: 'outbound', status: 'delivered', text: 'Batch 44 (Fury) delivered to test site.', time: '2h ago' },
                { id: 'PO-8832', type: 'order', status: 'action', text: 'Carbon fiber inventory below minimum threshold. PO required.', time: '3h ago' },
              ].map((item, i) => (
                <div key={i} className="p-3 border border-subtle rounded bg-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="mono text-xs font-bold" style={{
                      color: item.status === 'action' || item.status === 'delayed' ? 'var(--status-warning)' : 'var(--accent-primary)'
                    }}>{item.id}</span>
                    <span className="text-xs text-tertiary">{item.time}</span>
                  </div>
                  <p className="text-sm text-secondary line-height-1.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WMSView;
