import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ProfilePage(props) {
    console.log(props.login);
    console.log(props.name);
    console.log(props.avatar_url);
    console.log(props.email);
    console.log(props.location);
    console.log(props.bio);
    
    //container -> rows -> col -> media -> avatar
    return (
        <div>
            <Card>
                <CardImg style={cardStyle} src={props.avatar_url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Username: {props.login}</CardSubtitle>
                    <CardSubtitle>Location: {props.location}</CardSubtitle>
                    <CardSubtitle>Email: {props.email}</CardSubtitle>
                    <CardText>{props.bio}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}

const cardStyle ={
    margin: '2px',
    width: '400px',
    height: '400px'
}