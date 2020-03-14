import fetchMock from 'fetch-mock';
import fetchData from '../fetchUtil';

describe('- fetchUtil', () => {
    beforeEach(() => {
        global.fetch = fetch;
    });
    afterEach(() => {
        fetchMock.restore();
    });

    it('- should return data on successful fetch', async () => {
        fetchMock.mock('/url', {
            data: 'response'
        });

        const response = await fetchData('/url');

        expect(response).toMatchObject({
            data: 'response'
        });
    });

    it('- should return error on unsuccessful fetch', async () => {
        fetchMock.mock('/url', 500);

        const response = await fetchData('/url');

        expect(response).toBe('error');
    });

    it('- should return error is 404', async () => {
        fetchMock.mock('/url', 404);

        const response = await fetchData('/url');

        expect(response).toBe('error');
    });
});