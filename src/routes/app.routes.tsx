import React from 'react';
import { useTheme } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createBottomTabNavigator();

function AppRoutes () {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarActiveTintColor: theme.colors.title,
                  tabBarStyle: { 
                    backgroundColor: theme.colors.primary, 
                    borderTopColor: theme.colors.primary, 
                    height: 65,
                  },
                  tabBarLabelPosition: 'beside-icon'
                }}
            >
                <Screen  
                    name="Listagem"
                    component={Dashboard}
                />
                <Screen  
                    name="Cadastrar"
                    component={Register}
                />
                <Screen  
                    name="Resumo"
                    component={Register}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export { AppRoutes };