import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
    width: 100%;
    height: ${ RFPercentage(42) }px;

    justify-content: center;

    background: ${ ({ theme }) => theme.colors.primary };
`;

export const UserWrapper = styled.View` 
    width: 100%;

    padding: 0 ${ RFValue(24)}px;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${ RFValue(55) }px;
    height: ${ RFValue(55) }px;

    border-radius: ${ RFValue(10) }px;
`;

export const User = styled.View`
    margin-left: ${ RFValue(17) }px;
`;

export const UserGreeting = styled.Text`
    color: ${ ({theme}) => theme.colors.shape };

    font-size: ${ RFValue(18) }px;
    font-family: ${ ({theme}) => theme.fonts.regular };
`;

export const UserName = styled.Text`
    color: ${ ({theme}) => theme.colors.shape };

    font-size: ${ RFValue(18) }px;
    font-family: ${ ({theme}) => theme.fonts.bold };
`;

export const PowerIcon = styled(Feather)`
    color: ${ ({theme}) => theme.colors.shape };
    font-size: ${ RFValue(24) }px;



`;
