import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from '../router';
import Container from '../components/Container';
import Clearfix from '../components/Clearfix';
import {getData, getFullUrl} from '../helpers';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const H3 = styled.h3`
  color: #666;
`;

const Footer = styled.footer`
  background: rgb(180, 180, 180);
  font-size: 14px;
`;

const Section = styled.section`
  padding: 20px;

  @media screen and (min-width: 991px) {
    width: calc(30% - 20px);
    float: left;
    margin-right: 20px;
  }
`;

const Credits = styled.ul`
  color: #fff;
  margin-bottom: 20px;
  margin-left: 20px;

  a {
    color: #fff;
  }
`;

const Credit = styled.li`
  padding-bottom: 5px;
`;

const Main = styled.div`
  margin-top: 20px;
  line-height: 18px;
  color: white;
`;

const SocialMediaItem = styled.li`
  display: inline-block;
  margin-right: 50px;

  & a {
    display: block;
  }
`;

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 53.954981, lng: -1.124655}}
      key="AIzaSyAM-NvLRlF1XXUKnPCoRKWfuuodqKuvBso"
    >
      <Marker position={{lat: 53.954981, lng: -1.124655}} />
    </GoogleMap>
  ))
);

const FooterTemplate = () => {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState({});
  const [contact, setContact] = useState('');
  const [credits, setCredits] = useState([]);
  const [socialMedia, setSocialMedia] = useState({});
  useEffect(() => {
    getData('data/footer.json').then(data => {
      setAddress(data.address);
      setContact(data.contact);
      setCredits(data.credits);
      setSocialMedia(data.socialMedia);
      setLoading(false);
    });
  }, []);

  if (loading) return <div />;

  return (
    <Footer>
      <Container>
        <Section>
          <H3>{address.name}</H3>
          <Main>
            <address>
              <p>{address.addressLine1}</p>
              <p>
                {address.addressLine2}, {address.city}
              </p>
              <p>{address.postcode}</p>
            </address>
          </Main>
        </Section>

        <Section>
          <H3>{contact.title}</H3>
          <Main>
            <p>{contact.contactNumber}</p>
            <p>{contact.email}</p>
          </Main>
        </Section>
      </Container>

      <Container>
        <Section>
          <H3>{socialMedia.title}</H3>
          <Main>
            <ul>
              {socialMedia.list &&
                socialMedia.list.map(item => (
                  <SocialMediaItem key={item.link}>
                    <a href={item.link}>
                      <img src={getFullUrl(item.image)} />
                    </a>
                  </SocialMediaItem>
                ))}
            </ul>
          </Main>
        </Section>
      </Container>
      <Clearfix />

      <Container>
        <Credits>
          {credits.map(credit => (
            <Credit key={JSON.stringify(credit)}>
              {credit.role} by{' '}
              {credit.links.map((link, index) => {
                let l = link.link;
                if (!l.includes('http')) {
                  l = `http://${l}`;
                }

                if (index + 1 === credit.links.length) {
                  return (
                    <Link href={l} key={l}>
                      <a>{link.name}</a>
                    </Link>
                  );
                }

                if (index + 1 === credit.links.length - 1) {
                  return (
                    <span key={l}>
                      <Link href={l}>
                        <a>{link.name}</a>
                      </Link>
                      {' and '}
                    </span>
                  );
                }

                return (
                  <span key={l}>
                    <Link href={l}>
                      <a>{link.name}</a>
                    </Link>
                    {', '}
                  </span>
                );
              })}
            </Credit>
          ))}
        </Credits>
      </Container>

      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAM-NvLRlF1XXUKnPCoRKWfuuodqKuvBso&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div />}
        containerElement={<div style={{height: `150px`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
    </Footer>
  );
};

export default FooterTemplate;
