import React from 'react'

export default function GifCard(props){

    return (
        props.gifs.map((gif, i )=> {
            let getClassName = () => {return "div"+(i)}
            return(
                    <div className={getClassName()}>
                        <img className="individual-gif" src={gif.image_url} alt="a gif" />
                    </div>
            )
        })
    )
}
