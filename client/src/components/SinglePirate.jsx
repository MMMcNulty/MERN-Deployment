import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';


const SinglePirate = () => {
    const [pirate, setPirate] = useState({});
    const { id } = useParams();

    let history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(response => {
                console.log(response.data);
                setPirate(response.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    const returnHome = (e) => {
        history.push("/")
    }


    return (
        <div>
            <button onClick={(e) =>{returnHome(e)}}>Crew Board</button>
            <h1>{pirate.name}</h1>
            <img src={pirate.image_url} width="200" height="200"  alt="{name}"></img>
            <h2>"{pirate.catch_phrase}"</h2>
            <table>
                <thead>
                    <tr>
                        <td><h4>About:</h4></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Position:</td>
                        <td>{pirate.crew_position}</td>
                    </tr>
                    <tr>
                        <td>Treasures:</td>
                        <td>{pirate.number_of_chests}</td>
                    </tr>
                    <tr>
                        <td>Peg Leg:</td>
                        <td>{pirate.peg_leg ? "yes" : "no"}</td>
                    </tr>
                    <tr>
                        <td>Eye Patch:</td>
                        <td>{pirate.eye_patch ? "yes" : "no"}</td>
                    </tr>
                    <tr>
                        <td>Hook Hand:</td>
                        <td>{pirate.hook_hand ? "yes" : "no"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SinglePirate
