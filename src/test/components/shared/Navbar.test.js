import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Navbar from '../../../components/shared/Navbar';


describe('Pruebas en el componente <Navbar />', () => {
    
    const wrapper = shallow( <Navbar />);
    const div = wrapper.find('div');
    test('No debe de retornar la clase nav__black si no pasa los 100px', () => {
        expect(div.prop('className').includes('false')).toBe(true)
        
    })
    
})