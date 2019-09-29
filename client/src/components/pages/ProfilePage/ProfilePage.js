import React from 'react'
import {
    Card, CardImg, CardText, CardBody, Collapse,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col
} from 'reactstrap';
import axios from 'axios';
// import DemoNavbar from "";



export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        bio: "",
        location: "",
        login: "",
        name: "",
        avatar_url: props.avatar_url
    }
  }


  submitUsername = (e) => {
      e.preventDefault();
      const userInput = document.getElementById("usernameInput");
      axios.post("/dashboard", {
          username: userInput.value
      }).then(response => {
          console.log(response);
          const data = response.data;
          const { bio, location, login, name, avatar_url } = data;
          this.setState({
              bio,
              location,
              login,
              name,
              avatar_url
          })
      })
  }

  render() {

    console.log(this.props.login);
    console.log(this.props.name);
    console.log(this.props.avatar_url);
    console.log(this.props.email);
    console.log(this.props.location);
    console.log(this.props.bio);

    //container -> rows -> col -> media -> avatar
    return (
            // <Card style={cardContainer}>
            //     <CardImg style={cardStyle} src={this.props.avatar_url} alt="Card image cap" />
            //     <CardBody>
            //         <CardTitle>Name: {this.props.name}</CardTitle>
            //         <CardSubtitle>Username: {this.props.login}</CardSubtitle>
            //         <CardSubtitle>Location: {this.props.location}</CardSubtitle>
            //         <CardSubtitle>Email: {this.props.email}</CardSubtitle>
            //         <CardText>Bio: {this.props.bio}</CardText>
            //     </CardBody>
            // </Card>
             <main className="profile-page">
             <section className="section-profile-cover section-shaped my-0">
               {/* Circles background */}
               <div className="shape shape-style-1 shape-default alpha-4">
                 <span />
                 <span />
                 <span />
                 <span />
                 <span />
                 <span />
                 <span />
               </div>
               {/* SVG separator */}
               <div className="separator separator-bottom separator-skew">
               </div>
             </section>
             <section className="section">
               <Container>
                 <Card className="card-profile shadow mt--300">
                   <div className="px-4">
                     <Row className="justify-content-center">
                       <Col className="order-lg-2" lg="3">
                         <div className="card-profile-image">
                             <img
                               alt="..."
                               className="rounded-circle"
                               src={this.state.avatar_url}
                             />
                         </div>
                       </Col>
                       <Col
                         className="order-lg-3 text-lg-right align-self-lg-center"
                         lg="4"
                       >
                         <div className="card-profile-actions py-4 mt-lg-0">
        
                         </div>
                       </Col>
                       {/* <Col className="order-lg-1" lg="4">
                         <div className="card-profile-stats d-flex justify-content-center">
                           <div>
                             <span className="heading">22</span>
                             <span className="description">Friends</span>
                           </div>
                           <div>
                             <span className="heading">10</span>
                             <span className="description">Photos</span>
                           </div>
                           <div>
                             <span className="heading">89</span>
                             <span className="description">Comments</span>
                           </div>
                         </div>
                       </Col> */}
                     </Row>
                     <div className="text-center mt-5">
                       <h3>
                         {this.state.name}
                         {/* <span className="font-weight-light">, 27</span> */}
                       </h3>
                       <div className="h6 font-weight-300">
                         <i className="ni location_pin mr-2" />
                         {this.state.login}
                       </div>
                       <div className="h6 mt-4">
                         <i className="ni business_briefcase-24 mr-2" />
                         {this.state.location}
                       </div>
                       <div>
                         <i className="ni education_hat mr-2" />
                       </div>
                     </div>
                     <form>
                         <input type="text" id="usernameInput" placeholder="GitHub Username" />
                         <input type="submit" onClick={this.submitUsername}/>
                     </form>
                     <div className="mt-5 py-5 border-top text-center">
                       <Row className="justify-content-center">
                         <Col lg="9">
                           <p>
                           {this.state.bio}
                           </p>
                           {/* <a href="#" onClick={e => e.preventDefault()}> */}
                             

                         </Col>
                       </Row>
                     </div>
                   </div>
                 </Card>
               </Container>
             </section>
           </main>
   
    );
  }
}


// {bio && (
//     <Fragment>
//       <h3>Bio</h3>
//       <p>{bio}</p>
//     </Fragment>
//   )}
// const cardStyle ={

//     margin: '20px',
//     width: '400px',
//     height: '400px'
// }
// const cardContainer = {
//     padding: '20px',
//     fontSize: '1.2rem',
//     fontWieght: 'bold'
// }