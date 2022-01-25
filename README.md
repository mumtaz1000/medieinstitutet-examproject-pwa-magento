 # medieinstitutet-examproject-pwa-magento
This repo includes final pwa studio project attached with my own magento backend.

## Folder structure
.
├── @extensions     # contains two different extensions code
├── @mumtaz         # static routing extension 
├── README.md       # project read me file
└── magento2        # contains pwa studio frontend code

#### @extensions
.
├── gtm             # contains Google Tag manager extension code
└── top-bar-plugin  # contains Top bar extension code

###### gtm folder
.
├── intercept.js # here we interact directly with Targets        and Targetables to apply customizations.
├── lib
│   ├── components
│   │   └── GTM
│   │       ├── gtm.js  # a react component for implementing gtm 
│   │       └── index.js 
│   └── overwrites
│       └── components
│           └── CartPage
│               └── productFullDetail.js # here we use gtm component
├── moduleOverrideWebpackPlugin.js # webpack plugin for overriding file
├── node_modules
├── package.json # most important file for creating npm package
└── yarn.lock

## Main work done on this project
In this project I have created a small ecommerce shop with the help of Pwa studio which is a tool to create frontend by using React, webpack, Graphql and upward, and have magento store as backend that is created in php and mysql as a database.
My main achivement on this project is 
<ol><li><b>Overriding files</b> like react components and css styling by using <b>Fooman overriding command</b></li>
 <li><b>Creating extensions</b> by using <b>npm packages, webpack and react</b> for magento</li>
 <li><b>Creating static route</b> in our project by using <b>Venia-ui targets</b></li>
 <li>Working with <b>Graphql</b> to fetch and update data.</li>
 </ol>

#### 1. Overriding files like react components and css styling by using Fooman overriding command


  
