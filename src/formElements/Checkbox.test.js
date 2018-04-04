import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import labelStore from '../store/Label'
import Checkbox from './Checkbox';

it('renders unchecked class if isChecked is false', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('span').hasClass('Checkbox-unchecked')).toEqual(true);
});

it('renders checked class if isChecked is true', () => {
    const wrapper = shallow(<Checkbox />);
    wrapper.setState({ isChecked: true });
    expect(wrapper.find('span').hasClass('Checkbox-checked')).toEqual(true);
});

it('emit handler on click if there is an id prop', () => {
    const wrapper = shallow(<Checkbox id="some" />);
    const mockedStore = mock(labelStore);
    const expectation = mockedStore.expects('emit');
    wrapper.find('.Checkbox').simulate('click');
    expect(expectation.callCount).toEqual(1);
    mockedStore.restore();
});

it('does not emit handler on click if id prop is undefined', () => {
    const wrapper = shallow(<Checkbox />);
    const mockedStore = mock(labelStore);
    const expectation = mockedStore.expects('emit');
    wrapper.find('.Checkbox').simulate('click');
    expect(expectation.callCount).toEqual(0);
    mockedStore.restore();
});

it('adds a listener if there is an id prop', () => {
    const mockedStore = mock(labelStore);
    const expectation = mockedStore.expects('addListener');
    shallow(<Checkbox id="some" />);
    expect(expectation.callCount).toEqual(1);
    mockedStore.restore();
});

it('does not add a listener if there is no id prop', () => {
    const mockedStore = mock(labelStore);
    const expectation = mockedStore.expects('addListener');
    shallow(<Checkbox />);
    expect(expectation.callCount).toEqual(0);
    mockedStore.restore();
});