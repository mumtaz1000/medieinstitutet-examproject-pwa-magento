import React, { useEffect } from "react"
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-57XBXVH'}
TagManager.initialize(tagManagerArgs)

const GoogleTagManager = (props) => {
useEffect(()=>{
    if(props.name != undefined){
        window.dataLayer.push({
            event: 'ProductPageView',
            products: [
                {
                    name: props.name.name
                },
            ],
           
          });
    }
},[])

return(
    <h1></h1>
)
}
export default GoogleTagManager