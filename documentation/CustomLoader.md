# Custom Loader
Developer can integrate custom loader by adding code in native(iOS/android).

Custom loader is integrated in starter application:

- iOS: [here](../ios/Loader)
- android: [here](../android/app/src/customloader)

## Modifications:
* Developer can change assets of loader by modifying it. To modify custom loader please refer respective [iOS](https://github.com/ostdotcom/ost-wallet-sdk-ios/blob/release-2.4/Samples/CustomLoader/OstMockCustomLoader.md#customize-loader) and [android](https://github.com/ostdotcom/ost-wallet-sdk-android/blob/release-2.4/Samples/customloader/OstCustomLoader.md#customize-loader) readme.<br />(For iOS) size for loader can be modify by changing [width](../ios/Loader/OstMockLoaderViewController.swift#L197) and [height](../ios/Loader/OstMockLoaderViewController.swift#L198). current value is `30 pt`.
* To modify error message of custom loader, developer needs to update `OstSdkMessages.json` file present in loader folder of [iOS](../ios/Loader/OstSdkMessages.json) and [android](../android/app/src/customloader/assets/OstSdkMessages.json)
* By default, application doesn't wait for `activate user` and `transaction` workflow completion. But It can be changed as per application requirements, Please refer [for iOS](../ios/Loader/OstMockLoaderManager.swift#L25) and [for android](../android/app/src/customloader/src/OstMockLoaderManager.java#L25) <br/>

