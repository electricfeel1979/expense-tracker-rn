import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalStyles} from 'constant/styles';

import ExpensesOverview from './ExpensesOverview';
import {RootStackParamList} from './types';
import {ManageExpenses} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: GlobalStyles.colors.light,
        }}>
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ManageExpense"
          component={ManageExpenses}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
