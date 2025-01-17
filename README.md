# OST Wallet React Native Starter App


# Setup

## Add demo server configuration

To use your own sandbox economy, scan the QR code of your sandbox economy and update the `demo-server-config.json` file. The QR contains json configuration.

Path of `demo-server-config.json` file:
```
react-native-demo-app/src/constants/demo-server-config.json
```

To get started right away, developers can use the config of popcorn economy.
Popcorn economy is hosted by OST platform on Sandbox environment.
```
{"token_id":1400,"token_name":"Popcorn","token_symbol":"POP","url_id":"55c0c94b98ef6362e7d2d10fe60572819d7d31e54f8017aaba95eb225cc1bff7","mappy_api_endpoint":"https://demo-mappy.ost.com/demo/","saas_api_endpoint":"https://api.ost.com/testnet/v2/","view_api_endpoint":"https://view.ost.com/testnet/"}
```

To avoid pushing config into github use the below command:
```
git update-index --skip-worktree ./src/constants/demo-server-config.json
```

## Install npm modules
```
npm install
```

# iOS Setup

## Go to `ios` folder
```
cd ios
```

## Install/Update dependencies using [Carthage](https://github.com/Carthage/Carthage).
`ost-wallet-sdk-ios` and other downstream dependencies of `ost-wallet-sdk-ios` are installed using [Carthage](https://github.com/Carthage/Carthage).

```
carthage update --platform ios
```

## Install/Update dependencies using [CocoaPods](https://guides.cocoapods.org/using/getting-started.html).
`react-native` and other react-native-community dependencies are  installed using [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) .
```
pod install
```

## Open and run the application using xcode.
- Open the `ostWalletRNApp.xcworkspace` in xcode.

```
open ostWalletRNApp.xcworkspace
```

# Android Setup
No additional steps are required for setting up Android.
To run the application, run:
```
react-native run-android
```


# OST Wallet Sdk Configs
The OST Wallet Sdk Configs are located inside the `theme/ostsdk` folder. The full path is:
```
react-native-demo-app/src/theme/ostsdk
```

| File Name | Description |
| --------- | ----------- |
| ost-wallet-sdk-config.js | Please refer to [Ost Wallet Sdk Config](https://github.com/ostdotcom/ost-wallet-sdk-react-native#initializing-sdk-with-config) documentation. |
| ost-sdk-theme-config.js | Please refer to [Theme Config Android](https://github.com/ostdotcom/ost-wallet-sdk-android/blob/release-2.3/documentation/ThemeConfig.md)/[Theme Config iOS](https://github.com/ostdotcom/ost-wallet-sdk-ios/blob/release-2.3/documentation/ThemeConfig.md) documentation. |
| ost-sdk-content-config.js | Please refer to [Content Config Android](https://github.com/ostdotcom/ost-wallet-sdk-android/blob/release-2.3/documentation/ContentConfig.md)/[Content Config iOS](https://github.com/ostdotcom/ost-wallet-sdk-ios/blob/release-2.3/documentation/ContentConfig.md) documentation. |
| ost-sdk-settings-config.js | Please refer to [OstWallet Settings Configuration](https://github.com/ostdotcom/ost-wallet-sdk-react-native/blob/develop/documentation/OstWalletSettings.md) documentation. |
| ost-sdk-transaction-config.js | Please refer to [OstTransactionHelper](https://github.com/ostdotcom/ost-wallet-sdk-react-native/blob/develop/documentation/OstTransactionHelper.md) and [OstTransactionConfig](https://github.com/ostdotcom/ost-wallet-sdk-react-native/blob/develop/documentation/OstTransactionConfig.md) documentation. |


* <b> Starter App [integration](./documentation/login.md)</b>