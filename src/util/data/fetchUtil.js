const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        if (response.status !== 200)
            return 'error';
        return await response.json();
    } catch (e) {
        new Error(`Failed to fetch data from: ${url}`);
    }
};

export default fetchData;