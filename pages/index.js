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

const api = css({
    maxWidth: '400px'
});

class page extends React.Component {
    __componentDidMount() {
        const images = [
            '/static/bender.gif',
            '/static/fry.gif',
            '/static/leela.gif',
            '/static/zoidberg.gif'
        ];
        for (let i = 0; i < images.length; ++i) {
            const img = document.createElement('img');
            img.src = images[i];
        }
        console.log('hi!')
    }

    render() {
        return (
            <div {...container}>
                <h1>Best character?</h1>
                <Link href="/character?id=bender&name=Bender&image=40Wzdn4OQbi2ncxkG96z">
                    <a>
                        <Overdrive id="bender">
                            <img {...image} src="https://cdn.filestackcontent.com/40Wzdn4OQbi2ncxkG96z"/>
                        </Overdrive>
                    </a>
                </Link>

                <Link href="/character?id=fry&name=Fry&image=zbglqWZQAyYO5vsHqIbw">
                    <a>
                        <Overdrive id="fry">
                            <img {...image} src="https://cdn.filestackcontent.com/zbglqWZQAyYO5vsHqIbw"/>
                        </Overdrive>
                    </a>
                </Link>
                <Link href="/character?id=leela&name=Leela&image=klwhl9wXRIqRTGWFNoBT">
                    <a>
                        <Overdrive id="leela">
                            <img {...image} src="https://cdn.filestackcontent.com/klwhl9wXRIqRTGWFNoBT"/>
                        </Overdrive>
                    </a>
                </Link>
                <Link href="/character?id=zoidberg&name=Zoidberg&image=6xL1j1OQDC4VLBBLieN7">
                    <a>
                        <Overdrive id="zoidberg">
                            <img {...image} src="https://cdn.filestackcontent.com/6xL1j1OQDC4VLBBLieN7"/>
                        </Overdrive>
                    </a>
                </Link>
                <p>
                    This is a small demo of <strong><em>react-overdrive</em></strong>, creating a magic-move experience
                    while routing.
                    <br/>
                    <em>(alpha version should be out soon)</em>
                </p>
            </div>
        );
    }
}

export default page;
