import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

// NavigatorIOS is a wrapper around UINavigationController, enabling you to implement a navigation stack.
// It works exactly the same as it would on a native app using UINavigationController, providing the same
// animations and behavior from UIKIt.

import BookList from './BookList';

class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{title: 'Featured Books', component: BookList}} // Route object, used to describe each scene the app navigates to.
      />
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Featured;
