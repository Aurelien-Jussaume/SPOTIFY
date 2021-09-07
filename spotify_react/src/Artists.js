import React from 'react';

class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost/Wac/projet_web/rush_spotify/W-WEB-090-PAR-1-1-spotify-aime.koutsimouka/spotify_react/src/api.php')
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result);
                    let test = result.artists
                    this.setState({
                        isLoaded: true,
                        items: test
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        // console.log(items)
        let test = [];
        Object.keys(items).forEach(function (key, value) {
            test.push(items[key])
        })
        console.log(test[0])
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    <div className="artistsList">
                        {test.map((key, value) =>
                            <a className="artist" href="#">
                                <p key={key["name"]}>
                                    {key["name"]}
                                </p>
                            </a>
                        )}
                    </div>
                </div >
            );
        }
    }
}

export default Artists;