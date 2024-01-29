import {Ionicons} from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from 'constant/styles';

import {AllExpenses, RecentExpenses} from '../screens';

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

export default ExpensesOverview;
