export const baseKey = {
    base: [{ scope: 'baseKey' }] as const,
    baseFactory: () => [{ ...baseKey.base[0], entity: 'baseKey' }]
};
