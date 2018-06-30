import React from 'react';
import Header from '../../components/HeaderContainer';
import Footer from '../../components/FooterContainer';
import Menu from '../../components/Menu';
import { url } from '../../config.js';

import './style.css';

const CtaMap = ({ link, title, deck, image }, index) => (
  <li key={index}>
    <a href={link}>
      <h2>{title}</h2>
      <p>{deck}</p>
      <img src={url + image} alt='' />
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
        backgroundImage: 'url(' + url + image + ')',
        height: '500px'
      }}
    />
  </div>
);

const Loading = () => (
  <div className='loading'>Loading</div>
);

class Home extends React.Component {
  state = {
    loading: true,
    header: {
      title: '',
      image: '',
      menuColour: ''
    },
    menu: {
      menuItems: [],
      iconUrl: ''
    },
    cta: [],
    quotes: [],
    deck: {
      text: '',
      colour: '',
      image: ''
    }
  }

  async componentDidMount() {
    const homepageResponse = await fetch(url + 'data/homepage.json');
    const homepageData = await homepageResponse.json();

    const iconResponse = await fetch(url + 'data/logos/' + homepageData.header.menuColour + '.json');
    const iconData = await iconResponse.json();

    const iconUrl = url + iconData.image.slice(1);

    const menuResponse = await fetch(url + 'data/menu.json');
    const menuData = await menuResponse.json();

    this.setState({
      loading: false,
      header: homepageData.header,
      menu: {
        menuItems: menuData.menu,
        iconUrl
      },
      cta: homepageData.cta,
      quotes: homepageData.quotes,
      deck: homepageData.deck
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <Header text={this.state.header.title} image={url + this.state.header.image} />
        <Menu
          menuItems={this.state.menu.menuItems}
          menuColour={this.state.header.menuColour}
          iconUrl={this.state.menu.iconUrl}
        />
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
