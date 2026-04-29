import type { Metadata } from 'next';
import './globals.css';
import { WorksheetProvider } from '@/context/WorksheetContext';

export const metadata: Metadata = {
  title: 'SheetGenie',
  description: 'AI-powered worksheet generator for K-12 students',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">SheetGenie</span>
            <span className="text-sm text-gray-500 hidden sm:block">AI Worksheet Generator</span>
          </div>
        </header>

        <main className="flex-1">
          <WorksheetProvider>{children}</WorksheetProvider>
        </main>

        <footer className="bg-white border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-400">
          SheetGenie — AI-powered worksheets for every classroom
        </footer>
      </body>
    </html>
  );
}
