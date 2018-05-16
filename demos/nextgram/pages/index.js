import React from 'react'
import Router from 'next/router'
import Overdrive from 'react-overdrive'
import Modal from '../components/modal'

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling escape close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/')
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render () {
    const { url, photos } = this.props

    return (
      <div className='list'>
        {
          url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          photos
            .filter((id) => (id !== url.query.photoId))
            .map((id) => (
              <Overdrive key={id} id={id.toString()} animationDelay={1} style={{display: 'inline-block'}}>
                <div className='photo'>
                  <a
                    className='photoLink'
                    href={`/photo?id=${id}`}
                    onClick={(e) => this.showPhoto(e, id)}
                  >
                    {id}
                  </a>
                </div>
              </Overdrive>
            ))
        }
        <style jsx>{`
          .list {
            padding: 50px;
            text-align: center;
          }

          .photo {
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
          }

          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }

          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
    )
  }
}
