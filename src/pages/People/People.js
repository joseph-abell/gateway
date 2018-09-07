import React from 'react';
import Async from 'react-promise';
import { getData, getMenuColour } from '../../helpers';

const People = () => (
	<Async
		promise={new Promise(async (resolve) => {
			const data = await getData('/data/pages/people.json');
			const menuColour = getMenuColour(data);
			resolve();
		})}
		then={() => (
			<div></div>
		)}
	>
	
	</Async>	
);

export default People;
