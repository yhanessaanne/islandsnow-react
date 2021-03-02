import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, Input, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

const logo = "http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-logo.png"

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src={logo} centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Menu horizontal borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text='MEN'>
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='WOMEN'>
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='KIDS'>
            <Dropdown.Menu>
              <Dropdown.Item>Shirts</Dropdown.Item>
              <Dropdown.Item>Onesies</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <Dropdown item text='BRANDS'>
            <Dropdown.Menu>
              <Dropdown.Item>Hawaii Domestic Market</Dropdown.Item>
              <Dropdown.Item>Herschel Supply Co.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <Menu.Item
                name='SALE'
                active={activeItem === 'SALE'}
                onClick={this.handleItemClick}
            >
              SALE
            </Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

const middleImage = "http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-video-snapshot.png";

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src={middleImage} fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid centered container columns={3}>
            <Grid.Column>
              <List items={['About us', 'Store locations', 'Employment', 'Videos', 'Shipping & Returns', 'Terms & Conditions', 'Privacy Policy']} />
            </Grid.Column>
            <Grid.Column>
              <List items={['Men', 'Women', 'Kids', 'Brands', 'Sales']} />
            </Grid.Column>
            <Grid.Column>
              <List.Item>Join our mailing list for updates</List.Item>
              <List.Item>Sign up to receive our email updates</List.Item>
              <List.Item>
                <Input action={{
                  color: 'black',
                  content: 'Join',
                }}
                       actionPosition='right'
                       placeholder='Enter email address'
                />
              </List.Item>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));