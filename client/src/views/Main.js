import React from 'react'
import '../App.css'
import PirateList from '../components/PirateList'
import { useHistory } from 'react-router';


const Main = () => {

    let history = useHistory();

    return (
        <div class="main-content">
            <header>
                <button onClick={() => { history.push('/api/pirates/new') }}> Add Pirate</button>
            </header>
            <PirateList />
        </div>
    )
}

export default Main
