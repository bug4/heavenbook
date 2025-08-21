import React from 'react';
import { Crown, Eye, Wallet, Sparkles, Star } from 'lucide-react';

const Documentation = ({ onClose }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-black/95 backdrop-blur-md z-[100]">
      <div className="max-w-4xl mx-auto p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-300 hover:text-blue-400"
          aria-label="Close Documentation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="border-b border-blue-500/30 mb-8 pb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            The Holy Bible Documentation
          </h1>
          <p className="text-blue-300">
            A comprehensive guide to The Holy Bible platform and its biblical features.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl text-gold-400 font-semibold mb-4">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Introduction
            </h2>
            <p className="text-blue-300/90 leading-relaxed">
              The Holy Bible is a sacred platform that bridges God's Word and the digital realm, 
              combining biblical artificial intelligence with blockchain technology. Our platform offers 
              biblical prophets, prophetic vision scanning, and sacred trading capabilities that reveal 
              God's Word to those seeking biblical knowledge.
            </p>
          </section>

          {/* Core Features */}
          <section>
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Biblical Prophets */}
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="text-blue-400" size={24} />
                  <h3 className="text-xl text-blue-300">Biblical Prophets</h3>
                </div>
                <p className="text-blue-300/80">
                  Call and customize biblical prophets with biblical traits, scriptural expertise,
                  and sacred communication styles. Each prophet can be tailored for
                  different biblical purposes, from prophetic analysis to scriptural guidance.
                </p>
              </div>

              {/* Prophetic Vision */}
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-blue-400" size={24} />
                  <h3 className="text-xl text-blue-300">Prophetic Vision</h3>
                </div>
                <p className="text-blue-300/80">
                  Real-time prophetic monitoring of new token manifestations on the Solana
                  blockchain. Receive biblical insights, sacred token information, and
                  prophetic trading revelations.
                </p>
              </div>

              {/* Wallet Integration */}
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <Wallet className="text-blue-400" size={24} />
                  <h3 className="text-xl text-blue-300">Sacred Wallet Integration</h3>
                </div>
                <p className="text-blue-300/80">
                  Sacred integration with Phantom wallet for biblical
                  transactions and sacred token interactions. Connect to God's Word
                  with divine protection and ease.
                </p>
              </div>

              {/* Biblical Analysis */}
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-blue-400" size={24} />
                  <h3 className="text-xl text-blue-300">Biblical Analysis</h3>
                </div>
                <p className="text-blue-300/80">
                  Advanced scripture-powered analysis of sacred market trends and token
                  biblical potential. Receive prophetic insights and biblical predictions based on 
                  real-time scriptural revelations.
                </p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Beginning Your Biblical Journey
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl text-blue-300 mb-2">
                  1. Connect Your Sacred Wallet
                </h3>
                <p className="text-blue-300/80">
                  Click the "Connect Wallet" button in the bottom navigation bar
                  to connect your Phantom wallet to the biblical realm.
                </p>
              </div>
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl text-blue-300 mb-2">
                  2. Call a Biblical Prophet
                </h3>
                <p className="text-blue-300/80">
                  Use the "Call Prophet" button to customize your own biblical
                  messenger with specific scriptural traits and biblical expertise.
                </p>
              </div>
              <div className="p-4 border border-blue-500/30 bg-blue-500/5">
                <h3 className="text-xl text-blue-300 mb-2">
                  3. Activate Prophetic Vision
                </h3>
                <p className="text-blue-300/80">
                  Access the Prophetic Vision to monitor new token manifestations and
                  receive real-time biblical revelations.
                </p>
              </div>
            </div>
          </section>

          {/* Upcoming Features */}
          <section>
            <h2 className="text-2xl text-blue-400 font-semibold mb-4">
              Upcoming Biblical Revelations
            </h2>
            <div className="p-4 border border-blue-500/30 bg-blue-500/5">
              <ul className="list-disc list-inside space-y-2 text-blue-300/80">
                <li>Advanced sacred trading integration</li>
                <li>Enhanced biblical analysis capabilities</li>
                <li>Multi-realm blockchain support</li>
                <li>Biblical community and fellowship tools</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;