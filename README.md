<br/>

<p align="center">
    <img alt="awesome" src="designops.svg" width="480" />
</p><br/>

<br/>
<br/>
Awesome DesignOps is an awesome style list that curates the best design ops news,
tools, tutorials, articles and more. <a href="https://github.com/jondot/awesome-designops">PRs are welcome</a>.


<br/>
<br/>
<p align="center">
<a href="http://bit.ly/designops">Don't miss out! subscribe to our weekly newsletter</a>
</p>
<br/>
<br/>

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Design Systems](#design-systems)
- [Design Teams](#design-teams)
- [Reading](#reading)
- [Design System Tools](#design-system-tools)
  - [Components](#components)
- [Testing](#testing)
- [Sketch](#sketch)
  - [Workflow & Organization](#workflow--organization)
  - [Design](#design)
  - [Content](#content)
  - [Handoff](#handoff)
  - [Development](#development)
  - [Templates](#templates)
- [React](#react)
- [Colors](#colors)
- [Accessibility](#accessibility)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Design Systems

Criteria for design systems:

* Not just a component library
* Must include engineering point of views: React based, and infrastructure to bring up a whole design system including pipeline
* Better if includes design resources: sketch resources, design blog or design tone

<!-- systems-start -->
* :fire: [Atlaskit](http://atlaskit.atlassian.com) - Atlassian ([ATL](https://bitbucket.org/atlassian/atlaskit-mk-2/src/ce7c58515480ddae4e4cd8640db2da73d07ef5db/LICENSE?at=master&fileviewer=file-view-default)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://atlaskit.atlassian.com/packages)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://atlassian.design/guidelines/product/resources/web-product-gui-pack)  | :book: [Guideline](https://atlassian.design/guidelines/brand)  | [Blog](https://atlassian.design/)
* :fire: [Grommet V2](https://v2.grommet.io/) - HP ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://v2.grommet.io/components)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://github.com/grommet/grommet-design)   | [Blog](https://blog.grommet.io/)
* :fire: [Primer](https://primer.style/) - Github ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://primer.style/components)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://styleguide.github.com/primer/tools/sketch-templates/)  | :book: [Guideline](https://styleguide.github.com/primer/principles/)  | [Blog](https://styleguide.github.com/primer/whats_new/)
* :fire: [SEEK UI](http://seek-oss.github.io/seek-style-guide/) - SEEK ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/seek-oss/seek-style-guide)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://github.com/seek-oss/style-guide-resources-for-sketch)  | :book: [Guideline](http://seek-oss.github.io/seek-style-guide/) 
* :fire: [Polaris](https://polaris.shopify.com/) - Shopify ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/Shopify/polaris)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://github.com/Shopify/polaris/releases)  | :book: [Guideline](https://polaris.shopify.com/guides/principles#navigation) 
* :fire: [Lightning](https://www.lightningdesignsystem.com/) - Salesforce ([:warning: Salesforce](#)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/salesforce-ux/design-system)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://www.lightningdesignsystem.com/downloads/)  | :book: [Guideline](https://www.lightningdesignsystem.com/guidelines/overview/) 
* :fire: [Priceline Design System](https://pricelinelabs.github.io/) - Priceline ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/pricelinelabs/design-system/)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://github.com/pricelinelabs/design-system-sketch/releases/latest)  
* :fire: [Pluralsight Design System](https://design-system.pluralsight.com/) - Pluralsight ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/pluralsight/design-system)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://design-system.pluralsight.com/design-assets/)  | :book: [Guideline](https://design-system.pluralsight.com/patterns/voice-tone/) 
* :fire: [Gestalt](https://pinterest.github.io/gestalt) - Pinterest ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/pinterest/gestalt)   
* :fire: [Ring UI](https://jetbrains.github.io/ring-ui/master/index.html) - Jetbrains ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/JetBrains/ring-ui)   
* :fire: [Carbon](http://www.carbondesignsystem.com/) - IBM ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/ibm/carbon-components-react)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://github.com/ibm/carbon-design-kit)  | :book: [Guideline](http://www.carbondesignsystem.com/guidelines/content/general) 
* [Backpack](https://backpack.github.io/) - Skyscanner ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/Skyscanner/backpack)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://backpack.github.io/using/getting-started#sketch-resources)  | :book: [Guideline](https://backpack.github.io/style-guide/copywriting) 
* [Blueprint](https://blueprintjs.com) - Palantir ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://blueprintjs.com)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://blueprintjs.com/docs/#resources)  
* [Mineral UI](http://mineral-ui.com/) - CA Technologies ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](http://mineral-ui.com/component-status)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://github.com/mineral-ui/design-assets)  
* [Evergreen](https://evergreen.surge.sh) - Segment IO ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://evergreen.surge.sh/components/)   
* [Canvas](https://canvas.hubspot.com/) - Hubspot ([:warning: Hubspot](#)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/HubSpot/canvas)   | :book: [Guideline](https://canvas.hubspot.com/styles/design-principles)  | [Blog](https://medium.com/hubspot-product/people-over-pixels-b962c359a14d)
* [Zendesk Garden](https://garden.zendesk.com/) - Zendesk ([Apache 2.0](https://tldrlegal.com/license/apache-license-2.0-(apache-2.0))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/zendeskgarden/react-components)   
* [Pivotal UI](https://styleguide.pivotal.io/) - Pivotal ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/pivotal-cf/pivotal-ui/tree/master/src/react)   
* [Fabric](https://developer.microsoft.com/en-us/fabric) - Microsoft ([:warning: Microsoft](#)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/OfficeDev/office-ui-fabric-react)  | <img src="sketch.png" width="16" style="margin-bottom:-2px"/> [Sketch](https://developer.microsoft.com/en-us/fabric#/resources)  
* [Hackclub Design System](https://design.hackclub.com/) - Hackclub ([MIT](https://tldrlegal.com/license/mit-license)). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/hackclub/design-system)   
* [Joyent UI Toolkit](https://joyent-ui-toolkit.now.sh/) - Joyent ([MPL 2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))). <img src="react.svg" width="24" style="margin-bottom:-2px"/>[React](https://github.com/yldio/joyent-portal/tree/master/packages/ui-toolkit)   
<!-- systems-end -->







## Design Teams

* [Airbnb](https://airbnb.design)
* [Facebook](https://facebook.design)
* [Lyft](https://design.lyft.com/)

## Reading

* [Sketch Libraries](https://www.sketchapp.com/docs/libraries/)
* [Sketching in the browser](https://medium.com/seek-blog/sketching-in-the-browser-33a7b7aa0526) - a great writeup about the code-to-sketch movement
* [Design systems in Atomic Design](http://atomicdesign.bradfrost.com/chapter-1/) - Brad Frost's book on atomic design and design systems.

## Design System Tools

### Components

* [Storybook](storybook.js.org) - Storybook is THE versatile framework for building design systems. You can use it it for design systems, showcase, testing, and handoff.
    * [Docgen addon](https://github.com/TwoStoryRobot/storybook-addon-docgen) - generates documenation for Storybook using React docgen.
    * [Readme addon](https://github.com/tuchk4/storybook-readme) - render README files in storybook.
    * [Scissors addon](https://www.npmjs.com/package/storybook-addon-scissors) - render components in many form factors (mobile, desktop, etc.).
* [React Styleguidist](https://react-styleguidist.js.org/) - made for style guides and design systems from the start, works like magic. You can use React component in regular Markdown files to showcase components.
* [React docgen](https://github.com/reactjs/react-docgen) - extract documentation from React components.
* [Compositor Kit](https://github.com/c8r/kit) - a new way to develop, document and test React component libraries.
* [styled-components](https://styled-components.com) - a modern styling library for React that does much more.
    * [styled-system](https://jxnblk.com/styled-system/) - a design system powerup for styled-components
    * [Rebass grid](https://github.com/rebassjs/grid) - responsive grid built with styled-system.
* [Vueds](https://vueds.com/) - If you prefer building design systems with vue.js

## Testing

* TBD


## Sketch

### Workflow & Organization

* [Sketch Runner](https://sketchrunner.com/) - must have for sketch. Speed up your sketch workflow.
* [Sketch Palletes](https://github.com/andrewfiorillo/sketch-palettes) - must have for maintaining color palletes.
* [Symbol Organizer](https://github.com/sonburn/symbol-organizer) - organize all symbols (given rules) on a page.
* [Move to Library](https://github.com/ahmedmigo/Move-to-library-sketchplugin)

### Design

* [RenameIt](https://github.com/rodi01/RenameIt) - the best plugin for renaming inside Sketch.
* [Images Reinvented](https://github.com/roydigerhund/Images-Reinvented) - must have for images. Creates a mask by default.
* [Select Similar](https://github.com/wonderbit/sketch-select-similar-layers) - select similar layers based on common properties.
* [Dock preview](https://github.com/fnky/sketch-dockpreview) - a fun way to preview artboard on the dock.
* [Fontpad](https://fontrapid.com/) - the only plugin that lets you edit/create fonts inside Sketch (free).
* [Single border](https://github.com/sureskumar/single-border) - create a "fake" single border for when you need that.
* [Paddy](https://github.com/DWilliames/paddy-sketch-plugin) - generate padding.
* [Looper](http://sureskumar.com/looper/) - create fun looping compositions.
* [Automate Sketch](https://github.com/Ashung/Automate-Sketch) - a Sketch multitool.
* [Better Shadows](https://github.com/JJYing/Sketch-Better-Shadow) - generate shadows with non-linear decay.
* [Rough Sketch](https://github.com/mathieudutour/rough-sketch) - generate hand-drawn variant of your composition. Works mostly.

### Content

* [Data populator](https://github.com/preciousforever/data-populator) - must have for generating UI data, including your own customized data set.
    * [Cloudstitch addon](https://github.com/cloudstitch/cloudstitch-sketch-plugin) - use Cloudstitch for the data.
* [Content Generator](https://github.com/timuric/Content-generator-sketch-plugin) - another popular content generator.

### Handoff

* [Measure](https://github.com/utom/sketch-measure) - must have Sketch plugin for generating measurements for handoff.
* [Cactus](https://kactus.io/) - version control for Sketch. Free for public repo, and open source.
* [Inker](https://github.com/zaaack/inker) - redlines for SVG compositions.
* [Storybook to Sketch](https://github.com/chrisvxd/story2sketch) - generate Sketch files from Storybook (React).
* [Typography Export](https://github.com/reinvanoyen/typex) - export text styles to CSS, HTML, etc.
* [react-sketchapp](https://github.com/airbnb/react-sketchapp) - turn React components into Sketch compositions
* [react-sketchapp styleguide demo](https://github.com/airbnb/react-sketchapp/tree/master/examples/styleguide) - you can use this to bootstrap your design system
* [html-sketchapp](https://github.com/brainly/html-sketchapp) - turn HTML pages into Sketch compositions
* [html-sketchapp-cli](https://github.com/seek-oss/html-sketchapp-cli) - a CLI for html-sketchapp to create Sketch libraries.


### Development

* [Skpm](https://github.com/skpm/skpm) - the plugin development tool that started it all.
    * [Webview](https://github.com/skpm/sketch-module-web-view) - a starter for Webview based plugins.
    * [Devtools](https://github.com/skpm/sketch-dev-tools) - devtools.
* [Sketch API](https://github.com/BohemianCoding/SketchAPI) - the Javascript based API for Sketch plugins.


### Templates

* [Foundation UI](https://github.com/stephenway/sketch-foundation-kit)

## React

* [Rebass](https://grid.rebassjs.org/) - a modern and general purpose UI component library
* [Color Pickers](https://github.com/casesandberg/react-color)


## Colors

* [Themer](https://themer.mjswensen.com/) - generate color themes for various applications. [Plugin for Sketch Palletes](https://github.com/mjswensen/themer/tree/master/packages/themer-sketch-palettes).
* [ColorBox](https://www.colorbox.io/) - building color systems for accessible UIs that scale.

## Accessibility

* [Stark](https://getstark.co/) - Sketch plugin to validate accessibility in design time
* [Bulb Design Tools](http://design.bulb.co.uk/#/Accessibility/Automated%20Testing.md) - list of automated tools for testing for accessibility





