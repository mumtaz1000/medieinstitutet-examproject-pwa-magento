const TargetableReactComponent = require('@magento/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js')
/**
 *  @param component {TargetableReactComponent}
 */
const interceptComponent = (component) => {
    //component.addImport('import MegaMenu from "../../../../../../src/components/MegaMenu"');
    component.removeJSX('<Instagram size={20} />');
}

exports.interceptComponent = interceptComponent;