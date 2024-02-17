"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const react_1 = require("react");
const LocalStorage = require("../utils/localstorage");
const useLocalStorage = (storageKey) => {
    const [data, setData] = (0, react_1.useState)(LocalStorage.get(storageKey));
    const add = (item) => {
        const newItems = LocalStorage.add(storageKey, item);
        setData(newItems);
    };
    const update = (items) => {
        const newItems = LocalStorage.save(storageKey, items);
        setData(newItems);
    };
    const remove = (item) => {
        const newItems = LocalStorage.remove(storageKey, item);
        setData(newItems);
    };
    const clear = () => {
        const newItems = LocalStorage.save(storageKey, []);
        setData(newItems);
    };
    return { data, add, remove, update, clear };
};
exports.useLocalStorage = useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map