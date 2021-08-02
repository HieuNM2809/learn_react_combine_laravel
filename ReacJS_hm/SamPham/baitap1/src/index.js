//   // 17.0.2
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from "./screens/home.js";
import Login from "./screens/login.js";
import Register from "./screens/register.js";




ReactDOM.render(
  <Router>
      <div>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
      </div>
  </Router>,
  document.getElementById('app')
) 






// ================================== Dynamic Routing
// function Child({ match }) {
//   return (
//       <div>
//           <h3>ID: {match.params.id}</h3>
//       </div>
//   )
// }

// class Posts extends React.Component {
//   state = {
//       posts: [
//           {
//               id: 1,
//               title: "Hello Blog World!"
//           },
//           {
//               id: 2,
//               title: "My second post"
//           },
//           {
//               id: 3,
//               title: "What is React Router?"
//           }
//       ]
//   }

//   render() {
//       const { posts } = this.state
//       return (
//           <div className='posts'>
//               <h1>Posts List</h1>
//               <ul>
//                   {posts.map(post => (
//                       <li key={post.id}>
//                           <Link to={`/posts/${post.id}`}>{post.title}</Link>
//                       </li>
//                   ))}
//               </ul>
              
//           </div>
//       )
//   }
// }


// ReactDOM.render(
//   <Router>
//     <div>
//         <nav>
//             <Link to='/' exact>Home</Link>
//             <Link to='/posts' exact>Posts</Link>
//         </nav>
//         <Route path='/' exact component={Home} />
//         <Route path='/posts' component={Posts} />
//         <Route path='/posts/:id' component={Child} />
//     </div>
//   </Router>,
//   document.getElementById('app')
// )