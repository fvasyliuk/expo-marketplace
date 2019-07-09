export const getHitSlop = (hitSlop) => {
    if (typeof hitSlop === 'undefined') {
        return undefined;
    }

    return typeof hitSlop === 'object'
        ? hitSlop
        : {
            top: hitSlop, 
            bottom: hitSlop, 
            right: hitSlop, 
            left: hitSlop,
        };
};