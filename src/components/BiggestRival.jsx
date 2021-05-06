import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { axiosInstance } from '../axios';
import { Modal } from './Modal';
import '../styles/landing.scss';
import '../styles/urgentdental.scss';

export const BiggestRival = () => {
    const [complete, setComplete] = useState(false);
    const [team, setTeam] = useState('');
    const [rivals, setRivals] = useState([]);
    const [num, setNum] = useState(0);
    const [def, setDefault] = useState(true);
  
    const submitForm = async () => {
        const res = await axiosInstance.get(
            `/rival/${team}`
        );
        console.log(res.data);
        setRivals(res.data);
        if (num != 0) {
            setDefault(false);
        }
        setComplete(true);
    };

    const form = () => {
        return (
            <div className="column">
                <div className="form">
                    <div className="row1">
                        <h1 className="is-bold is-white is-center-horizontal pad-bottom">
                            Wonder who is your favorite team's biggest Rivals?
                        </h1>
                    </div>
                    <div className="row2">
                        <h5 className="is-bold is-darkblue is-center-horizontal pad-bottom-double">
                            Type in your team's name and find out
                        </h5>
                    </div>
                    <div className="level row3">
                        <div className="field-body margin-right-medium margin-left-medium">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className={`input is-large`}
                                        type="text"
                                        placeholder="Team name ie. Duke"
                                        value={team}
                                        onChange={(e) =>
                                            setTeam(e.target.value)
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
                </div>
            </section>
            <section className="body main">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Rival
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Wins
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Losses
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Percent
                            </h2>
                        </div>
                    </div>
                        {rivals.map((item, idx) => 
                            <div className="columns">
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['TEAM']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['Wins']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['Losses']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {Math.round(item['winPrecent']*100)}
                                    </h2>
                                </div>
                            </div> 
                        )}
                </div>
            </section>
        </div>
    );
};
