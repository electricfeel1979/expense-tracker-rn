import {Ionicons} from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalStyles} from 'constant/styles';
import {StatusBar} from 'expo-status-bar';

import {AllExpenses, ManageExpenses, RecentExpenses} from './screens';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  const screenOptions = {
    headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: GlobalStyles.colors.light,
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary500,
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
  };

  const recentExpensestabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
    color,
    size,
  }) => <Ionicons name="hourglass" size={size} color={color} />;

  const allExpensestabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
    color,
    size,
  }) => <Ionicons name="calendar" size={size} color={color} />;

  const recentExpensesOptions: BottomTabNavigationOptions = {
    title: 'Recent Expenses',
    tabBarLabel: 'Recent',
    tabBarIcon: recentExpensestabBarIcon,
  };

  const allExpensesOptions: BottomTabNavigationOptions = {
    title: 'All Expenses',
    tabBarLabel: 'All Expenses',
    tabBarIcon: allExpensestabBarIcon,
  };

  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={recentExpensesOptions}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={allExpensesOptions}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
