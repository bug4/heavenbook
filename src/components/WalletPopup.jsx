import React from 'react';
import { X, LogOut } from 'lucide-react';

const WalletPopup = ({ walletAddress, onDisconnect, onClose }) => {
  return (
    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 w-80 bg-blue-900/30 backdrop-blur-md border border-blue-500/30">
      <div className="border-b border-blue-500/30 bg-blue-900/20 p-3 flex justify-between items-center">
        <div className="text-blue-400 text-sm font-semibold">Connected Wallet</div>
        <button onClick={onClose} className="text-blue-300 hover:text-blue-200">
          <X size={18} />
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="text-blue-300 text-sm break-all">
          {walletAddress}
        </div>

        <button
          onClick={onDisconnect}
          className="w-full p-2 border border-blue-500/30 bg-blue-500/10 
                     text-blue-400 hover:bg-blue-500/20 transition-colors 
                     flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          <span>Disconnect Wallet</span>
        </button>
      </div>
    </div>
  );
};

export default WalletPopup;