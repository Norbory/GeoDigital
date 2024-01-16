import { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';

interface Image {
    id: string;
    url: string;
}


const Images = (query: string) => {
    const [images, setImages] = useState<Image[]>([]);
    const options = {
        method: 'GET',
        url: 'https://real-time-image-search.p.rapidapi.com/search',
        params: {
          query: "ola",
          region: 'us'
        },
        headers: {
          'X-RapidAPI-Key': '3255a56dc0mshe9c14eb7fb29838p1fe828jsn894da3e3435d',
          'X-RapidAPI-Host': 'real-time-image-search.p.rapidapi.com'
        }
      };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<Image[]> = await axios.request(options);
                if(response.data){
                    setImages(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
          fetchData();}
        }, [query]);

    return { images };
}

export  default Images;