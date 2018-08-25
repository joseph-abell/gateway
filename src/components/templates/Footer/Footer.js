import React from 'react';
import Async from 'react-promise';
import { getData } from '../../../helpers';

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
      <footer>
        <div>
          <div>
            <h3>{contact.title}</h3>
            <address>
              <p>{address.addressLine1}</p>
              <p>{address.addressLine2}, {address.city}</p>
              <p>{address.postcode}</p>
            </address>
          </div>

          <div>
            <h3>{contact.title}</h3>
            <p>{contact.contactNumber}</p>
            <p>{contact.email}</p>
          </div>

          <div>
            <h3>{socialMedia.title}</h3>
          </div>
        </div>

        <ul>
          {credits.map((credit) => (
            <li key={credit}>
              {credit.role} by {credit.links.map((link) => (
                <a key={link.link} href={link.link}>{link.name}</a>
              ))}
            </li>
          ))}
        </ul>
      </footer>
    )}
  />
);

export default FooterTemplate;

