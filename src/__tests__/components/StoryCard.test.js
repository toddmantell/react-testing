import React from 'react';
import StoryCard from '../../app/components/StoryCard';


describe('StoryCard', () => {
	it('should render with 3 divs and an h2', () => {
		//arrange
		const props = {title: 'Fake Story', byline: 'by Todd Mantell', content: 'Lorem ipsum'}

		//act
		const shallowRenderedStoryCard = shallow(<StoryCard {...props} />)

		//assert
		expect(shallowRenderedStoryCard.find('div').length).toEqual(3)
		expect(shallowRenderedStoryCard.find('h2').length).toEqual(1)
	});
});
