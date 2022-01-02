import React from 'react';

import { HighlightCard } from '../../components/HIghlightCard';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    PowerIcon,
    HighlightCards,
} from './styles';

function Dashboard() {

    return (
        <>
            <Container>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo 
                                source={ { uri:"https://avatars.githubusercontent.com/u/68792232?v=4" } } 
                            />
                            <User>
                                <UserGreeting>Olá,</UserGreeting>
                                <UserName>Rafael</UserName>
                            </User>
                        </UserInfo>

                        <PowerIcon name="power" />
                    </UserWrapper>

                </Header>

                <HighlightCards>
                    <HighlightCard 
                        title="Entradas"
                        amount="R$ 17.400,00"
                        lastTransaction="Última entrada dia 25 de dezembro"
                        type="up"
                    />
                    <HighlightCard 
                        title="Saídas"
                        amount="R$ 1.259,00"
                        lastTransaction="Última saída dia 31 de dezembro"
                        type="down"
                    />
                    <HighlightCard 
                        title="Total"
                        amount="R$ 16.141,00"
                        lastTransaction="01 à 31 de dezembro"
                        type="total"
                    />
                </HighlightCards>

            </Container>
        </>
    );
}

export { Dashboard };