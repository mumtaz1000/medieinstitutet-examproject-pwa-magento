const TargetableReactComponent = require('@magento/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js')
/**
 *  @param component {TargetableReactComponent}
 */
const interceptComponent = (component) => {
    component.addImport('import Comingsoon from "@mumtaz/hello-world/src/RootComponents/coming-soon.js"');
    component.addImport('import GoogleTagManager from "@extensions/gtm/lib/components/GTM/gtm.js"')
    component.insertAfterJSX('Header', '<GoogleTagManager />');
    component.insertBeforeJSX('div', '<Comingsoon />');

   
}

exports.interceptComponent = interceptComponent;