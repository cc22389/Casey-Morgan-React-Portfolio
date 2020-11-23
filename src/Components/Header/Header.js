import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";



function Header() {
    const location = useLocation();
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="nameBrand"> <span className="C">C</span><span className="asey"
                >asey</span><span className="M">M</span><span
                    className="organ">organ</span></div>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;