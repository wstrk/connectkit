"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConnectKit_1 = require("../../ConnectKit");
const styles_1 = require("./styles");
const web3_1 = require("../../contexts/web3");
const useIsMobile_1 = require("../../../hooks/useIsMobile");
const ScrollArea_1 = require("../../Common/ScrollArea");
const Alert_1 = require("../Alert");
const useWallets_1 = require("../../../wallets/useWallets");
const utils_1 = require("../../../utils");
const useLastConnector_1 = require("../../../hooks/useLastConnector");
const ConnectorList = () => {
    const context = (0, ConnectKit_1.useContext)();
    const isMobile = (0, useIsMobile_1.default)();
    const wallets = (0, useWallets_1.useWallets)();
    const { lastConnectorId } = (0, useLastConnector_1.useLastConnector)();
    const walletsToDisplay = context.options?.hideRecentBadge || lastConnectorId === 'walletConnect'
        ? wallets
        : [
            ...wallets.filter((wallet) => lastConnectorId === wallet.connector.id),
            ...wallets.filter((wallet) => lastConnectorId !== wallet.connector.id),
        ];
    return (<ScrollArea_1.ScrollArea mobileDirection={'horizontal'}>
      {walletsToDisplay.length === 0 && (<Alert_1.default error>No connectors found in ConnectKit config.</Alert_1.default>)}
      {walletsToDisplay.length > 0 && (<styles_1.ConnectorsContainer $mobile={isMobile} $totalResults={walletsToDisplay.length}>
          {walletsToDisplay.map((wallet) => (<ConnectorItem key={wallet.id} wallet={wallet} isRecent={wallet.id === lastConnectorId}/>))}
        </styles_1.ConnectorsContainer>)}
    </ScrollArea_1.ScrollArea>);
};
exports.default = ConnectorList;
const ConnectorItem = ({ wallet, isRecent, }) => {
    const { connect: { getUri }, } = (0, web3_1.useWeb3)();
    const uri = getUri();
    const isMobile = (0, useIsMobile_1.default)();
    const context = (0, ConnectKit_1.useContext)();
    let deeplink = !wallet.isInstalled && isMobile
        ? wallet.getWalletConnectDeeplink?.(uri ?? '')
        : undefined;
    const redirectToMoreWallets = isMobile && (0, utils_1.isWalletConnectConnector)(wallet.id);
    if (redirectToMoreWallets)
        deeplink = undefined;
    return (<styles_1.ConnectorButton type="button" as={deeplink ? 'a' : undefined} href={deeplink ? deeplink : undefined} disabled={context.route !== ConnectKit_1.routes.CONNECTORS} onClick={deeplink
            ? undefined
            : () => {
                if (redirectToMoreWallets) {
                    context.setRoute(ConnectKit_1.routes.MOBILECONNECTORS);
                }
                else {
                    context.setRoute(ConnectKit_1.routes.CONNECT);
                    context.setConnector({ id: wallet.id });
                }
            }}>
      <styles_1.ConnectorIcon data-small={wallet.iconShouldShrink} data-shape={wallet.iconShape}>
        {wallet.iconConnector ?? wallet.icon}
      </styles_1.ConnectorIcon>
      <styles_1.ConnectorLabel>
        {isMobile ? wallet.shortName ?? wallet.name : wallet.name}
        {!context.options?.hideRecentBadge && isRecent && (<styles_1.RecentlyUsedTag>
            <span>Recent</span>
          </styles_1.RecentlyUsedTag>)}
      </styles_1.ConnectorLabel>
    </styles_1.ConnectorButton>);
};
//# sourceMappingURL=index.js.map