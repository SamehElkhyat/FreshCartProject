import React from 'react'
import './Footer.css'
export default function Footer() {
  return <>
  <footer className="footer bg-body-tertiary text-center">
  <div className="container p-4">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f">
        </i></a>

      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
        <i className="fab fa-twitter"></i></a>

      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
    <i className="fab fa-google">
          </i></a>

      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
          <i className="fab fa-instagram"></i>
      </a>

      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
          <i className="fab fa-linkedin-in">
          </i></a>

      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
          <i className="fab fa-github">
          </i>
      </a>
      <h3>Get The Fresh Cart App</h3>

    </section>
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">
            <div  className="form-outline mb-4">
              <input type="email" id="form5Example24" className="form-control" />
              <label className="form-label" for="form5Example24">Email address</label>
            </div>
          </div>

          <div className="col-auto">
            <button data-mdb-ripple-init type="submit" className="btn btn-outline mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
    <section className="">
      <div className="row">
   
    

      </div>
 
    </section>
 
  </div>
  


  <div className="text-center p-3" >
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://www.linkedin.com/in/sameh-salih-02179b271/">SamehElkhayat.com</a>
  </div>

</footer>
  

  
  </>
}

