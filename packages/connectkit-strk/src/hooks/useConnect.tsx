/**
 * This is a wrapper around wagmi's useConnect hook that adds some
 * additional functionality.
 */

// import {
//   type UseConnectParameters,
//   useConnect as wagmiUseConnect,
//   CreateConnectorFn,
//   Connector,
// } from 'wagmi';

import { useContext } from '../components/ConnectKit';
import { useLastConnector } from './useLastConnector';
import { useConnect as starknetUseConnect } from '@starknet-react/core';

// export function useConnect({ ...props }: UseConnectParameters = {}) {
export function useConnect({ ...props }: any = {}) {
  const context = useContext();

  // const { connect, connectAsync, connectors, ...rest } = wagmiUseConnect({
  const { connect, connectAsync, connectors, ...rest } = starknetUseConnect({
    ...props,
    mutation: {
      ...props.mutation,
      onError(err) {
        if (err.message) {
          if (err.message !== 'User rejected request') {
            context.log(err.message, err);
          }
        } else {
          context.log(`Could not connect.`, err);
        }
      },
    },
  });

  return {
    connect: ({
      connector,
      chainId,
      mutation,
    }: {
      // connector: CreateConnectorFn | Connector;
      connector: any;
      chainId?: number;
      // mutation?: UseConnectParameters['mutation'];
      mutation?: any;
    }) => {
      return connect(
        {
          connector,
          // chainId: chainId ?? context.options?.initialChainId,
        },
        // mutation
      );
    },
    connectAsync: async ({
      connector,
      chainId,
      mutation,
    }: {
      // connector: CreateConnectorFn | Connector;
      connector: any;
      chainId?: number;
      // mutation?: UseConnectParameters['mutation'];
      mutation?: any;
    }) => {
      return connectAsync(
        {
          connector,
          // chainId: chainId ?? context.options?.initialChainId,
        },
        // mutation
      );
    },
    connectors,
    ...rest,
  };
}
