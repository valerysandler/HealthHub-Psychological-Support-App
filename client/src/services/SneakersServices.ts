import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://stockx1.p.rapidapi.com/v2/stockx/search',
    params: {
      query: 'CT5053-001',
      limit: '10',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'ae902e88c3mshf8f3f3166313605p193dbajsn1262cd40f92b',
      'X-RapidAPI-Host': 'stockx1.p.rapidapi.com'
    }
  };

console.log(options);

class SneakersService {
    // Get all sneakers from the API
    public async getAllSneakers(){
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
}

const sneakersService = new SneakersService();

export default sneakersService;
