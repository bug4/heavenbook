import React from 'react';
import { Crown, MessageSquare } from 'lucide-react';

const BasicInfo = ({ data, updateData, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-blue-400 mb-2">Prophet Name</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className="w-full bg-black/30 border border-blue-500/30 p-2 text-white focus:outline-none focus:border-blue-500"
            placeholder="Enter prophet name..."
            required
          />
        </div>

        <div>
          <label className="block text-blue-400 mb-2">Sacred Purpose</label>
          <textarea
            value={data.purpose}
            onChange={(e) => updateData({ purpose: e.target.value })}
            className="w-full bg-black/30 border border-blue-500/30 p-2 text-white focus:outline-none focus:border-blue-500 h-24"
            placeholder="Describe the sacred purpose of your prophet..."
            required
          />
        </div>

        <div>
          <label className="block text-blue-400 mb-2">Biblical Communication Style</label>
          <div className="grid grid-cols-3 gap-4">
            {['Formal', 'Balanced', 'Gentle'].map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => updateData({ communicationStyle: style.toLowerCase() })}
                className={`p-3 border ${
                  data.communicationStyle === style.toLowerCase()
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-blue-500/30 hover:border-blue-500/60'
                } text-blue-300`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500/20 border border-blue-500 text-blue-300 hover:bg-blue-500/30"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default BasicInfo;