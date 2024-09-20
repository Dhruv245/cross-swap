import {
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    sepolia,
    polygonAmoy,
    avalancheFuji,
    gnosis,
    telosTestnet,
    blastSepolia,
    opBNBTestnet,
    mantleSepoliaTestnet,
    scrollSepolia
} from 'wagmi/chains';

const config = getDefaultConfig({
    appName: 'Trading Platform',
    projectId: 'f1e14696910030d671edc4604f9b525c', 
    chains: [sepolia, polygonAmoy, avalancheFuji, gnosis, telosTestnet, blastSepolia, opBNBTestnet, mantleSepoliaTestnet, scrollSepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;