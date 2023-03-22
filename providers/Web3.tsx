import { useColorMode } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Chain, mainnet, 
  polygon, polygonMumbai, 
  optimism, optimismGoerli, arbitrum, goerli, 
  gnosis, zkSync, zkSyncTestnet } from 'wagmi/chains';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

interface Props {
   children: ReactNode
}

const hyperspaceChain: Chain = {
  id: 3141,
  name: 'Filecoin - Hyperspace testnet',
  network: 'Hyperspace',
  nativeCurrency: {
    decimals: 18,
    name: 'Hyperspace',
    symbol: 'tFIL',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.ankr.com/filecoin_testnet'],
    },
  },  
  blockExplorers: {
    default: { name: 'Glif', url: 'https://hyperspace.filfox.info/en' },
  },
  testnet: true,
};

const PolygonzkEVMTestnet: Chain = {
  id: 1442,
  name: 'Polygon zkEVM Testnet',
  network: 'zkEVM Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'zkEVM Testnet',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.public.zkevm-test.net'],
    },
  },  
  blockExplorers: {
    default: { name: 'zkEVM Testnet', url: 'https://explorer.public.zkevm-test.net' },
  },
  testnet: true,
};

const { chains, provider, webSocketProvider } = configureChains(
  [
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    goerli,
    gnosis,
    zkSync,
    zkSyncTestnet,
    hyperspaceChain,
    PolygonzkEVMTestnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY!,
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export function Web3Provider(props: Props) {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} >
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
