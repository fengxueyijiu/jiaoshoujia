// import React from 'react';
// import echarts from 'echarts';
// import {  Button,Carousel} from "react-bootstrap";
// class App extends React.Component {
//   componentDidMount(){
//
//   }
//   render () {
//     return(
//       <div>
//         <Carousel>
//           <Carousel.Item>
//             <img width={900} height={500} alt="900x500" src="http://7xopqp.com1.z0.glb.clouddn.com/contain-none.jpg"/>
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img width={900} height={500} alt="900x500" src="http://7xopqp.com1.z0.glb.clouddn.com/contain4.jpg"/>
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img width={900} height={500} alt="900x500" src="http://7xopqp.com1.z0.glb.clouddn.com/contain4.jpg"/>
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     )
//   }
// }
//
// export default App;



import React from 'react';
import Next from './Next';
import AppBar from './AppBar';
import Tabs from './Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { ButtonToolbar, Button,Carousel} from "react-bootstrap";
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  componentDidMount(){

  }
  render () {
    return(
      <div>
            <ButtonToolbar>
       {/* Standard button */}
       <Button>Default</Button>

       {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
       <Button bsStyle="primary" style={{backgroundColor:"red"}}>Primary</Button>

       {/* Indicates a successful or positive action */}
       <Button bsStyle="success">Success</Button>

       {/* Contextual button for informational alert messages */}
       <Button bsStyle="info">Info</Button>

       {/* Indicates caution should be taken with this action */}
       <Button bsStyle="warning">Warning</Button>

       {/* Indicates a dangerous or potentially negative action */}
       <Button bsStyle="danger">Danger</Button>

       {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
       <Button bsStyle="link">Link</Button>
     </ButtonToolbar>

          <RaisedButton label="Default" />
          <CircularProgress />
          <Next />
          <AppBar />
          <Tabs />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
