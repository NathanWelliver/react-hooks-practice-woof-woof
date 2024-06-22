import React from "react";

function DogBar({ doggos, onSelectDog }){

    const displayDoggos = doggos.map((dog) => (
        <span key={dog.id} onClick={() => onSelectDog(dog)}>
          {dog.name}
        </span>
    ));

    return (
        <>
            {displayDoggos}
        </>
    );
}

export default DogBar;