import React from 'react';
import request from 'request-promise-native';

import Header from '../../components/HeaderContainer';
import Footer from '../../components/FooterContainer';
import Menu from '../../components/Menu';

import './style.css';

const CtaMap = ({ link, title, deck, image }, index) => (
  <li key={index}>
    <a href={link}>
      <h2>{title}</h2>
      <p>{deck}</p>
      <img src={image} alt='' />
    </a>
  </li>
);

const QuoteMap = ({quote, author}, index) => (
  <li key={index}>
    <blockquote>
      <p>{quote}</p>
    </blockquote>
    <p>{author}</p>
  </li>
);

const Description = ({colour, text, image}) => (
  <div>
    <p className={colour}>
      {text}
    </p>
    <div
      className={colour}
      style={{
        backgroundImage: 'url(' + image + ')',
        height: '500px'
      }}
    />
  </div>
);

class Home extends React.Component {
  state = {
    loading: true,
    header: {},
    menu: [],
    cta: [],
    quotes: [],
    deck: {}
  }

  async componentDidMount() {
    const homepageData = JSON.parse(await request(window.location.href + '/data/homepage.json'));
    const menuData = JSON.parse(await request(window.location.href + '/data/menu.json'));

    this.setState({
      loading: false,
      header: homepageData.header,
      menu: menuData.menu,
      cta: homepageData.cta,
      quotes: homepageData.quotes,
      deck: homepageData.deck
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <div>
        <Header text={this.state.header.title} image={this.state.header.image} />
        <Menu menu={this.state.menu} menuColour={this.state.header.menuColour} />
        <ul className='call-to-actions'>
          { this.state.cta.map(CtaMap) }
        </ul>
        <ul className='quotes'>
          { this.state.quotes.map(QuoteMap) }
        </ul>
        <Description
          colour={this.state.deck.colour}
          text={this.state.deck.text}
          image={this.state.deck.image}
        />
        <Footer />
      </div>
    );
  }
};

export default Home;
