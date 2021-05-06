import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { axiosInstance } from '../axios';
import { Modal } from './Modal';
import '../styles/landing.scss';
import '../styles/urgentdental.scss';

export const BoxScore = () => {
    const [complete, setComplete] = useState(false);
    const [date, setDate] = useState('');
    const [players, setPlayers] = useState([]);
    const [num, setNum] = useState(0);
    const [def, setDefault] = useState(true);
  
    const submitForm = async () => {
        const res = await axiosInstance.get(
            `/boxscore/${date}`
        );
        console.log(res.data);
        setPlayers(res.data);
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
                            Wonder who played the best last saturday? Put in any date and we'll show you!
                        </h1>
                    </div>
                    <div className="row2">
                        <h5 className="is-bold is-darkblue is-center-horizontal pad-bottom-double">
                            Input the date below in the format of YYYY-MM-DD
                        </h5>
                    </div>
                    <div className="level row3">
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className={`input is-large`}
                                        type="text"
                                        placeholder="Date 2019-01-19"
                                        value={date}
                                        onChange={(e) =>
                                            setDate(e.target.value)
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
                                        placeholder="Number of Players Default is All"
                                        value={num}
                                        onChange={(e) =>
                                            setNum(e.target.value)
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
                                First
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Last
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Points
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Assists
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Rebounds
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                FG%
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                3P%
                            </h2>
                        </div>
                    </div>
                        {players.map((item, idx) => (idx < num || def) ? 
                            <div className="columns">
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['FirstName']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['LastName']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['points']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['assist']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['red']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {Math.round((item['made2'] + item['made3']) / (item['made2'] + item['made3'] + item['miss3'] + item['miss2']) * 100)}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                    {Math.round(item['made3'] / (item['made3'] + item['miss3']) * 100)}
                                    </h2>
                                </div>
                            </div> :
                            <div> </div>  
                        )}
                </div>
            </section>
        </div>
    );
};
