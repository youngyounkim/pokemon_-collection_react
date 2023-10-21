export const setStorageData = (key: string, data: string) => {
    return typeof window !== 'undefined' ? localStorage.setItem(key, data) : null;
};

export const getStorageData = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
};

export const clearStorageData = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.removeItem(key) : null;
};
