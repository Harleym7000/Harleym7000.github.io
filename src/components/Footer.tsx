import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <MDBFooter className='text-center text-lg-start text-white footer'>
            <section className='pt-3'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="4" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                HM Tech Solutions
                            </h6>
                            <p>
                                I am a freelancer based in the UK offering a range of technology solutions
                                for your business including web development, web design, PC building, hardware repairs and more!
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 bg-ye'>
                            <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                            <p>
                                <a href='/' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#about' className='text-reset'>
                                    About
                                </a>
                            </p>
                            <p>
                                <a href='#portfolio' className='text-reset'>
                                    Portfolio
                                </a>
                            </p>
                            <p>
                                <a href='#contact' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="5" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 ml-4'>Contact</h6>
                            <p>
                                <EmailIcon fontSize="large" className="emailIcon"/>
                                hmtechsolutions@gmail.com
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 ml-4'>Social Media</h6>
                            <FacebookIcon fontSize="large" className="facebookIcon"/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                © {getCurrentYear()} Copyright: HM Tech Solutions. All rights reserved
            </div>
        </MDBFooter>
    );
}