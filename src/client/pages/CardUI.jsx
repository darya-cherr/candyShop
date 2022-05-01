import React from 'react';
import "./card-style.css"

const Card= props =>{
    return(
        <div className={"card text-center"}>
            <div className={"overflow"}>
                <img src={props.imgsrc} className={"card-img-top"}/>
            </div>
            <div className={"card-body text-dark"}>
                <h3 className={"card-title text-decoration-underline"}>{props.title}</h3>
                <h4 className={"card-title"}>{props.sectitle}</h4>
                <p className={"card-text text-secondary"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas magna at portitor.</p>
            </div>
        </div>
    );
}

export default Card;