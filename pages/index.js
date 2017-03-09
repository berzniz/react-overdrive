import React from 'react'
import Overdrive from '../lib/overdrive'
import Link from 'next/link'
import {css} from 'glamor'

const image = css({
    boxSizing: 'border-box',
    background: '#fff',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    padding: '5px',
    margin: '10px'
});

const container = css({
    marginTop: '200px',
    textAlign: 'center',
    ' a': {
        display: 'inline-block'
    }
});

const characters = [
    {
        id: 'bender',
        name: 'Bender',
        image: '40Wzdn4OQbi2ncxkG96z'
    },
    {
        id: 'fry',
        name: 'Fry',
        image: 'zbglqWZQAyYO5vsHqIbw'
    },
    {
        id: 'leela',
        name: 'Leela',
        image: 'klwhl9wXRIqRTGWFNoBT'
    },
    {
        id: 'zoidberg',
        name: 'Zoidberg',
        image: '6xL1j1OQDC4VLBBLieN7'
    }
];

class page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {characters};
    }

    shuffleCharacters() {
        const characters = [...this.state.characters];
        for (let i = characters.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [characters[i - 1], characters[j]] = [characters[j], characters[i - 1]];
        }
        this.setState({characters});
    }

    render() {
        const {characters} = this.state;
        return (
            <div {...container}>
                <h1>Best character?</h1>

                {characters.map(character => (
                    <Link key={character.id}
                          href={`/character?id=${character.id}&name=${character.name}&image=${character.image}`}>
                        <a>
                            <Overdrive id={character.id}>
                                <img {...image} src={`https://cdn.filestackcontent.com/${character.image}`}/>
                            </Overdrive>
                        </a>
                    </Link>
                ))}

                <p>
                    <button onClick={this.shuffleCharacters.bind(this)}>Shuffle</button>
                </p>

                <p>
                    This is a small demo of <a href="https://github.com/berzniz/react-overdrive">react-overdrive</a>, creating a magic-move experience
                    while routing.
                    <br/>
                    <em>(alpha version should be out soon)</em>
                </p>
            </div>
        );
    }
}


export default page;
