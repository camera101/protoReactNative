# protoReactNative


## ANDROID SETUP
	https://facebook.github.io/react-native/docs/android-setup.html
	
## GETTING STARTED	
	https://facebook.github.io/react-native/docs/getting-started.html#content

## Error in launching AVD - Found this solution
	http://stackoverflow.com/questions/26355645/error-in-launching-avd

## OPEN SDK MANAGER and install all the packages for each version.

## OPEN AVD - Android virtula device
	Here you can preselect a Device Definition

## Open in cmd the proiect root and run
$ react-native start 

## Another error when starting the server - found this solution
	Run command simultaneously with  $ react-native start 
	$ curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"

## RUN project	(build and install on emulator)
	$ react-native run-android

## Generating the release APK 
	In the root of the project run 
	$ cd android 
	$ gradlew assembleRelease
	
## Location of the apk
	root/android/app/build/output/apk
