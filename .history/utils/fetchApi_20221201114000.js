import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
          
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '26e48f7087msh2136643a62e2b5ap1adbfajsn0039aa3abc20',
        },
      });
        
      return data;
    }