import { Chain } from 'viem';

import { useStarknet } from '@starknet-react/core/src/context/starknet'


// TODO: Chain API should be made uniform
export function useChains() {
  const { chains } = useStarknet();
  const strkChains = chains ?? [];
  return strkChains.map((c) => c) as unknown as Chain[];
}
