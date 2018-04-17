import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout.js'
import RoomThumb from '../components/RoomThumb.js'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    {/*<ul>
      {props.rooms.map((room) => (
        <li key={room.name}>
          <Link as={`/p/${room.name}`} href={`/post?name=${room.name}`}>
            <a>{room.name}</a>
          </Link>
        </li>
      ))}
    </ul>*/}
    {props.rooms.map((room) => (
      <RoomThumb key={room.name} room={room}></RoomThumb>
    ))}
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/rooms/')
  const data = await res.json()

  return {
    rooms: data
  }
}

export default Index