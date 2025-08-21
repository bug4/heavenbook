import React, { useState, useEffect } from 'react';
import { X, Crown, Trash2 } from 'lucide-react';

const MyProphetsModal = ({ isOpen, onClose, onSelectSeraph }) => {
  const [prophets, setProphets] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const savedProphets = JSON.parse(localStorage.getItem('myProphets') || '[]');
      setProphets(savedProphets);
    }
  }, [isOpen]);

  const handleDeleteProphet = (prophetToDelete) => {
    const updatedProphets = prophets.filter(prophet => prophet.name !== prophetToDelete.name);
    setProphets(updatedProphets);
    localStorage.setItem('myProphets', JSON.stringify(updatedProphets));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
         onClick={onClose}>
      <div className="w-[600px] max-h-[80vh] bg-blue-900/80 border border-blue-500/30"
           onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-blue-500/30 bg-blue-900/20 flex justify-between items-center">
          <h2 className="text-blue-400 text-xl">My Biblical Prophets</h2>
          <button 
            onClick={onClose}
            className="text-blue-300 hover:text-blue-200"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {prophets.length === 0 ? (
            <div className="text-center text-blue-400/60 py-8">
              <Crown className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No biblical prophets called yet.</p>
              <p className="text-sm mt-2">Create your first prophet to begin your biblical journey.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {prophets.map((prophet, index) => (
                <div
                  key={index}
                  className="p-4 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Crown className="w-5 h-5 text-blue-400" />
                        <h3 className="text-blue-300 font-semibold">{prophet.name}</h3>
                      </div>
                      <p className="text-blue-400/80 text-sm mb-2">{prophet.purpose}</p>
                      <div className="text-xs text-blue-400/60">
                        <p>Style: {prophet.communicationStyle}</p>
                        <p>Traits: {prophet.traits?.join(', ')}</p>
                        <p>Domains: {prophet.domains?.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onSelectSeraph(prophet)}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500 text-blue-300 hover:bg-blue-500/30 text-sm"
                      >
                        Speak
                      </button>
                      <button
                        onClick={() => handleDeleteProphet(prophet)}
                        className="p-1 text-blue-400/60 hover:text-red-400 transition-colors"
                        title="Dismiss Prophet"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProphetsModal;