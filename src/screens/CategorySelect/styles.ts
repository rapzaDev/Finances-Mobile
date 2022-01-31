import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background };
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${({theme}) => theme.colors.primary };

    align-items: center;
    justify-content: flex-end;

    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title };

    font-family: ${({theme}) => theme.fonts.regular };
    font-size: ${RFValue(18)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${ ({ isActive, theme }) => 
        isActive ? theme.colors.selected_category : theme.colors.background
    };
`;

export const Icon  = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: ${RFValue(16)}px;

    color: ${({theme}) => theme.colors.title };
`;

export const Name = styled.Text<CategoryProps>`
    font-family: ${({ isActive ,theme }) => isActive ? theme.fonts.bold : theme.fonts.regular };
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.text };
`;

export const Separator = styled.View`
    height: ${RFValue(1)}px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary };
`;

export const Footer = styled.View`
    width: 100%;
    padding: ${RFValue(24)}px;
`;
