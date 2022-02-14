module.exports = (targets) => {
    //Wrap the useProductFullDetail talon with this extension
    const peregrineTargets = targets.of("@magento/peregrine");
    const talonsTarget = peregrineTargets.talons;

    talonsTarget.tap((talonWrapperConfig)=>{
        talonWrapperConfig.ProductFullDetail.useProductFullDetail.wrapWith(
            "@extensions/fullProductDetails"
        )
    })
    // Set the buildpack features required by this extension
    const builtins = targets.of("@magento/pwa-buildpack");
    builtins.specialFeatures.tap((featuresByModule) => {
        featuresByModule["@extensions/fullProductDetails"] = {
            // Wrapper modules must be ES modules
            esModules: true,
        }
    })
}