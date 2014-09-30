cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.wearecocoon.cordova.plugin.networkactivity/www/NetworkActivity.js",
        "id": "com.wearecocoon.cordova.plugin.networkactivity.NetworkActivity",
        "clobbers": [
            "window.NetworkActivity"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin.ActivityIndicator/www/activityIndicator.js",
        "id": "org.apache.cordova.plugin.ActivityIndicator.ActivityIndicator",
        "clobbers": [
            "ActivityIndicator"
        ]
    },
    {
        "file": "plugins/hu.dpal.phonegap.plugins.SpinnerDialog/www/spinner.js",
        "id": "hu.dpal.phonegap.plugins.SpinnerDialog.SpinnerDialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.wearecocoon.cordova.plugin.networkactivity": "1.0.0",
    "org.apache.cordova.plugin.ActivityIndicator": "1.0.0",
    "hu.dpal.phonegap.plugins.SpinnerDialog": "1.0.0"
}
// BOTTOM OF METADATA
});