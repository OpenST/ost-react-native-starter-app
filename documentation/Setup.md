# Setup

## react-native 
* (this step is already done in starter app)Adding Ost-Wallet-Sdk-react-native
```
npm i @ostdotcom/ost-wallet-sdk-react-native
```

* Run npm install
```
npm install
```

## iOS 

## Update the native sdk branch:

* open iOS directory
```
cd ios
```

* run pod 
```
pod install
```

* edit the [cartfile](../ios/cartfile):
```
github "ostdotcom/ost-wallet-sdk-ios" == 2.4.0
```

* run command in terminal
```
carthage update --cache-builds --platform ios
```

* to run application
```
cd ..
react-native run-ios
``` 
> NOTE
> ost-wallet-sdk(iOS) won't work on simulator above 12.4.  

* to run application on device:<br />
Open application on xcode and run by clicking play icon.

## Android
* add debug.keystore file in `android/app/debug.keystore` 

* generate Or Download the debug.keystore file
To Generate : 
```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```
Or Download from:
```
https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore
```
* to run application
In root Directory
```
react-native run-android
```