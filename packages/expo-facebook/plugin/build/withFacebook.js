"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withFacebookAndroid_1 = require("./withFacebookAndroid");
const withFacebookIOS_1 = require("./withFacebookIOS");
const withSKAdNetworkIdentifiers_1 = require("./withSKAdNetworkIdentifiers");
const pkg = require('expo-facebook/package.json');
const withFacebook = config => {
    config = withFacebookAndroid_1.withFacebookAppIdString(config);
    config = withFacebookAndroid_1.withFacebookManifest(config);
    config = withFacebookIOS_1.withFacebookIOS(config);
    config = withFacebookIOS_1.withUserTrackingPermission(config);
    // https://developers.facebook.com/docs/SKAdNetwork
    config = withSKAdNetworkIdentifiers_1.withSKAdNetworkIdentifiers(config, ['v9wttpbfk9.skadnetwork', 'n38lu8286q.skadnetwork']);
    return config;
};
exports.default = config_plugins_1.createRunOncePlugin(withFacebook, pkg.name, pkg.version);
