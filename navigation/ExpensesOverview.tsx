import {Ionicons} from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {IconButton} from 'components/UI';
import {GlobalStyles} from 'constant/styles';

import {AllExpenses, RecentExpenses} from '../screens';

const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  const recentExpensestabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
    color,
    size,
  }) => <Ionicons name="hourglass" size={size} color={color} />;

  const recentExpensesOptions: BottomTabNavigationOptions = {
    title: 'Recent Expenses',
    tabBarLabel: 'Recent',
    tabBarIcon: recentExpensestabBarIcon,
  };

  const allExpensestabBarIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
    color,
    size,
  }) => <Ionicons name="calendar" size={size} color={color} />;

  const allExpensesOptions: BottomTabNavigationOptions = {
    title: 'All Expenses',
    tabBarLabel: 'All Expenses',
    tabBarIcon: allExpensestabBarIcon,
  };

  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: GlobalStyles.colors.light,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => {
          return (
            <IconButton
              icon="add"
              size={24}
              color={GlobalStyles.colors.light}
              onPress={() => navigation.navigate('ManageExpense')}
            />
          );
        },
      })}>
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
