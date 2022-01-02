import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${ ({theme}) => theme.colors.secondary};

    width: ${ RFValue(300) }px;

    border-radius: ${ RFValue(5) }px;

    padding: ${ RFValue(19) }px ${ RFValue(23) }px ${ RFValue(42) }px;
`;

export const Card = styled.View``;

export const CardHeader = styled.View``;

export const CardTitle = styled.Text``;

export const EntryIcon = styled(Feather)``;

export const CardContent = styled.View``;

export const CardAmount = styled.Text``;

export const LastTransaction = styled.Text``;
