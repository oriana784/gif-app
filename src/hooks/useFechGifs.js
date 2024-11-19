import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = (category) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImagen = await getGifs(category);
        setImages(newImagen);
        setIsLoading(false);

    }
    useEffect(() => {

        getImages();
    }, [])

    return {
        images,
        isLoading
    }

}
