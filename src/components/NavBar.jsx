function NavBar() {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="index.html">Shakur</a></h1>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
                        <li><a className="nav-link scrollto" href="#services">Certificates</a></li>
                        <li><a className="nav-link scrollto" href="#awards">Awards</a></li>
                        <li><a className="nav-link scrollto"
                            href="https://drive.google.com/file/d/1NaT8qWa6KiJpYmOVnzA9pigqAC1WCmxa/view?usp=sharing">Download Resume</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}
export default NavBar;