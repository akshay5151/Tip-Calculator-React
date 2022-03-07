import React, { useState } from 'react'
import { Form, Button, Table, Alert } from 'react-bootstrap';
import './Code.css';


export default function Code(props) {
    const [amount, setAmount] = useState(0)
    const [service, setService] = useState(0)
    const [customer, setCustomer] = useState("")
    const [tip, setTip] = useState([])
    const [totalCustomer, setTotalCustomer] = useState(0)
    const [tip1, setTip1] = useState([0])

    const handler = (event) => {
        setAmount(event.target.value)
    }
    const handler1 = (event) => {
        setService(event.target.value)
    }
    const handler2 = (event) => {
        setCustomer(event.target.value)

        setTip(amount * service)
    }
    const getData = () => {

        props.AddCustomerName(`${customer} Offering a Tip Of - Rs.  ${tip}`)
        props.AddTip(tip)
    }
    const getData1 = () => {
        setTip1(`${props.totaltip.reduce((prev, next) => prev + next)}`)
        setTotalCustomer(`${props.customername.length}`)
    }
    return (
        <div id="all">
            <div className="container">
                <Form>
                    <div className="wrapper">
                        <h1>Tip Calculator</h1>
                        <p>Bill Amount</p>
                        <input type="text" id="BillAmount"
                            placeholder="Amount to be paid" onChange={handler} /> ₹
                        <p>How was the service?</p>
                        <select id="Services" onChange={handler1}>
                            <option selected disabled hidden>
                                Select
                            </option>
                            <option value="0.20">20% - Excellent</option>
                            <option value="0.15">15% - Good</option>
                            <option value="0.10">10% - Bad</option>
                            <option value="0.05">5% - Worst</option>
                        </select>
                        <p>Customer Name</p>
                        <input type="text" id="TotalPersons"
                            placeholder="Enter Your Name" onChange={handler2} />
                    </div>
                    <br />
                    <Button id="btnCustomer" variant="warning" onClick={getData}>Add Customer</Button>
                    {/* <div className="tip">
          <p>Tip Amount</p>
          <span id="total">0</span> ₹
          <span id="each">each</span>
        </div> */}
                    <div className="container">
                        <p>Customer List</p>
                        {
                            props.customername.map(ele => (
                                <Alert>
                                    <Alert.Heading>{ele}</Alert.Heading>
                                </Alert>
                            ))
                        }

                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="container">
                        <Button variant="warning" onClick={getData1} >Calculate Tip amd Customer</Button>
                    </div>
                    <br></br>
                    <div className="container" id="table">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Total Customer</th>
                                    <th>Total Tip</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <tr>
                                        <td>{totalCustomer}</td>
                                        <td>
                                            Rs.{tip1}
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                </Form>
            </div >
        </div>
    )
}
