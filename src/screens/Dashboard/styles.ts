import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
    width: 100%;
    height: ${ RFPercentage(42) }px;

    background: ${ ({ theme }) => theme.colors.primary };
`;

export const UserWrapper = styled.View` 
    width: 100%;

    padding: 0 ${ RFValue(24) }px;
    margin-top: ${ getStatusBarHeight() + RFValue(28) }px;

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

//HIGHLIGHT CARDS

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    padding: 0 ${ RFValue(8) }px;

    position: absolute;
    top: ${ RFPercentage(21) }px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 ${ RFValue(32) }px;
    
    margin-top: ${ RFPercentage(15) }px;
`;

export const Title = styled.Text`
    font-size: ${ RFValue(18) }px;
    font-family: ${ ({ theme }) => theme.fonts.regular };

    color: ${ ({ theme }) => theme.colors.shape };

    margin-bottom: ${ RFValue(16) }px;
`;

// export const TransactionsList = styled(FlatList ).attrs({
//     showsVerticalScrollIndicator:false,
//     contentContainerStyle: { paddingBottom: getBottomSpace() }
// })``as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const TransactionsList = styled( 
    FlatList as new ( props: FlatListProps<DataListProps> ) => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator:false,
    contentContainerStyle: { paddingBottom: getBottomSpace() }
})``;