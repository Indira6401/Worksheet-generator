import type { Metadata } from 'next';
import './globals.css';
import { WorksheetProvider } from '@/context/WorksheetContext';

export const metadata: Metadata = {
  title: {
    default: 'SheetGenie',
    template: '%s | SheetGenie',
  },
  description: 'Generate curriculum-aligned worksheets for K-12 students in seconds using AI.',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">SheetGenie</span>
            <span className="text-xs text-gray-400">AI worksheet generator</span>
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
