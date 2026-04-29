'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Worksheet, WorksheetConfig } from '@/types/worksheet';

interface WorksheetContextType {
  worksheet: Worksheet | null;
  config: WorksheetConfig | null;
  setWorksheet: (worksheet: Worksheet, config: WorksheetConfig) => void;
  clearWorksheet: () => void;
}

const WorksheetContext = createContext<WorksheetContextType | null>(null);

export function WorksheetProvider({ children }: { children: ReactNode }) {
  const [worksheet, setWorksheetState] = useState<Worksheet | null>(null);
  const [config, setConfig] = useState<WorksheetConfig | null>(null);

  function setWorksheet(w: Worksheet, c: WorksheetConfig) {
    setWorksheetState(w);
    setConfig(c);
  }

  function clearWorksheet() {
    setWorksheetState(null);
    setConfig(null);
  }

  return (
    <WorksheetContext.Provider value={{ worksheet, config, setWorksheet, clearWorksheet }}>
      {children}
    </WorksheetContext.Provider>
  );
}

export function useWorksheet() {
  const ctx = useContext(WorksheetContext);
  if (!ctx) throw new Error('useWorksheet must be used within WorksheetProvider');
  return ctx;
}
