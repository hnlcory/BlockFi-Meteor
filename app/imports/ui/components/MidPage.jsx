import React from 'react';
import { Grid, Container, Header, Button, Image } from 'semantic-ui-react';

export default class MidPage extends React.Component {
  render() {
    return (
      <Container className='ui header'>
        <Grid centered divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>

              <Header as='h1' style={{ fontSize: '70px', paddingTop: '80px' }}>Buy, sell, and earn crypto</Header>
              <Header as='h2' style={{ fontSize: '15px' }}>The BlockFi Rewards Credit Card lets you earn up to 3.5%* back in crypto on
                  every purchase</Header>

              <Button className='ui button font type-blue'>Get Started</Button>

              <Header as='h1' style={{ fontSize: '12px' }}>*3.5% is an introductory offer that spans the first 90 days of card
                  ownership, beginning on the date of card activation. The introductory offer is capped at $100 dollars
                  in
                  bitcoin.</Header>
            </Grid.Column>

            <Grid.Column>
              <Image
                src='https://images.ctfassets.net/d890uw7wrbwb/3auoqIvXyfLwWMhJuoglnc/a1acda8f7c34a7b5effc698305a106ca/header-wallet_2.png'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

    );
  }
}
