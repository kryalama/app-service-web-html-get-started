var clickPlugin = Microsoft.ApplicationInsights.ClickAnalyticsPlugin;
var clickPluginInstance = new clickPlugin();
// Application Insights Configuration
var configObj = {
    instrumentationKey: "YOUR INSTRUMENTATION KEY",
    extensions: [
      clickPluginInstance
    ],
    extensionConfig: {
        [clickPluginInstance.identifier] : {
            dataTags : {
                customDataPrefix : 'data-custom-',
                aiBlobAttributeTag : 'blob',
                parentDataTag : 'parent',
                donotTrackDataTag : 'dnt',
                captureAllMetaDataContent : true
            }
        } 
    }
  };
  var appInsights = new Microsoft.ApplicationInsights.ApplicationInsights({ config: configObj });
  appInsights.loadAppInsights();