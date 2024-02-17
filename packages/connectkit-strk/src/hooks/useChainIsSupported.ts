import { useStarknet } from '@starknet-react/core/src/context/starknet'

export function useChainIsSupported(chainId?: number): boolean | null {
  const { chains } = useStarknet();
  if (!chainId) return false;
  return chains.some((x) => Number(x.id) === chainId);
}
