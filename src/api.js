import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID gkuAi4fKVqJZn9eydVKLgxGdUtsOJ4Pnka7FKV8skJ0'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;