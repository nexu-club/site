import React from 'react';
import { useWallet } from './useWallet';

const WalletConnector = () => {
  const { walletConnected, handleConnectWallet, handleDisconnectWallet, connectedWalletAddress } = useWallet();

  const truncateAddress = (address) => {
    if (!address) return '';
    const start = address.substring(0, 5); 
    const end = address.substring(address.length - 5); 
    return `${start}•••${end}`; 
  };

  return (
    <div>
      {!walletConnected && (
        <button
            onClick={handleConnectWallet}
            className='hover:bg-white hover:text-black border-2 border-white rounded-full py-2 px-4 text-lg'
        >
          Conectar
        </button>
      )}
      {walletConnected && (
        <button
            onClick={handleDisconnectWallet}
            className='hover:bg-white hover:text-black border-2 border-white rounded-full py-2 px-4 text-md'
        >
            {truncateAddress(connectedWalletAddress)}</button>
      )}
    </div>
  );
};

export default WalletConnector;
