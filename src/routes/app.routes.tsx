import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

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
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                  },
                  tabBarLabelPosition: 'beside-icon'
                }}
            >
                <Screen  
                    name="Listagem"
                    component={Dashboard}
                    options={{
                        tabBarIcon: ( ({ size, color }) => 
                            <MaterialIcons 
                                name="format-list-bulleted"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Screen  
                    name="Cadastrar"
                    component={Register}
                    options={{
                        tabBarIcon: ( ({ size, color }) => 
                            <MaterialIcons 
                                name="attach-money"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
                <Screen  
                    name="Resumo"
                    component={Register}
                    options={{
                        tabBarIcon: ( ({ size, color }) => 
                            <MaterialIcons 
                                name="pie-chart"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export { AppRoutes };