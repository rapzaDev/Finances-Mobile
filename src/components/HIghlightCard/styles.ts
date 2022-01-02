import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.secondary};

    width: ${ RFValue(300) }px;

    border-radius: ${ RFValue(5) }px;

    padding: ${ RFValue(19) }px ${ RFValue(23) }px ${ RFValue(42) }px;
    margin-right: ${ RFValue(16) }px;
`;

export const CardHeader = styled.View`
    flex-direction: row;

    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.regular };
    font-size: ${ RFValue(14) }px;

    color: ${ ({theme}) => theme.colors.title };
`;

export const EntryIcon = styled(Feather)`
    color: ${ ({theme}) => theme.colors.success };
    font-size: ${ RFValue(40) }px;
`;

export const CardContent = styled.View``;

export const CardAmount = styled.Text`
    font-family: ${ ({theme}) => theme.fonts.medium };
    font-size: ${ RFValue(32) }px;

    color: ${ ({theme}) => theme.colors.success_light };

    margin-top: ${ RFValue(38) }px;
`;

export const LastTransaction = styled.Text`
    font-size: ${ RFValue(12) }px;

    color: ${ ({theme}) => theme.colors.text };
`;
