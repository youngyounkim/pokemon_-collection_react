export const getId = (url: string | undefined) => {
    if (url) {
        return Number(url.split('/')[6]);
    } else {
        return NaN;
    }
};
