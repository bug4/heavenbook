import React, { useState, useEffect } from 'react';
import { Crown, Coins, Users, CircleDollarSign, Copy, CheckCircle2 } from 'lucide-react';

const TokenStats = () => {
  const [tokenData, setTokenData] = useState({
    price: '$0.00',
    marketCap: '$0.00',
    supply: '1,000,000,000'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const isLaunched = false; // Set to true when launching
  const TOKEN_ADDRESS = isLaunched ? "BiBLETokenAddressWillGoHere123456789" : null;
  const TOTAL_SUPPLY = 1000000000; // 1 billion fixed supply

  useEffect(() => {
    const fetchTokenPrice = async () => {
      if (!TOKEN_ADDRESS) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-chain': 'Heaven.xyz',
            'X-API-KEY': '8efd1feabc5e4455b688310fc366aab9'
          }
        };

        const response = await fetch(`https://public-api.birdeye.so/defi/price?address=${TOKEN_ADDRESS}`, options);
        const data = await response.json();

        if (data.success && data.data) {
          const price = data.data.value;
          const marketCap = price * TOTAL_SUPPLY;

          setTokenData({
            price: `$${price.toFixed(6)}`,
            marketCap: `$${marketCap.toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
            supply: TOTAL_SUPPLY.toLocaleString()
          });
        }
      } catch (error) {
        console.error('Error fetching token price:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokenPrice();
    const interval = setInterval(fetchTokenPrice, 3000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [TOKEN_ADDRESS]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopyTooltip(true);
      setTimeout(() => setShowCopyTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-80 bg-blue-900/30 backdrop-blur-md border border-blue-500/30">
      {/* Header */}
      <div className="border-b border-blue-500/30 bg-blue-900/20 p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-semibold">$BIBLE Stats</span>
        </div>
      </div>

      {/* Stats Content */}
      <div className="p-3 space-y-4">
        {/* Contract Address */}
        <div className="p-2 bg-blue-500/5 border border-blue-500/20">
          <div className="text-blue-400 text-xs mb-2">Contract Address:</div>
          <div className="flex items-center justify-between">
            <span className="text-blue-300 text-xs">
              {TOKEN_ADDRESS ? `${TOKEN_ADDRESS.slice(0, 6)}...${TOKEN_ADDRESS.slice(-4)}` : 'Coming Soon'}
            </span>
            {TOKEN_ADDRESS && (
              <button 
                onClick={() => handleCopy(TOKEN_ADDRESS)}
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
              >
                {showCopyTooltip ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Price Stats */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs">Price</span>
            </div>
            <span className="text-blue-300 text-xs">
              {isLoading ? (
                <span className="animate-pulse">Loading...</span>
              ) : (
                tokenData.price
              )}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-xs">Supply</span>
            </div>
            <span className="text-blue-300 text-xs">{tokenData.supply}</span>
          </div>
        </div>

        {/* Market Cap */}
        <div className="p-2 bg-blue-500/5 border border-blue-500/20">
          <div className="text-blue-400 text-xs mb-1">Market Cap</div>
          <div className="text-blue-300 text-xs">
            {isLoading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              tokenData.marketCap
            )}
          </div>
        </div>

        {/* Network Info */}
        <div className="p-2 bg-blue-500/5 border border-blue-500/20">
          <div className="flex items-center justify-between">
            <span className="text-blue-400 text-xs">Network</span>
            <span className="text-blue-300 text-xs">Solana</span>
          </div>
        </div>

        {/* Token Description */}
        <div className="p-2 bg-blue-500/5 border border-blue-500/20">
          <div className="text-blue-400 text-xs mb-2">About $BIBLE</div>
          <p className="text-blue-300/90 text-xs leading-relaxed">
            The Holy Bible ($BIBLE) is the sacred token that unlocks biblical wisdom and God's Word. 
            It grants holders access to biblical revelations, AI prophets, and participation 
            in the governance of this sacred protocol that brings God's Word to the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenStats;