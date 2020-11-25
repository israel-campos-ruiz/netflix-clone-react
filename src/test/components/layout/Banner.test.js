import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Banner from '../../../components/layout/Banner';

function truncate(str,n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}
describe('Pruebas en el componente <Banner />', () => {
    const wrapper = shallow(<Banner />);
    test('debe hacer crear el snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

   test('Debe de cortar el parrafo con la cantidad de caracteres que le pasemos', () => {
      expect(truncate('palabra',6)).toBe('palab...')
   });
   
});