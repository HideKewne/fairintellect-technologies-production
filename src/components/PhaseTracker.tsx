import React from 'react';

interface Phase {
  id: number;
  name: string;
  color: string;
  emoji?: string;
}

interface PhaseTrackerProps {
  currentPhase: number;
}

const phases: Phase[] = [
  { id: 1, name: 'Transaction Acknowledged', color: 'red' },
  { id: 2, name: 'Picked up by the Team', color: 'yellow' },
  { id: 3, name: 'Conceptualizing', color: 'blue' },
  { id: 4, name: 'Building', color: 'amber', emoji: '🛠️' },
  { id: 5, name: 'Finalizing...', color: 'white' },
  { id: 6, name: 'Deployed!', color: 'green' },
];

const getColorClasses = (color: string, isActive: boolean) => {
  if (!isActive) {
    return 'bg-gray-800 border-gray-600';
  }

  const colorMap = {
    red: 'bg-red-500 border-red-400 shadow-red-500/50',
    yellow: 'bg-yellow-500 border-yellow-400 shadow-yellow-500/50',
    blue: 'bg-blue-900 border-blue-700 shadow-blue-500/50',
    amber: 'bg-amber-700 border-amber-600 shadow-amber-500/50',
    white: 'bg-white border-gray-300 shadow-white/50',
    green: 'bg-green-500 border-green-400 shadow-green-500/50',
  };

  return colorMap[color as keyof typeof colorMap] || 'bg-gray-500';
};

const PhaseTracker: React.FC<PhaseTrackerProps> = ({ currentPhase }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        {phases.map((phase) => {
          const isActive = phase.id === currentPhase;
          const isCompleted = phase.id < currentPhase;
          
          return (
            <div key={phase.id} className="flex items-center space-x-4">
              {/* Phase Circle */}
              <div
                className={`
                  w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300
                  ${getColorClasses(phase.color, isActive)}
                  ${isActive ? 'animate-pulse shadow-lg' : ''}
                  ${isCompleted ? 'bg-gray-600 border-gray-500' : ''}
                `}
              >
                {isCompleted && (
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Phase Name */}
              <div className="flex-1">
                <div
                  className={`
                    text-lg font-medium transition-colors duration-300
                    ${isActive ? 'text-cyan-400' : ''}
                    ${isCompleted ? 'text-gray-400' : ''}
                    ${!isActive && !isCompleted ? 'text-gray-300' : ''}
                  `}
                >
                  {phase.name} {phase.emoji}
                </div>
                {isActive && phase.id < 6 && (
                  <div className="text-sm text-cyan-300 mt-1 animate-pulse">
                    Currently in progress...
                  </div>
                )}
                {isActive && phase.id === 6 && (
                  <div className="text-sm text-green-400 mt-1">
                    Project complete!
                  </div>
                )}
                {isCompleted && (
                  <div className="text-sm text-green-400 mt-1">
                    Completed
                  </div>
                )}
              </div>

              {/* Connecting Line */}
              {phase.id < phases.length && (
                <div className="absolute left-4 mt-8 w-0.5 h-6 bg-gray-700"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhaseTracker;