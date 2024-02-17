"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletConfigs = void 0;
const logos_1 = require("../assets/logos");
const utils_1 = require("../utils");
exports.walletConfigs = {
    argent: {
        name: 'Argent',
        icon: <logos_1.default.Argent />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/argent',
            android: 'https://play.google.com/store/apps/details?id=im.argent.contractwalletclient',
            ios: 'https://apps.apple.com/app/argent/id1358741926',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://argent.link/app/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    'coinbaseWallet, com.coinbase.wallet, coinbaseWalletSDK': {
        name: 'Coinbase Wallet',
        shortName: 'Coinbase',
        icon: <logos_1.default.Coinbase background/>,
        iconShape: 'squircle',
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/coinbasewallet',
            website: 'https://www.coinbase.com/wallet/getting-started-extension',
            android: 'https://play.google.com/store/apps/details?id=org.toshi',
            ios: 'https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455',
            chrome: 'https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
        },
        getWalletConnectDeeplink: (uri) => {
            return `https://go.cb-w.com/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    'com.crypto.wallet': {
        name: 'Crypto.com',
        shortName: 'Crypto',
    },
    dawn: {
        name: 'Dawn Wallet',
        shortName: 'Dawn',
        downloadUrls: {
            download: 'https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782',
            website: 'https://www.dawnwallet.xyz/',
            ios: 'https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782',
        },
    },
    'co.family.wallet': {
        name: 'Family',
        shortName: 'Family',
        icon: <logos_1.default.Family />,
        iconShape: 'squircle',
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/family',
            website: 'https://family.co',
            ios: 'https://family.co/download',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `familywallet://wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    frame: {
        name: 'Frame',
        icon: <logos_1.default.Frame />,
        iconShouldShrink: true,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/frame',
            website: 'https://frame.sh',
            chrome: 'https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf',
            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/frame-extension',
            brave: 'https://chrome.google.com/webstore/detail/frame-companion/ldcoohedfbjoobcadoglnnmmfbdlmmhf',
        },
        getWalletConnectDeeplink: (uri) => uri,
    },
    frontier: {
        name: 'Frontier Wallet',
        shortName: 'Frontier',
        icon: <logos_1.default.Frontier />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/frontier',
            ios: 'https://apps.apple.com/app/frontier-crypto-defi-wallet/id1482380988',
            android: 'https://play.google.com/store/apps/details?id=com.frontierwallet',
            website: 'https://frontier.xyz/',
            chrome: 'https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)() ? uri : `frontier://wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    injected: {
        name: 'Browser Wallet',
        shortName: 'Browser',
        icon: <logos_1.default.Injected />,
    },
    'metaMask, metaMask-io, io.metamask, io.metamask.mobile': {
        name: 'MetaMask',
        icon: <logos_1.default.MetaMask />,
        iconConnector: <logos_1.default.MetaMask />,
        iconShouldShrink: true,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/metamask',
            website: 'https://metamask.io/download/',
            android: 'https://play.google.com/store/apps/details?id=io.metamask',
            ios: 'https://apps.apple.com/app/metamask/id1438144202',
            chrome: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
            firefox: 'https://addons.mozilla.org/firefox/addon/ether-metamask/',
            brave: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
            edge: 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://metamask.app.link/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    'app.phantom': {
        name: 'Phantom',
        iconShape: 'squircle',
    },
    'me.rainbow': {
        name: 'Rainbow Wallet',
        shortName: 'Rainbow',
        icon: <logos_1.default.Rainbow />,
        iconShape: 'squircle',
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/rainbow',
            website: 'https://rainbow.me/?utm_source=connectkit',
            android: 'https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Dconnectkit&utm_source=connectkit',
            ios: 'https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021?pt=119997837&ct=connectkit&mt=8',
            chrome: 'https://rainbow.me/extension?utm_source=connectkit',
            edge: 'https://rainbow.me/extension?utm_source=connectkit',
            brave: 'https://rainbow.me/extension?utm_source=connectkit',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://rnbwapp.com/wc?uri=${encodeURIComponent(uri)}&connector=connectkit`;
        },
    },
    'io.rabby': {
        name: 'Rabby Wallet',
        shortName: 'Rabby',
        downloadUrls: {
            website: 'https://rabby.io',
            chrome: 'https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch',
        },
    },
    safe: {
        name: 'Safe',
        icon: <logos_1.default.Safe />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/safe',
            website: 'https://safe.global/',
            ios: 'https://apps.apple.com/app/id1515759131',
            android: 'https://play.google.com/store/apps/details?id=io.gnosis.safe',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://gnosis-safe.io/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    'xyz.talisman': {
        name: 'Talisman',
        shortName: 'Talisman',
        iconShape: 'squircle',
        downloadUrls: {
            download: 'https://talisman.xyz/download',
            website: 'https://talisman.xyz',
            chrome: 'https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld',
            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/',
        },
    },
    'com.trustwallet.app': {
        name: 'Trust Wallet',
        shortName: 'Trust',
        icon: <logos_1.default.Trust />,
        iconShouldShrink: true,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/trust',
            android: 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp',
            ios: 'https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409',
        },
        getWalletConnectDeeplink(uri) {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://link.trustwallet.com/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    infinityWallet: {
        name: 'Infinity Wallet',
        icon: <logos_1.default.InfinityWallet />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/infinityWallet',
            website: 'https://infinitywallet.io/download',
            chrome: 'https://infinitywallet.io/download',
            firefox: 'https://infinitywallet.io/download',
            brave: 'https://infinitywallet.io/download',
            edge: 'https://infinitywallet.io/download',
        },
    },
    imToken: {
        name: 'imToken',
        icon: <logos_1.default.ImToken />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/imToken',
            android: 'https://play.google.com/store/apps/details?id=im.token.app',
            ios: 'https://itunes.apple.com/us/app/imtoken2/id1384798940',
        },
        getWalletConnectDeeplink: (uri) => {
            return `imtokenv2://wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    unstoppable: {
        name: 'Unstoppable',
        icon: <logos_1.default.Unstoppable />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/unstoppable',
            ios: 'https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907',
            android: 'https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://unstoppable.money/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    onto: {
        name: 'ONTO',
        icon: <logos_1.default.ONTO />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/onto',
            ios: 'https://apps.apple.com/app/onto-an-ontology-dapp/id1436009823',
            android: 'https://play.google.com/store/apps/details?id=com.github.ontio.onto',
            website: 'https://onto.app/en/download/',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://onto.app/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    steak: {
        name: 'Steak',
        icon: <logos_1.default.Steak />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/steak',
            android: 'https://play.google.com/store/apps/details?id=fi.steakwallet.app',
            ios: 'https://apps.apple.com/app/steakwallet/id1569375204',
            website: 'https://steakwallet.fi/download',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://links.steakwallet.fi/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    ledger: {
        name: 'Ledger Live',
        shortName: 'Ledger',
        icon: <logos_1.default.Ledger />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/ledger',
            website: 'https://www.ledger.com/ledger-live/download#download-device-2',
            android: 'https://play.google.com/store/apps/details?id=com.ledger.live',
            ios: 'https://apps.apple.com/app/ledger-live-web3-wallet/id1361671700',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `ledgerlive://wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    zerion: {
        name: 'Zerion',
        icon: <logos_1.default.Zerion />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/zerion',
            ios: 'https://apps.apple.com/app/apple-store/id1456732565',
            android: 'https://play.google.com/store/apps/details?id=io.zerion.android',
            website: 'https://zerion.io/',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://app.zerion.io/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    slope: {
        name: 'Slope',
        icon: <logos_1.default.Slope />,
        downloadUrls: {
            download: 'https://connect.family.co/v0/download/slope',
            ios: 'https://apps.apple.com/app/slope-wallet/id1574624530',
            android: 'https://play.google.com/store/apps/details?id=com.wd.wallet',
            chrome: 'https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo',
            website: 'https://slope.finance/',
        },
        getWalletConnectDeeplink: (uri) => {
            return (0, utils_1.isAndroid)()
                ? uri
                : `https://slope.finance/app/wc?uri=${encodeURIComponent(uri)}`;
        },
    },
    tokenPocket: {
        name: 'TokenPocket Wallet',
        icon: <logos_1.default.TokenPocket />,
        downloadUrls: {
            website: 'https://www.tokenpocket.pro/en/download/app',
            download: 'https://www.tokenpocket.pro/en/download/app',
            android: 'https://play.google.com/store/apps/details?id=vip.mytokenpocket',
            ios: 'https://apps.apple.com/us/app/tp-global-wallet/id6444625622',
            chrome: 'https://chrome.google.com/webstore/detail/tokenpocket/mfgccjchihfkkindfppnaooecgfneiii',
        },
    },
    talisman: {
        name: 'Talisman',
        icon: <logos_1.default.Talisman />,
        downloadUrls: {
            download: 'https://talisman.xyz/download',
            website: 'https://talisman.xyz',
            chrome: 'https://chrome.google.com/webstore/detail/talisman-polkadot-wallet/fijngjgcjhjmmpcmkeiomlglpeiijkld',
            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/talisman-wallet-extension/',
        },
    },
    walletConnect: {
        name: 'Other Wallets',
        shortName: 'Other',
        icon: <logos_1.default.WalletConnect background/>,
        iconConnector: <logos_1.default.OtherWallets />,
        iconShape: 'square',
        getWalletConnectDeeplink: (uri) => uri,
    },
};
//# sourceMappingURL=walletConfigs.js.map