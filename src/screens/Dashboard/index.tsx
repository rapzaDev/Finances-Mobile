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

                <HighlightCards
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={ { paddingHorizontal: 24 } }
                >
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                </HighlightCards>

            </Container>
        </>
    );
}

export { Dashboard };