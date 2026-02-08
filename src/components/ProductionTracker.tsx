import React from 'react';
import { useCompany } from '../hooks/useCompany';
import PhaseTracker from './PhaseTracker';
import { Loader2 } from 'lucide-react';

interface ProductionTrackerProps {
  token: string | null;
}

const ProductionTracker: React.FC<ProductionTrackerProps> = ({ token }) => {
  const { company, loading, error } = useCompany(token);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Loading your project status...</p>
        </div>
      </div>
    );
  }

  if (error || !company) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Access Error</h2>
          <p className="text-gray-300">
            {error || 'Company not found. Please check your link and try again.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome, <span className="text-cyan-400">{company.company_name}</span>!
          </h1>
          <p className="text-xl text-gray-300">
            Track your project's production progress in real-time
          </p>
        </div>

        {/* Phase Tracker */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Production Status
          </h2>
          <PhaseTracker currentPhase={company.current_phase} />
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Last updated: {new Date(company.updated_at).toLocaleString()}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This page updates automatically when your project status changes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductionTracker;