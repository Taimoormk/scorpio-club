import React from 'react';
import { Feed, Segment } from 'semantic-ui-react';

const image = './images/bill-gates.jpg';
const date = '3 days ago';
const summary = 'Helen Troy added 2 photos';
const extraImages = [
  './images/bill-gates.jpg',
  './images/bill-gates.jpg',
];

const SideFeed = () => (
  <Segment>
    <Feed>
      <Feed.Event
        image={image}
        date={date}
        summary={summary}
        extraImages={extraImages}
      />
      <Feed.Event>
        <Feed.Label image={image} />
        <Feed.Content date={date} summary={summary} extraImages={extraImages} />
      </Feed.Event>
      <Feed.Event>
        <Feed.Label image={image} />
        <Feed.Content>
          <Feed.Date content={date} />
          <Feed.Summary content={summary} />
          <Feed.Extra images={extraImages} />
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </Segment>
)

export default SideFeed;