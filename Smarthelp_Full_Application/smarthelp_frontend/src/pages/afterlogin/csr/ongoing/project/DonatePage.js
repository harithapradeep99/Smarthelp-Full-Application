import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./donatePage.css";

function DonatePage() {
    const params = useParams();

    // const [projectID, setProjectID] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [image, setImage] = useState("");
    const projectID = useParams().id;

    function onChangeName(e) {
        setName(e.target.value);
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);
    }
    function onChangePhone(e) {
        setPhone(e.target.value);
    }
    function onChangeAmount(e) {
        setAmount(e.target.value);
    }
    function onChangeImage(e) {
        setImage(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();

        const newDonation = {
            name,
            email,
            phone,
            amount,
            projectID,
            image,
        };

        console.log(newDonation);

        axios
            .post("/api/donations/adddonation", newDonation)
            .then(() => {
                alert("Donation Added");
                window.location.replace(
                    `/csr/ongoing_projects/projects/${params.id}`
                ); // reload the window
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="donate_body">
            <form action="">
                <div className="row">
                    <div className="col">
                        <h3 className="title">Donate</h3>
                        <h4 className="title">STEP 1</h4>

                        <div className="inputBox">
                            <span>full name :</span>
                            <input
                                type="text"
                                required="true"
                                placeholder="Enter your name"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input
                                type="email"
                                required="true"
                                placeholder="Enter your email"
                                value={email}
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className="inputBox">
                            <span>Phone Number :</span>
                            <input
                                type="text"
                                required="true"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={onChangePhone}
                            />
                        </div>
                        <div className="inputBox">
                            <span>Amount (LKR) :</span>
                            <input
                                type="number"
                                required="true"
                                placeholder="Enter the amount"
                                value={amount}
                                onChange={onChangeAmount}
                            />
                        </div>
                        <div className="inputBox">
                            <span>Image file upload :</span>
                            <input
                                type="file"
                                required="true"
                                value={image}
                                onChange={onChangeImage}
                            />
                        </div>
                        <input
                            type="submit"
                            value="proceed to next Step"
                            className="submit-btn"
                            onClick={onSubmit}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DonatePage;
