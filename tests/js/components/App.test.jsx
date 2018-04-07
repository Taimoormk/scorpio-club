// ########## Import Dependencies Here ##########
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// ########## Import Components Here ##########
import { App } from '../../../src/js/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  let initialLoadData,
    activateModalAction,
    deactivateModalAction,
    toggleModal,
    heroData,
    promoData,
    fromOurScorpios,
    someNotableScorpios,
    becomeOneOfUs,
    letsBeInTouch,
    footer,
    wrapper;

  beforeEach(() => {
    initialLoadData = [
      { sectionHeading: "Scorpio Club", sectionLine1: "Scorpio is the best sign ever!", sectionLine2: "Join us to know all the reasons WHY!", sectionButtonText: "let me in" }, 
      { promoPosts: [ { postTitle: "The Problem Solver1", postImage: "./images/scorpio-club-promo-1.png", postDescription: "In a fix or deep trouble? As a Scorpio for help! Yes, Scorpio have an uncanny ability to work out solutions from scratch." }, { postTitle: "The Problem Solver1", postImage: "./images/scorpio-club-promo-1.png", postDescription: "In a fix or deep trouble? As a Scorpio for help! Yes, Scorpio have an uncanny ability to work out solutions from scratch." }, { postTitle: "The Problem Solver1", postImage: "./images/scorpio-club-promo-1.png", postDescription: "In a fix or deep trouble? As a Scorpio for help! Yes, Scorpio have an uncanny ability to work out solutions from scratch." }, { postTitle: "The Problem Solver1", postImage: "./images/scorpio-club-promo-1.png", postDescription: "In a fix or deep trouble? As a Scorpio for help! Yes, Scorpio have an uncanny ability to work out solutions from scratch." } ] }, 
      { sectionHeading: "From Our Scorpios", sectionLine1: "With our drag and drop system you can create pages in minutes!", sectionLine2: "Another line lets see how it looks like", sectionButtonText: "see more" }, 
      { sectionHeading: "Some Notable Scorpios", sectionLine1: "With our drag and drop system you can create pages in minutes!", sectionLine2: "Another line lets see how it looks like", sectionButtonText: "see more" }, 
      { sectionHeading: "Become One Of Us", sectionLine1: "Society excited by cottage private an it esteems. Fully begin on by wound an.", sectionLine2: "Girl rich in do up or both. At declared in as rejoiced of together.", sectionButtonText: "see more" }, 
      { sectionHeading: "Lets be in Touch", sectionLine1: "Society excited by cottage private an it esteems. Fully begin on by wound an.", sectionLine2: "Girl rich in do up or both. At declared in as rejoiced of together.", sectionButtonText: "see more" }, 
      { sectionHeading: "Scorpio Club", sectionPara: "© 2018 Scorpio Club | All rights reserved." }
    ];
    activateModalAction = jest.fn();
    deactivateModalAction = jest.fn();
    toggleModal = { modalActive: false };
    heroData = initialLoadData[0];
    promoData = initialLoadData[1].promoPosts[0];
    fromOurScorpios = initialLoadData[2];
    someNotableScorpios = initialLoadData[3];
    becomeOneOfUs = initialLoadData[4];
    letsBeInTouch = initialLoadData[5];
    footer = initialLoadData[6];
    wrapper = shallow(
      <App
        initialLoadData={initialLoadData}
        activateModalAction={activateModalAction}
        deactivateModalAction={deactivateModalAction}
        toggleModal={toggleModal}
        promoData={promoData}
        fromOurScorpios={fromOurScorpios}
        someNotableScorpios={someNotableScorpios}
        becomeOneOfUs={becomeOneOfUs}
        letsBeInTouch={letsBeInTouch}
        footer={footer}
      />
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('passes on activateModalAction', () => {
    expect(activateModalAction.mock.calls.length).toBe(0);
  });
  it('passes on deactivateModalAction', () => {
    expect(deactivateModalAction.mock.calls.length).toBe(0);
  });
});