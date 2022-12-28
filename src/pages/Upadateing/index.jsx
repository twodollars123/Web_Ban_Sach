import React from 'react'
import './style.scss'
function Updating() {
  return (
    <>
    <div className="maintenance">
    <div className="maintenance_contain">
      <img src="https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-vector.png" alt="maintenance" />
      <span className="pp-infobox-title-prefix">WE ARE COMING SOON</span>
      <div className="pp-infobox-title-wrapper">
            <h3 className="pp-infobox-title">The website under maintenance!</h3>
        </div> 
    <div className="pp-infobox-description">
          <p>Someone has kidnapped our site. We are negotiation ransom and<i>will resolve this issue in 24/7 hours</i></p>			</div>    
      <span className="title-text pp-primary-title">We are social</span>
      <div className="pp-social-icons pp-social-icons-center pp-responsive-center">
      <span className="pp-social-icon">
          <a itemProp="url" href="#" />
          <a itemProp="sameAs" href="#" target="_blank" title="Facebook" aria-label="Facebook" role="button">
              <i className="fa fa-facebook"></i>
          </a>
      </span>
      <span className="pp-social-icon">
          <a itemProp="url" href="#"/>
          <a itemProp="sameAs" href="#" target="_blank" title="Twitter" aria-label="Twitter" role="button">
              <i className="fa fa-twitter"></i>
          </a>
      </span>
      <span className="pp-social-icon">
          <a itemProp="url" href="#" />
          <a itemProp="sameAs" href="#" target="_blank" title="Google Plus" aria-label="Google Plus" role="button">
              <i className="fa fa-google-plus"></i>
          </a>
      </span>
      <span className="pp-social-icon">
          <a itemProp="sameAs" href="#" target="_blank" title="aedIn" aria-label="LinkedIn" role="button">
              <i className="fa fa-linkedin"></i>
          </a>
      </span>
  </div>
    </div>
  </div>
  </>
  )
}

export default Updating