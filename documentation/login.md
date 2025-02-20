# Integrate with your App server. 

By default the app is integrated with Mappy client which is a demo app server. To integrate with your own app server you will require some changes as follows. 

## Changes will be required in src/helper/AppProvider which takes the config from demo-server-config.json
  
   - `getTokenName`

        returns token name which is read from demo-server-config, you can change it in demo-server-config or hardcode it in the function. 

   - `getTokenId` 

        returns token id which is read from demo-server-config, you can change it in demo-server-config or hardcode it in the function. 

   - `getTokenSymbol`    

        returns token symbol which is read from demo-server-config, you can change it in demo-server-config or hardcode it in the function. 

   - `getSaasApiEndpoint`  

        returns saas api endpoint from demo-server-config, you can change it in demo-server-config or hardcode it in function. 

   - `getMappyApiEndpoint`

        returns your app server api endpoint from demo-server-config, you can change it in demo-server-config or hardcode it in function. 

   - `getViewApiEndpoint` 

        returns view api endpoint from demo-server-config, you can change it in demo-server-config or hardcode it in function.  

   - `getUrlId`

        returns Url id from demo-server-config, you can change it in demo-server-config or hardcode in the function.  

   - `getAppServerClient`

        Currently the app server endpoint is formed by concatinating getMappyApiEndpoint + getTokenId + getUrlId.
        Eg: `https://demo-mappy.ost.com/demo/api/1400/55c0c94b98ef6362e7d2d10fe60572819d7d31`
        and is returned. Should be changed as per your app server endpoint in  demo-server-config or hardcoded it in function.


## Changes will be required in src/services/AppServerApi

AppServerApi communicates with demo app server currently. To integrate with your app server changes will be required.

   - `createAccount`
        Request url can be changed here. Demo app server request url and response is mentioned below.

        <b>requestUrl : </b> "/signup" 

        <b>response : </b>

        ```json
            {
                "success": true,
                "data": {
                    "result_type": "current_user",
                    "current_user": {
                        "app_user_id": 699,
                        "username": "abc",
                        "token_id": 1400,
                        "user_id": "27027f78-b1db-4a3c-a6b8-10c91ede06e6",
                        "token_holder_address": null,
                        "device_manager_address": null,
                        "recovery_address": null,
                        "status": "CREATED",
                        "uts": 1583410654,
                        "cts": 1583410654
                    }
                }
            }
        ```

   - `logIn`
        Request url can be changed here. Demo app server request url and response is mentioned below.

        <b>requestUrl : </b> "/login" 

        <b>response : </b>

        ```json
           {
                "success": true,
                "data": {
                    "result_type": "current_user",
                    "current_user": {
                        "app_user_id": 698,
                        "username": "abc",
                        "token_id": 1400,
                        "user_id": "2c90eeb6-788e-414c-bfa3-50454a207ede",
                        "token_holder_address": "0x117617b60b3b72836e5a7b589412fc6db868370f",
                        "device_manager_address": "0x9e377483b10db6adedf8f8567a742a80138f1367",
                        "recovery_address": "0x57bf01a9b177cc6a73a9f124ad1db8ce4087ef54",
                        "status": "ACTIVATED",
                        "uts": 1583397399,
                        "cts": 1583391246
                    }
                }
            }
        ```

   - `getLoggedInUser`
        Request url can be changed here. Demo app server request url and response is mentioned below.

        <b>requestUrl : </b> "/users/current-user"

        <b>response : </b>
  
        ```json
            {
                "success": true,
                "data": {
                    "result_type": "current_user",
                    "current_user": {
                        "app_user_id": 698,
                        "username": "abc",
                        "token_id": 1400,
                        "user_id": "2c90eeb6-788e-414c-bfa3-50454a207ede",
                        "token_holder_address": null,
                        "device_manager_address": null,
                        "recovery_address": null,
                        "status": "CREATED",
                        "uts": 1583391246,
                        "cts": 1583391246
                    }
                }
            }
        ```

   - `registerDevice`
        Request url can be changed here. Demo app server request url and response is mentioned below.

        <b>requestUrl : </b>  "/devices"

        <b>response : </b>

        ```json   
            {
                "success": true,
                "data": {
                    "result_type": "device",
                    "device": {
                    "app_user_id": 699,
                    "user_id": "27027f78-b1db-4a3c-a6b8-10c91ede06e6",
                    "address": "0xa14cde4bed717524a6b5e1cc5ecc898960b416ee",
                    "api_signer_address": "0x92a507f64e1945051d2eb72f2f9a0492549d0018",
                    "status": "REGISTERED"
                    }
                }
            }
        ```

   - `getLoggedInUserPinSalt`
        Request url can be changed here. Demo app server request url and response is mentioned below.

        <b>requestUrl : </b>  "/users/current-user-salt"

        <b>response : </b>

        ```json
            {
                "success": true,
                "data": {
                    "result_type": "current_user_salt",
                    "current_user_salt": {
                        "app_user_id": 699,
                        "user_id": "27027f78-b1db-4a3c-a6b8-10c91ede06e6",
                        "recovery_pin_salt": "9eab1b2bdb144bdb29f2b1e491ac649d7d760ab22802374099cc3c4bffb372759176c1da1f166e1c3da3eaa9130711a3d235e85219829c542fdabd1901bd14c0b143cbbda8a22520dff3bb8c631c3d18dabffc4c7185fcdd462207c7ac650e0ce7803487",
                        "cts": 1583410654,
                        "uts": 1583410654
                    }
                }
            }
        ```

   - `logoutUser`
        Request url can be changed here. Demo app server request url and response is mentioned below.

        <b>requestUrl : </b> "/users/logout"

        <b>response : </b>

        ```json
            {
                "success": true,
                "data": {}
            }
        ```   

# SignUp/Login flow

## UI SignUp/Login flow.

To change the UI or code as per your changes the file can be found in src/components/LoginScreen/index   


## SignUp/Login functional flow.

In both the flows OstWalletSdk is initialised before initiating SignUp/Login flow. Ref `src/components/LoginScreen/LoginScreenViewModel.js` `setupUser` method.</br>
After successful flow completion, OstWalletSdk's `setupDevice` method is called, via helper class `src/helper/OstSetupDeviceHelper/OstSetupDevice.js`.</br>
