import React from 'react'
import { Link } from 'react-router-dom'

function PhotoCard(props){
    return(
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/photos/${props.photo.id}`}>
                <div
                    style={{
                        'backgroundImage': `url('${props.photo.thumbnailUrl}')`
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >

                </div>
            </Link>
            <div className="p-3">
                <h1 className="font-bold text-xl mb-3">
                    <Link to={`/photos/${props.photo.id}`}>
                        {props.photo.title}
                    </Link>
                    {props.photo.id}
                </h1>
            </div>
        </div>
    )
}

export default PhotoCard