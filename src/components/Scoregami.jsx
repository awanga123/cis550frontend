import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { axiosInstance } from '../axios';
import { Modal } from './Modal';
import '../styles/landing.scss';
import '../styles/urgentdental.scss';

export const Scoregami = () => {
    const [rows, setRows] = useState([]);
    const [complete, setComplete] = useState(false);
    const [occurrences, setOccurrences] = useState(0);

    const getScoregami = async () => {
        const res = await axiosInstance.get(
            `/scoregami`
        );
        console.log(res.data);
        setRows(res.data);
    };

    useEffect(() => {
        getScoregami();
    }, []);

    const form = () => {
        return (
            <div className="column">
                <div className="form">
                    <div className="row1">
                        <h1 className="is-bold is-white is-center-horizontal pad-bottom">
                            Scorigami: a scoring combination that has never happened before in a sport or league's history.
                        </h1>
                    </div>
                    <div className="row2">
                        <h5 className="is-bold is-darkblue is-center-horizontal pad-bottom-double">
                            Here is every score that has happened. Can you find the ones that didnt? 
                        </h5>
                    </div>
                    <div className="field-body margin-right-huge margin-left-huge">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className={`input is-large`}
                                        type="text"
                                        placeholder="Number of Occurrences"
                                        value={occurrences}
                                        onChange={(e) =>
                                            setOccurrences(e.target.value)
                                        }
                                    />
                                </p>
                            </div>
                        </div>
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
                                Score
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Occurrences
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                First Season
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Winning team
                            </h2>
                        </div>
                        <div className="column">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Losing Team
                            </h2>
                        </div>
                    </div>
                        {rows.map((item, idx) => (parseInt(item['Occurrences']) == occurrences || occurrences == 0) ?
                            <div className="columns">
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['WScore']} - {item['LScore']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['Occurrences']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['First_Season']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['Winner']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['Loser']}
                                    </h2>
                                </div>
                            </div> :
                            <div></div>
                        )}
                </div>
            </section>
        </div>
    );
};
