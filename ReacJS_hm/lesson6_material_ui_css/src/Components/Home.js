import React from "react";
import Button from "@material-ui/core/Button";
import { Link} from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import './Home.css';

// export default function PlainCSSButton() {
//   return (
//     <div>
//       <StylesProvider injectFirst>
//         <Button>Default</Button>
//         <Button className="button">Customized</Button>
//       </StylesProvider>
//     </div>
//   );
// }

export default class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <StylesProvider injectFirst> */}
                   <Button>Default</Button>
                    <Button className="button">Customized</Button>

                    <Link to='/login' className="link" >  Login </Link>
                {/* </StylesProvider> */}
            </div>
        )
    }
}


