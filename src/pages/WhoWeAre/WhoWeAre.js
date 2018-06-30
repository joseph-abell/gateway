import React from 'react';
import { url } from '../../config';

import Header from '../../components/HeaderContainer';

const Loading = () => (
  <div>Loading</div>
);

class WhoWeAre extends React.Component {
  state = {
    loading: true,
    header: {
      title: '',
      image: '',
      menuColour: ''
    }
  }

  async componentDidMount() {
    const whoWeAreResponse = await fetch(url + 'data/pages/who-we-are.json');
    const { title, header } = await whoWeAreResponse.json();
    const { image, menuColour } = header;

    this.setState({
      loading: false,
      header: {
        title,
        image,
        menuColour
      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <Header text={this.state.header.title} image={url + this.state.header.image} />
    );
  }
}

export default WhoWeAre;
