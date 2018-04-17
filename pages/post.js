import Layout 	from '../components/Layout.js'
import fetch 	from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.room.name}</h1>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { name } = context.query
  const res = await fetch(`http://localhost:3000/rooms/${name}`)
  const room = await res.json()

  return { room }
}

export default Post