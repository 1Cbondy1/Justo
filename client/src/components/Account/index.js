import React, { Component } from "react";
import Wrapper from "../Wrapper";
import FreelancerCard from "../FreelancerCard";
import Timer from "../Timer"
import freelancers from "../../freelancers.json";
import { Grid, Row, Col } from "react-bootstrap";
import Upload from "../Upload"
import "./style.css";

class Account extends Component {
    state ={
        freelancers,
        user_id: null
    }
    
componentWillMount(){
    console.log(this.props.id);
    this.setState({ user_id: this.props.id })
}

    render() {
        return (
            <div>
                <Wrapper>
                    <Grid>
                        <Row>

                            <Col xs={12} sm={12} md={6}>
                                <Upload />
                                <FreelancerCard
                                    name={freelancers[this.state.user_id-1].name}
                                    image={freelancers[this.state.user_id-1].image}
                                    active={freelancers[this.state.user_id-1].active}
                                    showPeople={this.showPeople}
                                />
                            </Col>

                            <Col xs={12} sm={12} md={6}>
                                <Timer />
                            </Col>

                        </Row>
                    </Grid>
                </Wrapper>
            </div>
        );
    }
}

export default Account;