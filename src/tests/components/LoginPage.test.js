import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin(2) on button click', () => {
    const startLoginWithFacebook = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithFacebook={startLoginWithFacebook} />)
    wrapper.find('button').at(1).simulate('click');
    expect(startLoginWithFacebook).toHaveBeenCalled();
});

test('should call startLogin(3) on button click', () => {
    const startLoginWithGithub = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithGithub={startLoginWithGithub} />)
    wrapper.find('button').at(2).simulate('click');
    expect(startLoginWithGithub).toHaveBeenCalled();
});