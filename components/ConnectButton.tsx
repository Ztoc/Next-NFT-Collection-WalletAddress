'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import NetworkSwitcher from './SwtichButton';
import { WalletOptions } from './wallet-options';

const ConnectWallet = () => {
  const { isConnected } = useAccount();
  if (!isConnected) return <WalletOptions />;
};

const ConnectButton: React.FC = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const [mounted, setMounted] = useState<boolean>(false);
  const [showConnectWallet, setShowConnectWallet] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    setShowConnectWallet(false);
  }, [address]);

  const abbreviatedAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  if (!mounted) return null;

  const renderConnectedButton = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="text-xl border border-white rounded-[12px] hover:bg-blue hover:text-white"
        >
          {abbreviatedAddress}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-none rounded-[5px] text-white">
        <DropdownMenuItem
          onClick={() => disconnect()}
          className="cursor-pointer"
        >
          Disconnect
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NetworkSwitcher />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderConnectButton = () => (
    <Button
      onClick={() => setShowConnectWallet(true)}
      className="text-xl border border-white rounded-[12px] hover:bg-blue hover:text-white"
    >
      Connect
    </Button>
  );

  return (
    <>
      {address ? renderConnectedButton() : renderConnectButton()}
      {showConnectWallet && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <ConnectWallet />
        </div>
      )}
    </>
  );
};

export default ConnectButton;
