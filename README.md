 # medieinstitutet-examproject-pwa-magento
This repo includes final pwa studio project attached with my own magento backend.

## Main work done on this project
In this project I have created a small ecommerce shop with the help of Pwa studio which is a tool to create frontend by using React, webpack, Graphql and upward, and have magento store as backend that is created in php and mysql as a database.
My main achivement on this project is 
<ol><li><b>Overriding files</b> like react components and css styling by using <b>Fooman overriding command</b></li>
 <li><b>Creating extensions</b> by using <b>npm packages, webpack and react</b> for magento</li>
 <li><b>Creating static route</b> in our project by using <b>Venia-ui targets</b></li>
 <li>Working with <b>Graphql</b> to fetch and update data.</li>
 </ol>

## Folder structure
.<br>
├── @extensions     # contains two different extensions code<br>
├── @mumtaz         # static routing extension<br> 
├── README.md       # project read me file<br>
└── magento2        # contains pwa studio frontend code<br>

#### @extensions
.<br>
├── gtm          # contains Google Tag manager extension code<br>
└── top-bar-plugin  # contains Top bar extension code<br>

###### gtm folder
.<br>
├── intercept.js # here we interact directly with Targets        and Targetables to apply customizations.<br>
├── lib<br>
│   ├── components<br>
│   │   └── GTM<br>
│   │       ├── gtm.js  # a react component for           implementing gtm<br> 
│   │       └── index.js<br> 
│   └── overwrites<br>
│       └── components<br>
│           └── CartPage<br>
│               └── productFullDetail.js # pwa studio file where we use gtm component<br>
├── moduleOverrideWebpackPlugin.js # webpack plugin for overriding file<br>
├── node_modules<br>
├── package.json # most important file for creating npm package<br>
└── yarn.lock<br>

###### top-bar-plugin folder
.
├── intercept.js # here we interact directly with Targets        and Targetables to apply customizations.<br>
├── lib<br>
│   ├── components<br>
│   │   └── TopBar<br>
│   │       ├── index.js<br>
│   │       ├── topbar.css # css file for topbar<br>
│   │       └── topbar.js  # top bar react component<br> 
│   └── overwrites<br>
│       └── components<br>
│           └── Main<br>
│               └── main.js # pwa studio file where we use top bar component<br>
├── moduleOverrideWebpackPlugin.js # webpack plugin for overriding file<br>
├── node_modules<br>
├── package.json # most important file for creating npm package<br>
└── yarn.lock<br>

#### @mumtaz
.
└── hello-world<br>
    ├── node_modules<br>
    ├── package.json# most important file for creating npm package<br>
    ├── src<br>
    │   ├── RootComponents<br>
    │   │   └── hello-world.js #react component for routing<br>
    │   └── intercept.js #venia-ui target for static routing<br>
    └── yarn.lock<br>

#### magento2 
This folder contains the main project files for pwa studio store front project. A pwa studio is a tool to create our own magento 2 frontend by using React so it includes all project files along with extension installed inside.
.<br>
├── README.md<br>
├── babel.config.js<br>
├── examproject.code-workspace<br>
├── local-intercept.js<br> 
├── node_modules #contains all extensions required for pproject<br>
├── package.json<br> 
├── postcss.config.js<br>
├── prettier.config.js<br>
├── src #contains overriding files and self created components<br>
├── tailwind.config.js<br>
├── template.html<br>
├── upward.yml<br>
├── webpack.config.js<br>
└── yarn.lock<br>

## 1. Overriding files like react components and css styling by using Fooman overriding command



  
