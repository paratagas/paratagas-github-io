import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallow } from 'enzyme';
import MainMenu from '../index';

describe('<MainMenu />', () => {
  it('should render some routes', () => {
    const renderedComponent = shallow(<MainMenu />);
    expect(renderedComponent.find(NavLink).length).toBe(3);
  });
  it('contains correct passed prop', () => {
    const renderedComponent = shallow(<MainMenu />);
    expect(renderedComponent.find(NavLink).first().props().to).toEqual("/home");
  });
});
