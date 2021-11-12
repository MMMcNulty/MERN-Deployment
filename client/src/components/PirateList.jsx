import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const PirateList = () => {
    const [pirateList, setPirateList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(response => {
                console.log(response.data)
                setPirateList(response.data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
            })
            .catch(err => console.error(err));
    }, []);

    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8000/api/pirates/' + pirateId)
            .then(response => {
                console.log(response.data);
                history.push("/")
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td><h1>Pirate Crew</h1></td>
                    </tr>
                </thead>
                <tbody>
                    {pirateList.map((pirate, index) => {
                        return (
                            <tr key={index}>
                                <td><img src={pirate.image_url} width="200" height="200"  alt="{name}"></img></td>
                                <td>{pirate.name}</td>
                                <td>
                                    <button onClick={() => { history.push('/api/pirates/' + pirate._id) }}> View Pirate</button>
                                    <button onClick={(e) => { deletePirate(pirate._id) }}>Walk The Plank</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PirateList
