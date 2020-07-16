import React from 'react';
import Card from './card.component';


const CardList = ({robots}) => {
    console.log("Cardlist is being rendered")
    const cardComp = robots.map((user,i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
            {cardComp}
        </div>
    );
};

export default CardList;