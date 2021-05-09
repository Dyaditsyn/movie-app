import React from 'react';
import { Container, Form } from 'react-bootstrap';


class SearchBox extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Container className="px-4 pt-2">
                <h1>Filter {this.props.filter}</h1>
                <Form.Control
                    onChange={this.props.handleInput}
                    type="text" 
                    placeholder="Start typing to filter" />
            </Container>
        )
    }
}

export default SearchBox;
