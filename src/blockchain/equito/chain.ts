import { arbitrumSepolia, avalancheFuji, blastSepolia, bscTestnet, gnosisChiado, mantleSepoliaTestnet, opBNBTestnet, polygonAmoy, scrollSepolia, sepolia, telosTestnet } from "viem/chains";
import { Address, type Chain as Definition } from "viem"

export const chains: Chain[] = [
    {
        chainSelector: 1001,
        name: "Ethereum Sepolia",
        img: 1027,
        definition: sepolia,
        pingPongContract: "0x0000000000000000000000006482220f77fC720b93846fA85D5fe3B58E0aC27a",
        tokenAddress:"0xd38E5c25935291fFD51C9d66C3B7384494bb099A"
    },
    {
        chainSelector: 1002,
        name: "BNB Smart Chain Testnet",
        img: 1839,
        definition: bscTestnet,
        pingPongContract: "0x00000000000000000000000013630b806086058EeAc26Af04c4528761e4DC389",
        tokenAddress:"0x07Df8f9deD9b8FE7B6E91c04F9B6cF20649631E9"
    },
    {
        chainSelector: 1003,
        name: "Polygon Amoy",
        img: 3890,
        definition: polygonAmoy,
        pingPongContract: "0x0000000000000000000000001450ac29c8E774bbd958A90Ae4a710E65D32820E",
        tokenAddress:'0xE1DC0d6ADfA2a98608026DD2422b972A271176e5'
    },
    {
        chainSelector: 1004,
        name: "Arbitrum Sepolia",
        img: 11841,
        definition: arbitrumSepolia,
        pingPongContract: "0x000000000000000000000000a061aa420a72d76120d4785eb46268121ea4cce7",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
    {
        chainSelector: 1005,
        name: "Avalanche Fuji",
        img: 5805,
        definition: avalancheFuji,
        pingPongContract: "0x0000000000000000000000000342964944eeEbdbece8479F588B598bC86c957d",
        tokenAddress:"0x3DdF9bEe6Ea8bC6C0C9a5cD2dEaC9e4dD0D7a5b0a"
    },
    {
        chainSelector: 1010,
        name: "Telos Testnet",
        img: 4660,
        definition: telosTestnet,
        pingPongContract: "0x0000000000000000000000009D1784D078C58FCC915Fe7C136A315fBdA44a725",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
    {
        chainSelector: 1018,
        name: "Blast Sepolia",
        img: 28480,
        definition: blastSepolia,
        pingPongContract: "0x000000000000000000000000d3A6A255997B1Ff75A236A52a543e192E4430417",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
    {
        chainSelector: 1019,
        name: "Gnosis Chiado",
        img: 1659,
        definition: gnosisChiado,
        pingPongContract: "0x0000000000000000000000008EDD33dab04FB96Bf90F28FBb12261653ea09aBC",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
    {
        chainSelector: 1020,
        name: "Scroll Sepolia",
        img: 26998,
        definition: scrollSepolia,
        pingPongContract: "0x00000000000000000000000042ca0D53de24Ba997C5C560ec8ba53A4aDc58081",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
    {
        chainSelector: 1021,
        name: "Mantle Sepolia",
        img: 27075,
        definition: mantleSepoliaTestnet,
        pingPongContract: "0x00000000000000000000000031AB9fd936d9Da02555045EFE8b05262661f04eF",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
    {
        chainSelector: 1022,
        name: "opBNB Testnet",
        img: 1839,
        definition: opBNBTestnet,
        pingPongContract: "0x00000000000000000000000031AB9fd936d9Da02555045EFE8b05262661f04eF",
        tokenAddress:"0x9D13C3A4E31330F5A122a158ED58679c7028D54F"
    },
];

export type Chain = {
    chainSelector: number;
    name: string;
    img: number;
    definition: Definition;
    pingPongContract: Address;
    tokenAddress: Address;
};

// export const NATIVE_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";