// Imports: Dependencies
import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decreaseCounter, increaseCounter} from '../store/actions/counterAction';
import {login} from '../store/actions/authAction';

// Screen Dimensions
const {height, width} = Dimensions.get('window');

const Counter = () => {
  const data = useSelector((state) => state.counterReducer);
  const dataAuth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log('data-----------------------------', data.counter);
  console.log('Auth-----------------------------', dataAuth.loggedIn);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loggedInContainer}>
        <Text style={styles.loggedInText}>Logged In: </Text>
        <Text style={styles.loggedInText}>{`${dataAuth.loggedIn}`}</Text>
        <Button
          title="Login"
          onPress={() => {
            dispatch(login(true));
            console.log('login');
          }}
          style={styles.loginButton}
        />
        <Button
          title="Logout"
          onPress={() => {
            dispatch(login(false));
            console.log('logout');
          }}
          style={styles.loginButton}
        />
      </View>

      <Text style={styles.counterTitle}>Counter</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={
            () => {
              dispatch(increaseCounter());
              console.log('plus');
            }

            // () => props.reduxIncreaseCounter()
          }>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{data.counter}</Text>

        <TouchableOpacity
          onPress={() => {
            dispatch(decreaseCounter());
            console.log('minus');
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
// Screen: Counter

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

export default Counter;
