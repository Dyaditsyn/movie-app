import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import moment from 'moment';

class ActorsView extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    {
                        this.props.filteredActors.map( actor => (
                        <Col key={actor.id} sm="12" md="6" lg="3">
                            <Card className="m-3 text-center">
                                <Card.Img variant="top" src={actor.imgUrl } /> 
                                <Card.Body>
                                    <Card.Link target="_blank" href={actor.imdbLink} style={{fontSize: '24px'}}>{actor.fName} {actor.lName}</Card.Link>
                                    <Card.Text><span style={{fontWeight: 'bold'}}>Birth Date:</span> {moment(actor.bday).format("MMM Do YY")}</Card.Text>
                                </Card.Body>
                                <Card.Footer><span style={{fontWeight: 'bold'}}>Age:</span> {actor.getAge()}</Card.Footer> 
                            </Card>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

export default ActorsView;