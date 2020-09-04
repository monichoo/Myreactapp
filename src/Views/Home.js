import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PhotoCard from '../Components/PhotoCard'

function Home(){

    const url = `https://jsonplaceholder.typicode.com/photos?page=1`
    const [photos, setPhotos] = useState({
        loading:false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() =>{
        setPhotos({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response =>{
                setPhotos({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() =>{
                setPhotos({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(photos.loading){
        content = <p>...loading</p>
    }
    if(photos.error){
        content = <h1>Error or No such Photo</h1>
    }

    if(photos.data){
        content =
            photos.data.map((photo,key) =>
                <div>
                   <PhotoCard 
                        photo={photo}
                   
                   />
                </div>         
            )
    }
    return(
        <div>
            <h1 className="font-bold text-2xl">Photos</h1>
            <p>This page is pulling data from an external api</p>
            {content}
        </div>
    )
}

export default Home