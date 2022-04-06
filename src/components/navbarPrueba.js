            {/* <!--Navbar demo start--> */}
            <header className="z-index-fixed header-transparent header-absolute-top header-sticky">
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container position-relative">
                        <a className="navbar-brand" href="index.html">
                            <img src={mainLogo} alt="" className="img-fluid" />
                        </a>

                        <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
                            <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar-demo-4" aria-controls="navbar-demo-4" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                    <i></i>
                                </span>
                            </button>
                            <div className="nav-item me-3 me-lg-4">
                                <a href="#!" className="btn btn-outline-secondary p-0 width-4x height-4x flex-center rounded-circle">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                                <a href="#!"
                                    className="btn btn-outline-secondary p-0 mx-1 mx-lg-2 width-4x height-4x flex-center rounded-circle">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                                {/* <a href="#!" className="btn btn-outline-secondary p-0 width-4x height-4x flex-center rounded-circle">
                                    <i className="bx bxl-instagram"></i>
                                </a> */}
                            </div>

                            <div className="nav-item me-3 me-lg-0">
                                <a href="#!" className="btn btn-danger btn-sm">Strava</a>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-demo-4">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item me-lg-3">
                                    <a href="#!" className="nav-link">Inicio</a>
                                </li>
                                <li className="nav-item me-lg-3">
                                    <a href="#!" className="nav-link">Nosotros</a>
                                </li>
                                <li className="nav-item me-3">
                                    <a href="#!" className="nav-link">Eventos</a>
                                </li>
                                <li className="nav-item me-lg-3">
                                    <a href="#!" className="nav-link">Galerías</a>
                                </li>
                                <li className="nav-item me-lg-3">
                                    <a href="#!" className="nav-link">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>