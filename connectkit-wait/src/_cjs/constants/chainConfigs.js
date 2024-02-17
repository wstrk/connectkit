"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainConfigs = void 0;
const chains_1 = require("../assets/chains");
exports.chainConfigs = [
    {
        id: 1,
        name: 'Ethereum',
        logo: <chains_1.default.Ethereum />,
        rpcUrls: {
            alchemy: {
                http: ['https://eth-mainnet.g.alchemy.com/v2'],
                webSocket: ['wss://eth-mainnet.g.alchemy.com/v2'],
            },
            infura: {
                http: ['https://mainnet.infura.io/v3'],
                webSocket: ['wss://mainnet.infura.io/ws/v3'],
            },
        },
    },
    {
        id: 3,
        name: 'Rinkeby',
        logo: <chains_1.default.Ethereum testnet/>,
        rpcUrls: {},
    },
    {
        id: 4,
        name: 'Ropsten',
        logo: <chains_1.default.Ethereum testnet/>,
    },
    {
        id: 5,
        name: 'Görli',
        logo: <chains_1.default.Ethereum testnet/>,
    },
    {
        id: 42,
        name: 'Kovan',
        logo: <chains_1.default.Ethereum testnet/>,
    },
    {
        id: 10,
        name: 'Optimism',
        logo: <chains_1.default.Optimism />,
    },
    {
        id: 69,
        name: 'Optimism Kovan',
        logo: <chains_1.default.Optimism testnet/>,
    },
    {
        id: 420,
        name: 'Optimism Goerli',
        logo: <chains_1.default.Optimism testnet/>,
    },
    {
        id: 137,
        name: 'Polygon',
        logo: <chains_1.default.Polygon />,
    },
    {
        id: 80001,
        name: 'Polygon Mumbai',
        logo: <chains_1.default.Polygon testnet/>,
    },
    {
        id: 31337,
        name: 'Hardhat',
        logo: <chains_1.default.Ethereum testnet/>,
    },
    {
        id: 1337,
        name: 'Localhost',
        logo: <chains_1.default.Ethereum testnet/>,
    },
    {
        id: 42161,
        name: 'Arbitrum',
        logo: <chains_1.default.Arbitrum />,
        rpcUrls: {
            alchemy: {
                http: ['https://arb-mainnet.g.alchemy.com/v2'],
                webSocket: ['wss://arb-mainnet.g.alchemy.com/v2'],
            },
            infura: {
                http: ['https://arbitrum-mainnet.infura.io/v3'],
                webSocket: ['wss://arbitrum-mainnet.infura.io/ws/v3'],
            },
        },
    },
    {
        id: 421611,
        name: 'Arbitrum Rinkeby',
        logo: <chains_1.default.Arbitrum testnet/>,
    },
    {
        id: 421613,
        name: 'Arbitrum Goerli',
        logo: <chains_1.default.Arbitrum testnet/>,
        rpcUrls: {
            alchemy: {
                http: ['https://arb-goerli.g.alchemy.com/v2'],
                webSocket: ['wss://arb-goerli.g.alchemy.com/v2'],
            },
            infura: {
                http: ['https://arbitrum-goerli.infura.io/v3'],
                webSocket: ['wss://arbitrum-goerli.infura.io/ws/v3'],
            },
        },
    },
    {
        id: 40,
        name: 'Telos',
        logo: <chains_1.default.Telos />,
    },
    {
        id: 41,
        name: 'Telos Testnet',
        logo: <chains_1.default.Telos testnet/>,
    },
    {
        id: 1313161554,
        name: 'Aurora',
        logo: <chains_1.default.Aurora />,
    },
    {
        id: 1313161555,
        name: 'Aurora Testnet',
        logo: <chains_1.default.Aurora testnet/>,
    },
    {
        id: 43114,
        name: 'Avalanche',
        logo: <chains_1.default.Avalanche />,
    },
    {
        id: 43113,
        name: 'Avalanche Fuji',
        logo: <chains_1.default.Avalanche testnet/>,
    },
    {
        id: 31337,
        name: 'Foundry',
        logo: <chains_1.default.Foundry testnet/>,
    },
    {
        id: 100,
        name: 'Gnosis',
        logo: <chains_1.default.Gnosis />,
    },
    {
        id: 9001,
        name: 'Evmos',
        logo: <chains_1.default.Evmos />,
    },
    {
        id: 9000,
        name: 'Evmos Testnet',
        logo: <chains_1.default.Evmos testnet/>,
    },
    {
        id: 56,
        name: 'BNB Smart Chain',
        logo: <chains_1.default.BinanceSmartChain />,
    },
    {
        id: 97,
        name: 'Binance Smart Chain Testnet',
        logo: <chains_1.default.BinanceSmartChain testnet/>,
    },
    {
        id: 11155111,
        name: 'Sepolia',
        logo: <chains_1.default.Sepolia />,
    },
    {
        id: 841,
        name: 'Taraxa',
        logo: <chains_1.default.Taraxa />,
    },
    {
        id: 842,
        name: 'Taraxa Testnet',
        logo: <chains_1.default.Taraxa testnet/>,
    },
    {
        id: 324,
        name: 'zkSync',
        logo: <chains_1.default.zkSync />,
    },
    {
        id: 280,
        name: 'zkSync Testnet',
        logo: <chains_1.default.zkSync testnet/>,
    },
    {
        id: 42220,
        name: 'Celo',
        logo: <chains_1.default.Celo />,
    },
    {
        id: 44787,
        name: 'Celo Alfajores',
        logo: <chains_1.default.Celo testnet/>,
    },
    {
        id: 7700,
        name: 'Canto',
        logo: <chains_1.default.Canto />,
    },
    {
        id: 250,
        name: 'Fantom',
        logo: <chains_1.default.Fantom />,
    },
    {
        id: 4002,
        name: 'Fantom Testnet',
        logo: <chains_1.default.Fantom testnet/>,
    },
    {
        id: 14,
        name: 'Flare',
        logo: <chains_1.default.Flare />,
    },
    {
        id: 114,
        name: 'Coston2',
        logo: <chains_1.default.Flare />,
    },
    {
        id: 314,
        name: 'Filecoin',
        logo: <chains_1.default.Filecoin />,
    },
    {
        id: 3141,
        name: 'Filecoin Hyperspace',
        logo: <chains_1.default.Filecoin testnet/>,
    },
    {
        id: 314159,
        name: 'Filecoin Calibration',
        logo: <chains_1.default.Filecoin testnet/>,
    },
    {
        id: 1088,
        name: 'Metis',
        logo: <chains_1.default.Metis />,
    },
    {
        id: 599,
        name: 'Metis Goerli',
        logo: <chains_1.default.Metis testnet/>,
    },
    {
        id: 4689,
        name: 'IoTeX',
        logo: <chains_1.default.IoTeX />,
    },
    {
        id: 4690,
        name: 'IoTeX Testnet',
        logo: <chains_1.default.IoTeX testnet/>,
    },
];
//# sourceMappingURL=chainConfigs.js.map