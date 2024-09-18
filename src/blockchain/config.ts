import {
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    holesky
} from 'wagmi/chains';

const config = getDefaultConfig({
    appName: 'Trading Platform',
    projectId: 'f1e14696910030d671edc4604f9b525c',
    chains: [
        mainnet, polygon, optimism, arbitrum, base,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia, holesky] : []),
    ],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;