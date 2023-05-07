import { useEffect, useState } from "react";
import axios from "axios";

const ApiKey = "e02aafaa89ea5063c395b68b30e0fa24";
const UserID = "195532722@N02";
const empty = [];

export default function getFetch(photoSetID) {

    const photosetGetData = {
        method: "flickr.photosets.getPhotos",
        api_key: ApiKey,
        photoset_id: photoSetID,
        user_id: UserID,
        extras: "original_format",
        format: 'json',
        nojsoncallback: 1,
    };

    let parameters = new URLSearchParams(photosetGetData);

    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log(`https://api.flickr.com/services/rest/?${parameters}`)
        axios
            .get(`https://api.flickr.com/services/rest/?${parameters}`)
            .then((response) => {
                setData(response.data);
                // console.log("response.data");
                // console.log(response.data);
            })
            .catch((err) => {
                setError(err);
                console.error(`Error: ${error}`)
            })
            .finally(() => {
                setLoaded(true);
            });
    }, []);

    if ((data != []) && (loaded)) {
        // console.log("datass");
        // console.log(data.photoset.photo);
        data.photoset.photo.forEach(object => {
            const photoSizeGetSize = {
                method: "flickr.photos.getSizes",
                api_key: ApiKey,
                photo_id: object.id,
                format: 'json',
                nojsoncallback: 1,
            };
            let parameters = new URLSearchParams(photoSizeGetSize);
            axios
                .get(`https://api.flickr.com/services/rest/?${parameters}`)
                .then((response) => {
                    object.width = response.data.sizes.size.find(({ label }) => label === "Original").width;
                    object.height = response.data.sizes.size.find(({ label }) => label === "Original").height;
                    // console.log("h: " + object.height);
                })
        });
        // console.log("full array");
        // console.log(data);
        return { data, loaded };
    } else {
        return { empty, loaded, error }
    };
}