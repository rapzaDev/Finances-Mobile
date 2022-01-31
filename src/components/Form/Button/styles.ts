import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
`;

export const ButtonComponent = styled(RectButton)`
    background-color: ${ ({ theme }) => theme.colors.secondary };

    align-items: center;

    font-family: ${ ({ theme }) => theme.fonts.medium };
    font-size: ${ RFValue(14) }px;

    padding:${ RFValue(18) }px;

    border-radius: ${ RFValue(5) }px;
`;

export const Title = styled.Text`
    color:${ ({ theme }) => theme.colors.title };

    font-family: ${ ({ theme }) => theme.fonts.regular };
    font-size: ${ RFValue(14) }px;
`;