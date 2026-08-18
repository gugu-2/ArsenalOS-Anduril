import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle, AlertTriangle, Zap, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { time: '08:00', yield: 4000, target: 4400 },
  { time: '09:00', yield: 3000, target: 3200 },
  { time: '10:00', yield: 2000, target: 2200 },
  { time: '11:00', yield: 2780, target: 2900 },
  { time: '12:00', yield: 1890, target: 2000 },
  { time: '13:00', yield: 2390, target: 2500 },
  { time: '14:00', yield: 3490, target: 3500 },
];

const DashboardView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-col gap-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-light mb-1">Command Center</h1>
          <p className="text-secondary mono text-xs">GLOBAL FACTORY OVERVIEW // REAL-TIME</p>
        </div>
      </div>

      <div className="grid-cols-12 mb-6">
        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Production Rate</span>
            <Zap size={16} color="var(--accent-primary)" />
          </div>
          <div className="metric-value">
            94.2<span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="metric-label">+2.4% vs last shift</span>
            <div className="status-indicator">
              <div className="status-dot success animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Active Builds</span>
            <Factory size={16} color="var(--text-secondary)" />
          </div>
          <div className="metric-value">142</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Across 3 facilities</span>
          </div>
        </div>

        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Quality Yield</span>
            <CheckCircle size={16} color="var(--status-success)" />
          </div>
          <div className="metric-value">99.8%</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Nominal variance</span>
          </div>
        </div>

        <div className="panel col-span-3">
          <div className="panel-header">
            <span className="panel-title">Open Anomalies</span>
            <AlertTriangle size={16} color="var(--status-warning)" />
          </div>
          <div className="metric-value" style={{ color: 'var(--status-warning)' }}>3</div>
          <div className="flex justify-between items-center">
            <span className="metric-label">Awaiting engineering review</span>
          </div>
        </div>
      </div>

      <div className="grid-cols-12">
        <div className="panel col-span-8" style={{ height: '400px' }}>
          <div className="panel-header">
            <span className="panel-title">System Output Telemetry</span>
          </div>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                <XAxis dataKey="time" stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-tertiary)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-default)' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Area type="monotone" dataKey="yield" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorYield)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel col-span-4" style={{ height: '400px', overflowY: 'auto' }}>
          <div className="panel-header">
            <span className="panel-title">Live Build Events</span>
          </div>
          <div className="flex-col gap-4">
            {[
              { id: 'EV-8291', status: 'success', time: 'Just now', desc: 'Sub-assembly alpha passed validation' },
              { id: 'EV-8290', status: 'warning', time: '2m ago', desc: 'Material shortage detected at Station 4' },
              { id: 'EV-8289', status: 'info', time: '15m ago', desc: 'New work instruction pushed to floor' },
              { id: 'EV-8288', status: 'success', time: '22m ago', desc: 'Final QC complete for Unit 77A' },
              { id: 'EV-8287', status: 'danger', time: '1h ago', desc: 'Torque mismatch recorded by robotic arm' },
            ].map((event, i) => (
              <div key={i} className="flex gap-4 p-3" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ marginTop: '4px' }}>
                  <div className={`status-dot ${event.status}`}></div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="mono text-xs" style={{ color: 'var(--text-secondary)' }}>{event.id}</span>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{event.time}</span>
                  </div>
                  <p className="text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardView;
