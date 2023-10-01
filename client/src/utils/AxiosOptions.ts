import { AxiosRequestConfig } from "axios";

class AxiosOptions {
    public static getOptions(url: string): AxiosRequestConfig {
        return {
            method: 'GET',
            baseURL: 'https://the-sneaker-database.p.rapidapi.com' + url,
            timeout: 10000,
            headers: {
                'X-RapidAPI-Key': '8ac2e272a7msh543d2d9ead59827p10f679jsn2acae8711453',
                'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
            }

        };
    }
}

export default AxiosOptions;