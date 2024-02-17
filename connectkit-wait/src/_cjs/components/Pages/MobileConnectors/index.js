"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("./styles");
const styles_2 = require("../../Common/Modal/styles");
const ConnectKit_1 = require("../../ConnectKit");
const useWalletConnectModal_1 = require("../../../hooks/useWalletConnectModal");
const CopyToClipboard_1 = require("../../Common/CopyToClipboard");
const useLocales_1 = require("../../../hooks/useLocales");
const Spinner_1 = require("../../Common/Spinner");
const ScrollArea_1 = require("../../Common/ScrollArea");
const web3_1 = require("../../contexts/web3");
const useWallets_1 = require("../../../wallets/useWallets");
const walletConfigs_1 = require("../../../wallets/walletConfigs");
const MoreIcon = (<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 42V19M19 30.5H42" stroke="var(--ck-body-color-muted)" strokeWidth="3" strokeLinecap="round"/>
  </svg>);
const MobileConnectors = () => {
    const context = (0, ConnectKit_1.useContext)();
    const locales = (0, useLocales_1.default)();
    const { connect: { getUri }, } = (0, web3_1.useWeb3)();
    const wcUri = getUri();
    const { open: openW3M, isOpen: isOpenW3M } = (0, useWalletConnectModal_1.useWalletConnectModal)();
    const wallets = (0, useWallets_1.useWallets)();
    const walletsIdsToDisplay = Object.keys(walletConfigs_1.walletConfigs).filter((walletId) => {
        const wallet = walletConfigs_1.walletConfigs[walletId];
        if (wallets.find((w) => w.connector.id === walletId))
            return false;
        if (!wallet.getWalletConnectDeeplink)
            return false;
        return true;
    }) ?? [];
    const connectWallet = (wallet) => {
        const uri = wallet.getWalletConnectDeeplink?.(wcUri);
        if (uri)
            window.location.href = uri;
    };
    return (<styles_2.PageContent style={{ width: 312 }}>
      <styles_1.Container>
        <styles_2.ModalContent style={{ paddingBottom: 0 }}>
          <ScrollArea_1.ScrollArea height={340}>
            <styles_1.WalletList $disabled={!wcUri}>
              {walletsIdsToDisplay
            .sort((a, b) => {
            const walletA = walletConfigs_1.walletConfigs[a];
            const walletB = walletConfigs_1.walletConfigs[b];
            const nameA = walletA.name ?? walletA.shortName ?? a;
            const nameB = walletB.name ?? walletB.shortName ?? b;
            return nameA.localeCompare(nameB);
        })
            .filter((walletId) => !(walletId === 'coinbaseWallet' ||
            walletId === 'com.coinbase.wallet'))
            .map((walletId, i) => {
            const wallet = walletConfigs_1.walletConfigs[walletId];
            const { name, shortName, iconConnector, icon } = wallet;
            return (<styles_1.WalletItem key={i} onClick={() => connectWallet(wallet)} style={{
                    animationDelay: `${i * 50}ms`,
                }}>
                      <styles_1.WalletIcon $outline={true}>
                        {iconConnector ?? icon}
                      </styles_1.WalletIcon>
                      <styles_1.WalletLabel>{shortName ?? name}</styles_1.WalletLabel>
                    </styles_1.WalletItem>);
        })}
              <styles_1.WalletItem onClick={openW3M} $waiting={isOpenW3M}>
                <styles_1.WalletIcon style={{ background: 'var(--ck-body-background-secondary)' }}>
                  {isOpenW3M ? (<div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                      <div style={{
                width: '50%',
            }}>
                        <Spinner_1.Spinner />
                      </div>
                    </div>) : (MoreIcon)}
                </styles_1.WalletIcon>
                <styles_1.WalletLabel>{locales.more}</styles_1.WalletLabel>
              </styles_1.WalletItem>
            </styles_1.WalletList>
          </ScrollArea_1.ScrollArea>
        </styles_2.ModalContent>
        {context.options?.walletConnectCTA !== 'modal' && (<div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                paddingTop: 8,
            }}>
            <CopyToClipboard_1.default variant="button" string={wcUri}>
              {locales.copyToClipboard}
            </CopyToClipboard_1.default>
          </div>)}
      </styles_1.Container>
    </styles_2.PageContent>);
};
exports.default = MobileConnectors;
//# sourceMappingURL=index.js.map