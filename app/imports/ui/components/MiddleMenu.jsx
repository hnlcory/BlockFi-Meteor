import React from 'react';
import { Header, Container, Grid, Image, Button } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
      <div className='cardpage'>
        <Container>
          <Grid centered divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>

                <Image
                  src='https://images.ctfassets.net/d890uw7wrbwb/1hqrUVj664rVFtjpd2zsZL/8184769d10bcf52d1ce4da1b663d0c00/Homepage-Card.png'
                  floated='left'/>

              </Grid.Column>

              <Grid.Column>
                <Header as='h1' style={{ fontSize: '56px' }}>*Over $15 million in crypto paid in rewards to date and no annual fees**</Header>

                <Header as='h2' style={{ fontSize: '22px' }}>Earn rewards in Bitcoin, Ethereum, and more with the BlockFi Rewards Credit Card. See
                    if
                    you’re approved with no impact to your credit.***</Header>
                <Button floated='left' className='ui button font type-blue'>Get Your Card</Button>
                <Button className='ui button font type-yellow'>Learn More</Button>

                <Header as='h3' style={{ fontSize: '12px' }}>***A soft credit pull happens before you’ve accepted the credit card offer. A hard
                    credit pull occurs when you’ve accepted your credit card offer, which can have an impact on your
                    credit score.</Header>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
