import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>MainScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
