import Overdrive from 'react-overdrive'
import Link from 'next/link'
import {css} from 'glamor'

const container = css({
  textAlign: 'center'
})

const image = css({
  boxSizing: 'border-box',
  background: '#fff',
  width: '180px',
  height: '180px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  padding: '5px',
  margin: '10px'
})

const page = ({url}) => {
  return (
    <div>
      <div {...container}>
        <Overdrive id={url.query.id}>
          <img {...image} src={`https://cdn.filestackcontent.com/${url.query.image}`} />
        </Overdrive>
        <h1>{url.query.name}!</h1>
        <Link href='/'><a id='link'>Back</a></Link>
      </div>
    </div>
  )
}

export default page
