const prefix = styles => {
    const propertiesToPrefix = ['transform', 'transformOrigin', 'transition'];
    const prefix = 'Webkit';
    const prefixedStyles = {};
    const styleProperties = Object.keys(styles);
    for (let i = 0; i < styleProperties.length; i++) {
        const property = styleProperties[i];
        for (let i = 0; i < propertiesToPrefix.length; i++) {
            if (propertiesToPrefix[i] === property) {
                const prefixedProperty = prefix + property[0].toUpperCase() + property.slice(1);
                prefixedStyles[prefixedProperty] = styles[property];
            }
            prefixedStyles[property] = styles[property];
        }
    }
    return prefixedStyles;
};

export default prefix;
