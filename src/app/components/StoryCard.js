import React from 'react';

const StoryCard = ({title, byline, story}) => (
	<main>
		<div><h2>{title}</h2></div>
		<div>{byline}</div>
		<div>{story}</div>
	</main>
)

export default StoryCard