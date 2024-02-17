"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styles_1 = require("./styles");
const wagmi_1 = require("wagmi");
const ens_1 = require("viem/ens");
const styles_2 = require("../../../styles");
const ConnectKit_1 = require("../../ConnectKit");
const useIsMounted_1 = require("../../../hooks/useIsMounted");
const Avatar = ({ address, name, size = 96, radius = 96 }) => {
    const isMounted = (0, useIsMounted_1.default)();
    const context = (0, ConnectKit_1.useContext)();
    const imageRef = (0, react_1.useRef)(null);
    const [loaded, setLoaded] = (0, react_1.useState)(true);
    const { data: ensAddress } = (0, wagmi_1.useEnsAddress)({
        chainId: 1,
        name: name,
    });
    const { data: ensName } = (0, wagmi_1.useEnsName)({
        chainId: 1,
        address: address ?? ensAddress ?? undefined,
    });
    const { data: ensAvatar } = (0, wagmi_1.useEnsAvatar)({
        chainId: 1,
        name: (0, ens_1.normalize)(ensName ?? ''),
    });
    const ens = {
        address: ensAddress ?? address,
        name: ensName ?? name,
        avatar: ensAvatar ?? undefined,
    };
    (0, react_1.useEffect)(() => {
        if (!(imageRef.current &&
            imageRef.current.complete &&
            imageRef.current.naturalHeight !== 0)) {
            setLoaded(false);
        }
    }, [ensAvatar]);
    if (!isMounted)
        return <div style={{ width: size, height: size, borderRadius: radius }}/>;
    if (context.options?.customAvatar)
        return (<div style={{
                width: size,
                height: size,
                borderRadius: radius,
                overflow: 'hidden',
            }}>
        {context.options?.customAvatar({
                address: address ?? ens?.address,
                ensName: name ?? ens?.name,
                ensImage: ens?.avatar,
                size,
                radius,
            })}
      </div>);
    if (!ens.name || !ens.avatar)
        return (<styles_2.ResetContainer style={{ pointerEvents: 'none' }}>
        <styles_1.EnsAvatar $size={size} $seed={ens.address} $radius={radius}/>
      </styles_2.ResetContainer>);
    return (<styles_2.ResetContainer style={{ pointerEvents: 'none' }}>
      <styles_1.EnsAvatar $size={size} $seed={ens.address} $radius={radius}>
        <styles_1.ImageContainer ref={imageRef} src={ens.avatar} alt={ens.name} onLoad={() => setLoaded(true)} $loaded={loaded}/>
      </styles_1.EnsAvatar>
    </styles_2.ResetContainer>);
};
exports.default = Avatar;
//# sourceMappingURL=index.js.map