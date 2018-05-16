import React from 'react'
import Overdrive from 'react-overdrive'
import Link from 'next/link'
import { css } from 'glamor'

css.global('*', {
  boxSizing: 'border-box'
})

css.global('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  textRendering: 'optimizeLegibility',
  margin: 0,
  fontWeight: 300,
  lineHeight: 1.4
})

const bold = css({
  fontWeight: 400
})

const h1 = css({
  fontSize: '32px',
  fontWeight: 200,
  lineHeight: '40px',
  marginTop: 0
})

const image = css({
  background: '#fff',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: '1px solid #ccc',
  padding: '5px',
  margin: '10px'
})

const container = css({
  textAlign: 'center',
  ' a': {
    display: 'inline-block'
  },
  marginTop: '50px'
})

const inset = css({
  width: '480px',
  maxWidth: '100%',
  margin: 'auto'
})

const originalCharacters = [
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
]

const circle = css({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: '#3cafe4'
})

const square = css({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  background: '#3ce4af'
})

const triangle = css({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  borderStyle: 'solid',
  borderWidth: '0 15px 30px 15px',
  borderColor: 'transparent transparent #af3ce4 transparent'
})

const code = css({
  background: '#272822',
  color: '#fff',
  padding: '5px',
  textAlign: 'left'
})

const regular = css({
  padding: '60px'
})

const inverse = css({
  background: '#333',
  color: 'white',
  padding: '60px'
})

const logos = [
  'spotify.com',
  'google.com',
  'apple.com',
  'facebook.com',
  'samsung.com',
  'snapchat.com',
  'tesla.com',
  'walmart.com'
]

const Shape = ({ shape, align }) => (
  <Overdrive key='shape' id='shape' duration={1000} style={{ textAlign: align }}>
    <div {...shape} />
  </Overdrive>
)

class page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logos,
      turn: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.shuffleCharacters()
    }, 2000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  shuffleCharacters () {
    const logos = [...this.state.logos]
    for (let i = logos.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [logos[i - 1], logos[j]] = [logos[j], logos[i - 1]]
    }
    this.setState({
      logos,
      turn: (this.state.turn + 1) % 3
    })
  }

  render () {
    const { turn } = this.state
    return (
      <div {...container}>
        <div {...inset}>
          <h1 {...h1}>
            React Overdrive
            <br />
            <span {...bold}>Simple</span> and <span {...bold}>Powerful</span> animations
          </h1>

          <code {...code}>npm install react-overdrive --save</code>

          <div style={{ overflow: 'hidden', marginTop: '20px' }}>
            {turn === 0 && <Shape shape={square} align='left' />}
            {turn === 1 && <Shape shape={circle} align='center' />}
            {turn === 2 && <Shape shape={triangle} align='right' />}
            {turn === 3 && <Shape shape={square} align='center' />}
          </div>

        </div>

        <p>
          <strong>React Overdrive</strong> has a simple component based API to transition <strong>
          any </strong>
          element to <strong> any </strong> element
        </p>

        <div {...inverse}>
          <div {...inset}>
            <h1 {...h1}>Animate elements between <strong>different pages</strong></h1>
            <div style={{ marginTop: '20px' }}>
              {originalCharacters.map(character => (
                <Link key={character.id}
                  prefetch
                  href={`/character?id=${character.id}&name=${character.name}&image=${character.image}`}>
                  <a>
                    <Overdrive element='span' id={character.id}
                      style={{ display: 'inline-block' }}>
                      <img {...image}
                        src={`https://cdn.filestackcontent.com/${character.image}`} />
                    </Overdrive>
                  </a>
                </Link>
              ))}
            </div>
            <small>(Click on a character)</small>
          </div>
        </div>

        <div {...regular}>
          <div {...inset}>
            <h1 {...h1}>Shuffle some <strong>Company</strong> logos</h1>
            <div style={{ marginTop: '20px' }}>
              {this.state.logos.map(character => (
                <Overdrive key={character}
                  id={character}
                  style={{ display: 'inline-block' }}>
                  <img {...image} src={`https://logo.clearbit.com/${character}`} />
                </Overdrive>
              ))}
            </div>
          </div>
        </div>

        <div {...inverse}>
          Check out the GitHub project at <a
            href='https://github.com/berzniz/react-overdrive' style={{ color: 'white' }}>react-overdrive</a>
        </div>
      </div>
    )
  }
}

export default page
