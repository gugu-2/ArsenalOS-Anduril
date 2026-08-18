import { motion } from 'framer-motion';
import { PlayCircle, PauseCircle, CheckSquare, AlertCircle, Cpu } from 'lucide-react';

const MESView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-col gap-6 h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-light mb-1">Manufacturing Execution</h1>
          <p className="text-secondary mono text-xs">SHOP FLOOR CONTROL // WORK INSTRUCTIONS</p>
        </div>
      </div>

      <div className="grid-cols-12 flex-1 gap-6" style={{ minHeight: 0 }}>
        {/* Active Work Orders */}
        <div className="col-span-3 flex flex-col gap-4 overflow-hidden h-full">
          <div className="panel flex-1 flex-col overflow-hidden">
            <div className="panel-header mb-0">
              <span className="panel-title">Active Stations</span>
              <Cpu size={16} color="var(--text-secondary)" />
            </div>
            <div className="overflow-y-auto pt-4 flex-col gap-2">
              {[
                { id: 'STN-01', name: 'Chassis Assembly', status: 'running', operator: 'A. Smith' },
                { id: 'STN-02', name: 'Wiring Harness', status: 'paused', operator: 'B. Johnson' },
                { id: 'STN-03', name: 'Sensor Integration', status: 'running', operator: 'C. Davis' },
                { id: 'STN-04', name: 'Propulsion Mount', status: 'error', operator: 'D. Wilson' },
                { id: 'STN-05', name: 'Final QA', status: 'idle', operator: 'Unassigned' },
              ].map((stn, i) => (
                <div key={i} className={`p-3 rounded border ${stn.id === 'STN-01' ? 'border-accent-primary bg-accent-primary/10' : 'border-subtle hover:bg-white/5'} cursor-pointer transition-colors`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="mono text-sm">{stn.id}</span>
                    <div className={`status-dot ${stn.status === 'running' ? 'success' : stn.status === 'paused' ? 'warning' : stn.status === 'error' ? 'danger' : ''}`} style={stn.status === 'idle' ? {backgroundColor: 'var(--text-tertiary)'} : {}}></div>
                  </div>
                  <div className="text-sm mb-1">{stn.name}</div>
                  <div className="text-xs text-tertiary">Op: {stn.operator}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Instructions */}
        <div className="col-span-9 flex flex-col gap-4 h-full">
          <div className="panel flex-1 flex flex-col">
            <div className="panel-header">
              <span className="panel-title">Work Instruction: Chassis Assembly (Step 4 of 12)</span>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1 bg-white/5 hover:bg-white/10 rounded text-xs mono text-warning">
                  <AlertCircle size={14} /> Report Anomaly
                </button>
              </div>
            </div>

            <div className="flex-1 flex gap-6">
              {/* Image / Diagram */}
              <div className="flex-1 border border-subtle rounded flex items-center justify-center bg-black relative overflow-hidden">
                 <div className="absolute top-4 left-4 text-xs mono text-tertiary">DIAGRAM 4.1.A</div>
                 {/* Wireframe chassis visualization */}
                 <div className="w-48 h-24 border-2 border-text-secondary relative animate-pulse">
                    <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-accent-primary/50 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-4 w-4 h-4 rounded-full border-2 border-accent-primary transform translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-4 w-4 h-4 rounded-full border-2 border-accent-primary transform translate-y-1/2"></div>
                 </div>
              </div>

              {/* Steps & Controls */}
              <div className="w-80 flex flex-col gap-4">
                <div className="text-lg">Mount Forward Sensor Bracket</div>
                <p className="text-secondary text-sm line-height-1.5">
                  Align the titanium bracket (PRT-102a) with the mounting holes on the forward chassis plate. Ensure the alignment pins are fully seated before applying torque.
                </p>
                
                <div className="bg-white/5 p-4 rounded border border-warning/30 mt-2">
                  <div className="text-warning text-xs mono mb-1 flex items-center gap-2"><AlertCircle size={12}/> CRITICAL TOLERANCE</div>
                  <div className="text-sm">Apply exactly 12Nm of torque using calibrated tool T-809. Over-torquing will cause micro-fractures in the carbon base.</div>
                </div>

                <div className="flex-1"></div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 p-3 border border-subtle rounded hover:bg-white/5 cursor-pointer">
                    <div className="w-4 h-4 rounded border border-success flex items-center justify-center bg-success/20">
                      <CheckSquare size={12} className="text-success" />
                    </div>
                    <span className="text-sm">Part Scanned (PRT-102a)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border border-accent-primary/50 rounded bg-accent-primary/10 cursor-pointer">
                    <div className="w-4 h-4 rounded border border-text-tertiary"></div>
                    <span className="text-sm">Torque Verified (12Nm)</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded flex items-center justify-center gap-2 transition-colors">
                    <PauseCircle size={18} />
                    <span className="mono text-xs">PAUSE WORK</span>
                  </button>
                  <button className="flex-1 py-3 bg-accent-primary hover:bg-accent-primary/80 text-black rounded flex items-center justify-center gap-2 transition-colors">
                    <PlayCircle size={18} />
                    <span className="mono text-xs font-bold">NEXT STEP</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MESView;
