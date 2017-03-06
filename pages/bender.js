import Overdrive from './overdrive'
import Link from 'next/link'
import {css} from 'glamor'

const box = css({
    width: '50px',
    height: '50px',
    background: '#3cafe4'
});

const image = css({
    width: '100%'
});

const page = () => {
    return (
        <div>
            <h1 id="header">Bender</h1>
            <Link href="/"><a id="link">Home</a></Link>
            <div>
                <Overdrive id="bender">
                    <img {...image} src="/static/bender.jpg"/>
                </Overdrive>
            </div>
        </div>
    );
};

export default page;
