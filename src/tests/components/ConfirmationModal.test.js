import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

test('should correctly render ConfirmationModal', () => {
    const wrapper = shallow(<ConfirmationModal />);
    expect(wrapper).toMatchSnapshot();
});

