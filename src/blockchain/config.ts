import {
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import { chains } from './equito/chain';
import { type Chain as Definitions } from 'viem';

const chainDefinitions = chains.map(chain => chain.definition) as [Definitions]

const config = getDefaultConfig({
    appName: 'Trading Platform',
    projectId: 'f1e14696910030d671edc4604f9b525c',
    chains: chainDefinitions,
    ssr: true, // If your dApp uses server side rendering (SSR)
});

export default config;