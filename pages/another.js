import Overdrive from './overdrive'
import Link from 'next/link'
import {css} from 'glamor'

const box = css({
    width: '150px',
    height: '150px',
    background: '#afe43c',
    position: 'relative',
    left: '250px',
    borderRadius: '50%'
});

const page = () => {
    return (
        <div>
            <Overdrive id="h">
                <h2>Hi</h2>
            </Overdrive>
            <h1>Page 2</h1>
            <Link href="/"><a>Page 1</a></Link>
            <Overdrive id="box">
                <div {...box}></div>
            </Overdrive>
        </div>
    );
};

export default page;
