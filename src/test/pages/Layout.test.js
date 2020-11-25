import React from 'react';
import '@testing-library/jest-dom';
import Layout from '../../pages/Layout';
import { shallow } from 'enzyme';
import useGet from '../../hooks/useGet';
jest.mock('../../hooks/useGet');

describe('pruebas en el componente <LayoutScreen />', () => {
    test('Debe de hacer match con el snapshot cuando esta cargando la data con un loader en true', () => {
        useGet.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });
        const wrapper = shallow(<Layout/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Loader').exists()).toBe(true)
    })

    test('Debe de crear un segundo snapshot pero con datos', () => {
        const data =  {
            id: 63174,
            popularity: 572.958,
            vote_count: 6449,
            name: 'Lucifer',
            first_air_date: '2016-01-25',
            backdrop_path: '/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg',
            overview: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
            genre_ids: [Array],
            original_name: 'Lucifer',
            original_language: 'en',
            vote_average: 8.5,
            poster_path: '/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg',
            origin_country: [Array]
          }
        useGet.mockReturnValue({
            data,
            loading:false,
            error:null
        })
          const wrapper = shallow(<Layout/>);
          expect(wrapper).toMatchSnapshot()
          expect(wrapper.find('div').at(1).exists()).toBe(true)
    });
   
})
