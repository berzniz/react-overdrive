import Overdrive from './overdrive'
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

const page = () => {
    return (
        <div {...container}>
            <h1>Best character?</h1>
            <Link href="/character?id=bender&name=Bender">
                <a>
                    <Overdrive id="bender">
                        <img {...image} src="/static/bender.jpg"/>
                    </Overdrive>
                </a>
            </Link>

            <Link href="/character?id=fry&name=Fry">
                <a>
                    <Overdrive id="fry">
                        <img {...image} src="/static/fry.jpg"/>
                    </Overdrive>
                </a>
            </Link>
            <Link href="/character?id=leela&name=Leela">
                <a>
                    <Overdrive id="leela">
                        <img {...image} src="/static/leela.jpg"/>
                    </Overdrive>
                </a>
            </Link>
            <p>
                This is a small demo of <strong><em>react-overdrive</em></strong>, creating a magic-move experience while routing.
                <br/>
                <em>(alpha version should be out soon)</em>
            </p>
        </div>
    );
};

export default page;
