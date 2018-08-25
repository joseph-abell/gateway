import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { getData } from '../../../helpers';

const H3 = styled.h3`
  color: #666;
`;

const Footer = styled.footer`
	background: rgb(180,180,180);
	font-size: 14px;
`;

const Section = styled.section`
  padding: 20px;
`;

const Credits = styled.ul`
  color: #fff;
`;

const CreditLink = styled.a`
  color: #fff;
`;

const Main = styled.div`
  margin-top: 20px;
  line-height: 18px;
  color: white;
`;

const FooterTemplate = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/footer.json');
      const { address, contact, credits, socialMedia } = data;

      resolve({
        address,
        contact,
        credits,
        socialMedia
      });
    })}

    then={({ address, contact, credits, socialMedia }) => (
      <Footer>
        <div>
          <Section>
            <H3>{address.name}</H3>
            <Main>
              <address>
                <p>{address.addressLine1}</p>
                <p>{address.addressLine2}, {address.city}</p>
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

          <Section>
            <H3>{socialMedia.title}</H3>
            <Main />
          </Section>
        </div>

        <Section>
          <Credits>
            {credits.map((credit) => (
              <li key={credit}>
                {credit.role} by {credit.links.map((link) => (
                  <CreditLink key={link.link} href={link.link}>{link.name}</CreditLink>
                ))}
              </li>
            ))}
          </Credits>
        </Section>
      </Footer>
    )}
  />
);

export default FooterTemplate;

