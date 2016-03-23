# protoReactNative


## Android setup
	https://facebook.github.io/react-native/docs/android-setup.html

## Getting started
	https://facebook.github.io/react-native/docs/getting-started.html#content

	PS: Error occurred while installing :
	 - Error in launching AVD - Found this solution
	 	- http://stackoverflow.com/questions/26355645/error-in-launching-avd

## SDK MANAGER
	Open SDK manager and install all the packages for each version.

## AVD
	Open AVD - Android virtula device
	Here you can preselect a Device Definition
	I used :
		Target: Android 6.0 - Api Level 23
		CPU/ABI INtel Atomic (X86)
		Skin: Skin with dynamic hardware controlers

## Start server
	Open in cmd the proiect root and run
		$ react-native start

	PS: Error occurred while installing :
	- Another error when starting the server - found this solution
		- Run command simultaneously with  $ react-native start
		- $ curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"

## Run project (build and install on emulator)
	$ react-native run-android

## Usefull tools for debugging:
	In the emulator - Menu Button from the right menu :
		- Debugger in Chrome ( or access link - http://localhost:8081/debugger-ui)
		- Disable Hot Reloading - will reload each time you save your code.No need to re-run the application.

## Generating the release APK to test the app on your phone
	- In the root of the project run
		$ cd android
		$ gradlew assembleRelease
	- Location of the apk
		root/android/app/build/output/apk
