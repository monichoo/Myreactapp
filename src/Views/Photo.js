import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Photo(){
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const [photo, setPhoto] = useState({
        loading:false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() =>{
        setPhoto({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response =>{
                setPhoto({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() =>{
                setPhoto({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(photo.loading){
        content = <p>...loading</p>
    }
    if(photo.error){
        content = <h1>Error or No such Photo</h1>
    }
  
    if(photo.data){
        content =
            <div>
                <div>
                    <img 
                        src={photo.data.url}
                        alt={photo.data.title} 
                    >                    
                    </img>
                </div>
                
                <div className="font-bold text-xl mb-3">
                    <h1>{photo.data.title}</h1>
                    <h2>id is {id}</h2>
                </div>
                
            </div>
        


    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Photo