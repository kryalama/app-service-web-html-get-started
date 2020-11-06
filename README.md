---
page_type: sample
name: "Sample Web App with Application Insights Click Analytics Plugin Enabled"
description: "This is a simple HTML/CSS/JS web app that illustrates how to enable Application Insights Click Analytics Plugin"
languages:
- javascript
- html
products:
- azure
- azure-app-service
---

# Application Insights with Click Analytics Plugin - HTML sample

This is a simple HTML/CSS/JS web app that illustrates how to enable Application Insights Click Analytics Plugin

It is built on the [Carousel template](http://getbootstrap.com/examples/carousel) by [Bootstrap](http://getbootstrap.com).

# Get Started

1.  Create an Application Insights resource in Azure by following [these instructions](https://docs.microsoft.com/en-us/azure/application-insights/app-insights-javascript?toc=/azure/azure-monitor/toc.json).

2.  Grab the Instrumentation Key (aka "ikey") from the resource you created in step 1. Later, you'll add it to the instrumentationKey setting in the `public/js/appinsightsConfig.js` file

3.  In the project directory you can run `npm install` to install dependencies.

4.  To launch the app locally , simply run

    `node index.js`


