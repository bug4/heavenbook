import React, { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-8 left-8 z-[100] animate-fade-in">
      <div className="bg-blue-900/30 backdrop-blur-md border border-blue-500/30 p-4 flex items-center gap-3">
        <AlertCircle className="text-blue-400" size={20} />
        <span className="text-blue-300">{message}</span>
      </div>
    </div>
  );
};

export default Alert;