function ContactSection() {
    return (
        <section id="contact" className="contact section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Contact</h2>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-4">
                                <div className="contact-about">
                                    <h3>Shakur</h3>
                                    <p>Reach me out any time @ social media sites</p>
                                    <div className="social-links">
                                        <a href="https://twitter.com/abdusshakur1412" className="twitter"><i className="bi bi-twitter"></i></a>
                                        <a href="https://www.facebook.com/smart.shakur/#" className="facebook"><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com/shakur427/" className="instagram"><i className="bi bi-instagram"></i></a>
                                        <a href="https://www.linkedin.com/in/abdus-shakur/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="info">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-geo-alt"></i>
                                        <p><br /><a href="https://www.google.co.in/maps/place/Madurai,+Tamil+Nadu/">Madurai, Tamilnadu, India</a>
                                        </p>
                                    </div>

                                    <div className="d-flex align-items-center mt-4">
                                        <i className="bi bi-envelope"></i>
                                        <p><a href="mailto:abdusshakurt@gmail.com">abdusshakurt@gmail.com</a></p>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5 col-md-8">
                                <form action="https://integrated-services.herokuapp.com/messages" method="post" role="form" className="php-email-form">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

    );
}

export default ContactSection;