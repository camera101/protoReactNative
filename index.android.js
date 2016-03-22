/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    View,
    Alert
} from 'react-native';

class prototype extends Component {
    onPressButtonGET() {
        fetch("http://cluj-anunturi.ro/get/1", {method: "GET"})
        .then((responseData) => {
            Alert.alert(
                "GET Response",
                "Search Query -> " + responseData
            )
        })
        .done();
    }

	render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello world!
                </Text>
                <Text style={styles.instructions}>
                    Test an api request in android
                </Text>
                <TouchableNativeFeedback style={styles.button} onPress={this.onPressButtonGET}>
                    <View>
                        <Text style={styles.buttonText}>Go!</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button : {
        color: '#333333',
    }
});

AppRegistry.registerComponent('prototype', () => prototype);
