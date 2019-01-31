import React from "react";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
import "./style.css";

class ProfileTracker extends React.Component {

    constructor (props) {
        super(props);
        
    }

    printPDF=()=> {
        const doc = new jsPDF();
        console.log("test");
        doc.text(10,10,`You have to pay \$ ${this.props.payAmount.toFixed(2)}`);
        doc.save(`${this.props.id}_invoice.pdf`);
    }
    
    render () {
        return (
            <div>
                <div className="p-card">
                    <div className="p-text">
                        <p>
                        <strong>Justo ID: </strong>
                        #{this.props.id}
                        </p><hr/>
                        <p>
                        <strong>Profession: </strong> 
                        {this.props.profession}
                        </p><hr/>
                        <p>
                        <strong>Project Hours: </strong>
                        {this.props.hours}:{this.props.minutes}:{this.props.seconds}
                        </p><hr/>
                        <p>
                        <strong>Rate/hour: </strong>
                        ${this.props.rate}
                        </p><hr/>
                        <p>
                        <strong>Pay Accrued: </strong>
                        ${(this.props.payAmount).toFixed(2)}
                        </p>
                    </div>
                </div>
                <div>
                    <button onClick={this.printPDF} className="justo-button">Make Payment</button>
                    <Link to="/screenshare">
                    <button className="justo-button">Request Screen Share</button>
                    </Link>
                </div>
            </div>
        )

    }
}

export default ProfileTracker;