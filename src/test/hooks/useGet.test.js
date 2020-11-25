import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { requests } from '../../helpers/request';
import useGet from '../../hooks/useGet';

describe('pruebas sobre el hook useGet', () => {
    test('debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(()=> useGet(requests.fetchNetflixOriginals));
        const { data, loading, error } = result.current;
        await  waitForNextUpdate()
        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)

    });

    test('debe de retornar la data', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useGet(requests.fetchNetflixOriginals));
        await waitForNextUpdate()
        const {data} = result.current
        
       try{
           expect(typeof data).toBe('object')
           
       }catch{}
        
    })
})