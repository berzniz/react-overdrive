import React from 'react'
import Link from 'next/link'
import Overdrive from 'react-overdrive'

export default ({ id }) => (
  <Overdrive id={id.toString()} animationDelay={1} duration={500} style={{display: 'inline-block'}}>
    <div className='photo'>

      <div className='image'>
        {id}
      </div>

      <div className='sidebar'>
        <ul className='sidebarList'>
          <li>
            <Link><a href='/profile?id=nkzawa'>@nkzawa</a></Link>
          - Great photo!
          </li>
        </ul>
      </div>

      <style jsx>{`
      .photo {
        width: 800px;
        overflow: hidden;
        height: 500px;
        display: inline-block;
        box-sizing: border-box;
      }

      .image {
        float: left;
        width: 600px;
        height: 500px;
        background: #333;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        line-height: 500px;
        font-size: 40px;
      }

      .sidebar {
        float: right;
        background: #fff;
        width: 200px;
        height: 500px;
        text-align: left;
        box-sizing: border-box;
        padding: 20px;
        font-family: Monaco;
        font-size: 11px;
      }

      .sidebarList {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
    </div>
  </Overdrive>
)
