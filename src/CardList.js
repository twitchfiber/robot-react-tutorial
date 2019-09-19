import React from 'react';
import Card from './Card';
const CardList = (props) => {
    // loops through and make an array of card components for each robot
    const robotArray = props.robots.map((user, i) => {
        return <Card
            key={ props.robots[i].id }
            id={ props.robots[i].id }
            name={ props.robots[i].name }
            email={ props.robots[i].email }/>
    })
    return (
        <div>
            { robotArray }
        </div>
    )
}

export default CardList;