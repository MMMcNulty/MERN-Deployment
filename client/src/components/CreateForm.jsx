import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';



const CreateForm = () => {
    const [name, setName] = useState("");
    const [image_url, setImage_url] = useState("");
    const [number_of_chests, setNumber_of_chests] = useState(0);
    const [catch_phrase, setCatch_phrase] = useState("");
    const [crew_position, setCrew_position] = useState("");
    const [peg_leg, setPeg_leg] = useState(true);
    const [eye_patch, setEye_Patch] = useState(true);
    const [hook_hand, setHook_hand] = useState(true);
    const [errors, setErrors] = useState([]);

    const [captainExists, setCaptainExists] = useState(false);
    // const [captainError, setCaptainError] = useState([])

    let history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(response => {
                console.log(response.data)
                setCaptainExists(response.data.filter(pirate => pirate.crew_position === "Captain").length > 0)
            })
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captainExists ===true && crew_position === "Captain") {
            setErrors(["There can only be one captain 🏴‍☠️⚓"])
        }
        else {
            axios.post('http://localhost:8000/api/pirates', {
                name,
                image_url,
                number_of_chests,
                catch_phrase,
                crew_position,
                peg_leg,
                eye_patch,
                hook_hand
            })
                .then(res => {
                    console.log(res.data);
                    history.push("/")
                })
                .catch(err => {
                    console.log("Error in the database!!");
                    console.log(err.response.data)

                    const errorResponse = err.response.data.errors
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
        }
    };

    const returnHome = (e) => {
        history.push("/")
    }

    return (
        <div>
            <h2>🦜 Add a Pirate! 🏴‍☠️</h2>
            <button onClick={(e) => { returnHome(e) }}>Crew Board</button>
            {
                errors.map((err, index) => <p key={index}>{err}</p>)
            }
            <form class="form" onSubmit={e => handleSubmit(e)}>
                <label>Pirate Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Add an Image URL:</label>
                <input type="text" onChange={(e) => setImage_url(e.target.value)} value={image_url}></input>
                <label># of Treasure Chests:</label>
                <input type="number" onChange={(e) => setNumber_of_chests(e.target.value)} min="0" value={number_of_chests}></input>
                <br />
                <label>Pirate Catch Phrase:</label>
                <input type="text" onChange={(e) => setCatch_phrase(e.target.value)} value={catch_phrase}></input>
                <label>Crew Position:</label>
                <select onChange={(e) => setCrew_position(e.target.value)} value={crew_position}>
                    <option value="choose">Choose a Position</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
                <label>Peg Leg:</label>
                <input type="checkbox" onChange={(e) => setPeg_leg(e.target.checked)} checked={peg_leg}></input>
                <label>Eye Patch:</label>
                <input type="checkbox" onChange={(e) => setEye_Patch(e.target.checked)} checked={eye_patch}></input>
                <label>Hook Hand:</label>
                <input type="checkbox" onChange={(e) => setHook_hand(e.target.checked)} checked={hook_hand}></input>
                <input type="submit" value="Add Pirate" />
            </form>
        </div>
    )
}

export default CreateForm
