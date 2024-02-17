"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.remove = exports.add = exports.get = exports.save = void 0;
const randomID = () => {
    return (Date.now().toString(36) +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15));
};
const save = (storageKey, data) => {
    try {
        localStorage.setItem(storageKey, JSON.stringify(data));
        return (0, exports.get)(storageKey);
    }
    catch (e) {
        return [];
    }
};
exports.save = save;
const get = (storageKey) => {
    try {
        const data = localStorage.getItem(storageKey);
        if (data)
            return JSON.parse(data);
        return [];
    }
    catch (e) {
        (0, exports.save)(storageKey, []);
        return [];
    }
};
exports.get = get;
const add = (storageKey, item) => {
    const data = (0, exports.get)(storageKey);
    const newData = [
        {
            ...item,
            ckStoreKey: randomID(),
            timestamp: new Date(),
        },
        ...data,
    ];
    (0, exports.save)(storageKey, newData);
    return (0, exports.get)(storageKey);
};
exports.add = add;
const remove = (storageKey, item) => {
    const data = (0, exports.get)(storageKey);
    const newData = data.filter((i) => i.ckStoreKey !== item.ckStoreKey);
    (0, exports.save)(storageKey, newData);
    return (0, exports.get)(storageKey);
};
exports.remove = remove;
const clear = (storageKey) => {
    (0, exports.save)(storageKey, []);
    return (0, exports.get)(storageKey);
};
exports.clear = clear;
//# sourceMappingURL=localstorage.js.map