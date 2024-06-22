import React from "react";

function DogInfo({ dog }){
    if(!dog){
        return <div>Select a dog to see more information!</div>
    }

    return (
        <div>
            <img src={dog.image}/>
            <h4>{dog.name}</h4>
            <button>{dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    );
}

export default DogInfo;