import React, {useEffect, useState} from 'react';
import TinderCard from "react-tinder-card";
import database from "./Firebase";
import "./TinderCards.css";


function TinderCards() {
    const [people, setPeople] = useState([]);

    // Piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs...
        database
            .collection("people")
            .onSnapshot((snapshot) =>
                setPeople(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    // BAD
    // const people = [];
    // people.push('park', 'yen')

    // GOOD (Push to an array in REACT)
    // setPeople([...people, 'park', 'yen'])


    /* Always give KEYS in REACT
    Benefits

    * Allows REACT to efficiently re-render a LIST
    * Makes your APP SUPER fast ALWAYS do this in REACT
    */

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}


export default TinderCards