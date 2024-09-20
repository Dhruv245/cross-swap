"use client";
import { PropsWithChildren, useMemo } from 'react';
import { useTheme } from 'next-themes';
import {
    RainbowKitProvider,
    darkTheme,
    lightTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import config from './config';
import { sepolia } from 'viem/chains';

const queryClient = new QueryClient();

const BlockChainProvider = ({ children }: PropsWithChildren) => {
    const { theme } = useTheme()
    const rainbowKitTheme = useMemo(() => theme === 'dark' ? darkTheme : lightTheme, [theme])
    return (
        <WagmiProvider config={config} >
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider initialChain={sepolia} theme={rainbowKitTheme()}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default BlockChainProvider