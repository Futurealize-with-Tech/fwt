export const returnRegion = (kind) => {
    switch (kind) {
        case 'tokyo':
            return {name: 'Tokyo', color: 'var(--primary-red)'};
        case 'kansai':
            return {name: 'Kansai', color: 'var(--primary-blue)'};
        case 'tokai':
            return {name: 'Tokai', color: 'var(--primary-orange)'};
        default:
            return {name: '?', color: 'var(--primary-gray)'};
    }
}
