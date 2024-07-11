import React from 'react'
import "./Hiddenbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useBodyClass } from './BodyClassContext';

const Hidenbar = () => {
    const { removeClass } = useBodyClass();

    const handleRemoveClass = () => {
        removeClass();
    };
    return (
        <>
            <section class="hidden-bar">
                <div class="inner-box text-center">
                    <div class="cross-icon">
                        <span class="fa fa-times" onClick={handleRemoveClass}>
                            <FontAwesomeIcon icon={faX} style={{ color: "#ffffff", }} />
                        </span>
                    </div>
                    <div class="title">
                        <h4>Get Appointment</h4>
                    </div>
                    <div class="appointment-form">
                        <form method="post">
                            <div class="form-group">
                                <input type="text" placeholder="Name" name="text" value="" />
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Email Address" name="email" value="" />
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Message" rows="5"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="button-primary">Submit now</button>
                            </div>
                        </form></div>
                    <div class="social-style-one">
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-pinterest-p">
                            </i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hidenbar