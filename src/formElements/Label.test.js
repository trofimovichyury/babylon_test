import React from 'react';
import { shallow } from 'enzyme';
import { mock } from 'sinon';
import labelStore from '../store/Label'
import Label from './Label';

it('renders children', () => {
    const string = 'Some label';
    const wrapper = shallow(<Label>{string}</Label>);
    expect(wrapper.find('.Label').text()).toEqual(string);
});

it('handles onClick event if there is a for prop', () => {
    const wrapper = shallow(<Label for="some" />);
    const mockedStore = mock(labelStore);
    const expectation = mockedStore.expects('emit');
    wrapper.find('.Label').simulate('click');
    expect(expectation.callCount).toEqual(1);
    mockedStore.restore();
});

it('does not emit if prop is undefined', () => {
    const wrapper = shallow(<Label />);
    const mockedStore = mock(labelStore);
    const expectation = mockedStore.expects('emit');
    wrapper.find('.Label').simulate('click');
    expect(expectation.callCount).toEqual(0);
    mockedStore.restore();
});