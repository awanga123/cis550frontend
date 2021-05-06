import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { axiosInstance } from '../axios';
import { Modal } from './Modal';
import '../styles/landing.scss';
import '../styles/urgentdental.scss';

export const Head2Head = () => {
    const [complete, setComplete] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [opponentName, setOpponentName] = useState('');
    const [wins, setWins] = useState('');
    const [losses, setLosses] = useState('');
    const [games, setGames] = useState([]);
 
    const submitForm = async () => {
        const res = await axiosInstance.get(
            `/head2head/record/${teamName}&${opponentName}`
        );
        console.log(res.data);
        console.log(res.data[0]['Team1Wins']);
        console.log(res.data[0]['Team2Wins']);
        setWins(res.data[0]['Team1Wins']);
        setLosses(res.data[0]['Team2Wins']);

        const res2 = await axiosInstance.get(
            `/head2head/games/${teamName}&${opponentName}`
        );
        console.log(res2.data);
        setGames(res2.data);

        setComplete(true);
    };

    const form = () => {
        return (
            <div className="column">
                <div className="form">
                    <div className="row1">
                        <h1 className="is-bold is-white is-center-horizontal pad-bottom">
                            Have a favorite Matchup? Let's see how these two teams stack up!
                        </h1>
                    </div>
                    <div className="row2">
                        <h5 className="is-bold is-darkblue is-center-horizontal pad-bottom-double">
                            Input the two teams below: 
                        </h5>
                    </div>
                    <div className="level row3">
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className={`input is-large`}
                                        type="text"
                                        placeholder="First Team Name ie. Duke"
                                        value={teamName}
                                        onChange={(e) =>
                                            setTeamName(e.target.value)
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="field-body pad-left">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className={`input is-large`}
                                        type="text"
                                        placeholder="Second Team Name ie. Baylor"
                                        value={opponentName}
                                        onChange={(e) =>
                                            setOpponentName(e.target.value)
                                        }
                                    />
                                </p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="is-center-horizontal column pad-top-double">
                    <button className="button is-medium is-white">
                        <h5 className="is-bold is-black" onClick={submitForm}>
                            Submit
                        </h5>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div id="landing-page">
            <Helmet>
                <title>NCAA Scorigami</title>
            </Helmet>
            <div className="top is-main-bkg pad-top-half">
                <div className="level">
                    <div className="level-left pad-bottom-half pad-right-half">
                        <a href="/">
                            <img
                                className="logo"
                                alt="NCAA"
                                src="/ncaa.png"
                            />
                        </a>
                        <h1 className="is-bold is-italic is-ncaablue pad-top pad-left-half">
                            Scorigami
                        </h1>
                    </div>
                    <div className="level-right pad-bottom-half pad-right-half">
                        <div className="pad-right-double">
                            <Link to="/head2head">
                                <h3 className="is-bold is-ncaablue">
                                    Head2Head
                                </h3>      
                            </Link>
                        </div>
                        <div className="pad-right-double">
                            <Link to="/boxscore">
                                <h3 className="is-bold is-ncaablue">
                                    BoxScore
                                </h3>      
                            </Link>
                        </div>
                        <div className="pad-right-double">
                            <Link to="/biggestrival">
                                <h3 className="is-bold is-ncaablue">
                                    Rival
                                </h3>      
                            </Link>
                        </div>
                        <div className="pad-right-double">
                            <Link to="/scoregami">
                                <h3 className="is-bold is-ncaablue">
                                    Scorigami
                                </h3>      
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="body lightblue">
                <div className="container">
                    <div className="columns">
                        {!complete ? form() : form()}
                    </div>
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Wins: {wins}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Losses: {losses}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body main">
                <div className="container">
                        {games.map((item, idx) => (
                            <div className="columns">
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['Season']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['WScore']} - {item['LScore']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        Winner: {item['WinTeam']}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};
