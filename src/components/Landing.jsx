import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { axiosInstance } from '../axios';
import { Modal } from './Modal';
import '../styles/landing.scss';
import '../styles/urgentdental.scss';

export const form = () => {};

export const LandingPage = () => {
    const [teamName, setTeamName] = useState('');
    const [season, setSeason] = useState('');
    const [complete, setComplete] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [wins, setWins] = useState('');
    const [losses, setLosses] = useState('');
    const [seasonWins, setSeasonWins] = useState('');
    const [seasonLosses, setSeasonLosses] = useState('');
    const [tournamentWins, setTournamentWins] = useState('');
    const [tournamentLosses, setTournamentLosses] = useState('');
    const [seasonTournamentWins, setSeasonTournamentWins] = useState('');
    const [seasonTournamentLosses, setSeasonTournamentLosses] = useState('');
    const [largestWinTeam1, setLargestWinTeam1] = useState('');
    const [largestWinTeam2, setLargestWinTeam2] = useState('');
    const [largestWinMargin, setLargestWinMargin] = useState(''); 
    const [largestLossTeam1, setLargestLossTeam1] = useState('');
    const [largestLossTeam2, setLargestLossTeam2] = useState('');
    const [largestLossMargin, setLargestLossMargin] = useState('');
    const [bestSeedSeason, setBestSeedSeason] = useState('');
    const [bestSeed, setBestSeed] = useState('');
    const [seeds, setSeeds] = useState([]);
    const [seasonGames, setSeasonGames] = useState([]);
    const [tournamentGames, setTournamentGames] = useState([]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const submitForm = async () => {
        const res = await axiosInstance.get(
            `/records/${teamName}`
        );
        console.log(res.data);
        console.log(res.data[0]['Wins']);
        console.log(res.data[0]['Losses']);
        setWins(res.data[0]['Wins']);
        setLosses(res.data[0]['Losses']);
        
        const res2 = await axiosInstance.get(
            `/tournament/records/${teamName}`
        );
        console.log(res2.data);
        console.log(res2.data[0]['Wins']);
        console.log(res2.data[0]['Losses']);
        setTournamentWins(res2.data[0]['Wins']);
        setTournamentLosses(res2.data[0]['Losses']);
        
        const res3 = await axiosInstance.get(
            `/season/record/${teamName}&${season}`
        );
        console.log(res3.data);
        console.log(res3.data[0]['Wins']);
        console.log(res3.data[0]['Losses']);
        setSeasonWins(res3.data[0]['Wins']);
        setSeasonLosses(res3.data[0]['Losses']);

        const res4 = await axiosInstance.get(
            `/season/tournament/${teamName}&${season}`
        );
        console.log(res4.data);
        console.log(res4.data[0]['Wins']);
        console.log(res4.data[0]['Losses']);
        setSeasonTournamentWins(res4.data[0]['Wins']);
        setSeasonTournamentLosses(res4.data[0]['Losses']);
        
        const res5 = await axiosInstance.get(
            `/biggestwin/${teamName}`
        );
        console.log(res5.data);
        console.log(res5.data[0]['WinTeam']);
        console.log(res5.data[0]['LossTeam']);
        console.log(res5.data[0]['Margin'])
        setLargestWinTeam1(res5.data[0]['WinTeam']);
        setLargestWinTeam2(res5.data[0]['LossTeam']);
        setLargestWinMargin(res5.data[0]['Margin']);

        const res6 = await axiosInstance.get(
            `/biggestloss/${teamName}`
        );
        console.log(res6.data);
        console.log(res6.data[0]['WinTeam']);
        console.log(res6.data[0]['LossTeam']);
        console.log(res6.data[0]['Margin'])
        setLargestLossTeam1(res6.data[0]['WinTeam']);
        setLargestLossTeam2(res6.data[0]['LossTeam']);
        setLargestLossMargin(res6.data[0]['Margin']);

        const res7 = await axiosInstance.get(
            `/bestseed/${teamName}`
        );
        console.log(res7.data);
        console.log(res7.data[0]['Season']);
        console.log(res7.data[0]['Seed']);
        setBestSeedSeason(res7.data[0]['Season']);
        setBestSeed(res7.data[0]['Seed']);

        const res8 = await axiosInstance.get(
            `/allseeds/${teamName}`
        );
        console.log(res8.data);
        setSeeds(res8.data);

        const res9 = await axiosInstance.get(
            `/season/games/${teamName}&${season}`
        );
        console.log(res9.data);
        setSeasonGames(res9.data);

        const res10 = await axiosInstance.get(
            `/season/tournament/games/${teamName}&${season}`
        );
        console.log(res10.data);
        setTournamentGames(res10.data);

        setComplete(true);
    };

    const form = () => {
        return (
            <div className="column">
                <div className="form">
                    <div className="row1">
                        <h1 className="is-bold is-white is-center-horizontal pad-bottom">
                            Find out all the stats of your favorite College Basketball Team
                        </h1>
                    </div>
                    <div className="row2">
                        <h5 className="is-bold is-darkblue is-center-horizontal pad-bottom-double">
                            Input your team name and the optional season that you want below: 
                        </h5>
                    </div>
                    <div className="level row3">
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded">
                                    <input
                                        className={`input is-large`}
                                        type="text"
                                        placeholder="Team Name ie. Duke"
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
                                        placeholder="Team Season (optional) ie. 2015"
                                        value={season}
                                        onChange={(e) =>
                                            setSeason(e.target.value)
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
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Tournament Wins: {tournamentWins}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Tournament Losses: {tournamentLosses}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body lightblue">
                <div className="container">
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Season {season} Wins: {seasonWins}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Season {season} Losses: {seasonLosses}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body main">
                <div className="container">
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Season {season} Tournament Wins: {seasonTournamentWins}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Season {season} Tournament Losses: {seasonTournamentLosses}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body lightblue">
                <div className="container">
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Winning Team: {largestWinTeam1}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Losing Team: {largestWinTeam2}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Margin: {largestWinMargin}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body Main">
                <div className="container">
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Winning Team: {largestLossTeam1}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Losing Team: {largestLossTeam2}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-ncaablue">
                                Margin: {largestLossMargin}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body lightblue">
                <div className="container">
                    <div className="level">
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Season: {bestSeedSeason}
                            </h2>
                        </div>
                        <div className="level-item">
                            <h2 className="has-text-centered is-bold is-white">
                                Seed: {bestSeed}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="body main">
                <div className="container">
                        {seeds.map((item, idx) => (
                            <div className="level">
                                <div className="level-item">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        Season: {item['Season']}
                                    </h2>
                                </div>
                                <div className="level-item">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        Seed: {item['Seed']}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <section className="body lightblue">
                <div className="container">
                        {seasonGames.map((item, idx) => (
                            <div className="columns">
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-white">
                                        {item['WinTeam']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-white">
                                        {item['WScore']} - {item['LScore']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-white">
                                        {item['LossTeam']}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            <section className="body main">
                <div className="container">
                        {tournamentGames.map((item, idx) => (
                            <div className="columns">
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['WinTeam']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['WScore']} - {item['LScore']}
                                    </h2>
                                </div>
                                <div className="column">
                                    <h2 className="has-text-centered is-bold is-ncaablue">
                                        {item['LossTeam']}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
};
