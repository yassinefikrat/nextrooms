import Link from "next/link"
import fetch from "isomorphic-unfetch"

import GridList, { GridListTile } from "material-ui/GridList"

import Layout from "../components/Layout.js"
import RoomThumb from "../components/RoomThumb.js"
import NewRoom from "../components/NewRoom.js"

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 5
  }
})

const Index = props => (
  <Layout>
    <h1>Rooms</h1>

    <GridList cellHeight="300">
      {props.rooms.map(room => (
        <GridListTile>
          <RoomThumb key={room.name} room={room} />
        </GridListTile>
      ))}
    </GridList>

    {props.rooms.map(room => <RoomThumb key={room.name} room={room} />)}

    <NewRoom
      games={["Fortnite"]}
      sizes={["2 players", "3 players", "4 players"]}
    />
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/rooms/")
  const data = await res.json()

  return {
    rooms: data
  }
}

export default Index
