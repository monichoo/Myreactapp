import React from 'react'

function PhotoCard(props){
    return(
        <div className="border mb-4 rounded overflow-hidden">
            <div
                style={{
                    'backgroundImage': `url('${props.photo.thumbnailUrl}')`
                }}
                className="w-full h-64 bg-blue bg-cover"
            >

            </div>
            {props.photo.title}
            {props.photo.id}
        </div>
    )
}

export default PhotoCard