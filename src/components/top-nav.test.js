import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it ('Renders without crashing', () =>{
		shallow(<TopNav />);
	});

	it ('Should start a new game onNewGame', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onNewGame = {callback} />);
		const link = wrapper.find('.new');
		link.simulate('click', {
			preventDefault() {}
		});
		expect(callback).toHaveBeenCalled();
	});

	it('Should call onInfo when info is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback} />);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

});