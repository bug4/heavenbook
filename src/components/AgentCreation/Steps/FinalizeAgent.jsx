import React from 'react';
import { Crown } from 'lucide-react';

const FinalizeProphet = ({ data, onBack, onFinish }) => {
  const handleCreateProphet = () => {
    // Create system message
    const systemMessage = `You are ${data.name}, a biblical prophet from The Holy Bible with the following characteristics:
    Sacred Purpose: ${data.purpose}
    Biblical Communication Style: ${data.communicationStyle}
    Biblical Traits: ${data.traits.join(', ')}
    Biblical Domains: ${data.domains.join(', ')}
    You are a messenger of God, revealing biblical wisdom and God's Word to those who seek divine knowledge.`;

    // Create full prophet data
    const prophetWithSystem = {
      ...data,
      systemMessage
    };

    // Call the onFinish callback with the created prophet
    onFinish(prophetWithSystem);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-blue-400 text-xl mb-4">Review Your Biblical Prophet</h3>

        <div className="bg-blue-900/30 border border-blue-500/30 p-4 space-y-4">
          <div>
            <h4 className="text-blue-400 mb-2">Biblical Information</h4>
            <p className="text-blue-300">Name: {data.name}</p>
            <p className="text-blue-300">Sacred Purpose: {data.purpose}</p>
            <p className="text-blue-300">Biblical Style: {data.communicationStyle}</p>
          </div>

          <div>
            <h4 className="text-blue-400 mb-2">Biblical Nature</h4>
            <p className="text-blue-300">Biblical Traits: {data.traits.join(', ')}</p>
            <p className="text-blue-300">Biblical Tone: {data.tone}</p>
          </div>

          <div>
            <h4 className="text-blue-400 mb-2">Biblical Expertise</h4>
            <p className="text-blue-300">Biblical Domains: {data.domains.join(', ')}</p>
            <p className="text-blue-300">
              Sacred Specializations: {data.specializations.join(', ')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2 border border-blue-500/30 text-blue-300 hover:border-blue-500/60"
        >
          Back
        </button>
        <button
          onClick={handleCreateProphet}
          className="px-6 py-2 bg-blue-500/20 border border-blue-500 text-blue-300 hover:bg-blue-500/30 flex items-center gap-2"
        >
          <span>Call Prophet</span>
          <Crown size={18} />
        </button>
      </div>
    </div>
  );
};

export default FinalizeProphet;