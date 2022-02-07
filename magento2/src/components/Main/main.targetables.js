const TargetableReactComponent = require('@magento/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js')
/**
 *  @param component {TargetableReactComponent}
 */
const interceptComponent = (component) => {
    component.addImport('import ComingSoon from "@mumtaz/hello-world/src/RootComponents/coming-soon.js"');
    component.insertAfterJSX('div', '<ComingSoon />');
   
}

exports.interceptComponent = interceptComponent;