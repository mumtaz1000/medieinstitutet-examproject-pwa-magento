import React from "react"
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-57XBXVH'}
TagManager.initialize(tagManagerArgs)

const GoogleTagManager = (props) => {

    window.dataLayer.push({
        event: 'ProductPageView',
        products: [
            {
                name: props.name
            },
        ],
       
      });

return(
    <h1>Gtm by momo</h1>
)
}
export default GoogleTagManager