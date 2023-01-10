import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
        },
      });
        
      return data;
    }