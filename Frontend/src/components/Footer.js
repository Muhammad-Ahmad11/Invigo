import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='frameParent'>
        <div className='frameWrapper'>
          <div className='invigoWrapper'>
            <div className='invigo'>
              <span>In</span>
              <span className='vigo'>Vigo</span>
            </div>
          </div>
        </div>
        <div className='frameGroup'>
          <button className='dashboardWrapper' id="dashboard_butt">
            <div className='dashboard'>Dashboard</div>
          </button>
          <button className='dashboardWrapper' id="Sales_Butt">
            <div className='dashboard'>Sales</div>
          </button>
          <button className='dashboardWrapper' id="Inventory_butt">
            <div className='dashboard'>Inventory</div>
          </button>
          <button className='dashboardWrapper' id="purchdetail_butt">
            <div className='dashboard'>Details</div>
          </button>
          <button className='contactUsWrapper' id="Contacts_butt">
            <div className='dashboard'>Contact Us</div>
          </button>
        </div>
      </div>
      <div className='frameContainer'>
        <div className='cultivatingEfficiencyTrackiWrapper'>
          <div className='cultivatingEfficiencyTrackiContainer'>
            <p
              className='cultivatingEfficiencyTracki'
            >{`Cultivating Efficiency, Tracking Excellence — `}</p>
            <p className='cultivatingEfficiencyTracki'>
              Your Trusted Inventory Management Partner
            </p>
          </div>
        </div>
        <div className='facebookParent'>
          <img className='facebookIcon' alt="" src="/facebook1.svg" />
          <div className='instagramWrapper'>
            <img
              className='instagramIcon'
              alt=""
              src="/instagram1.svg"
            />
          </div>
          <div className='twitterWrapper'>
            <img className='twitterIcon' alt="" src="/twitter1.svg" />
          </div>
        </div>
      </div>
      <div className='dividerWrapper'>
        <div className='divider'>
          <img className='lineIcon' alt="" src="/line2.svg" />
        </div>
      </div>
      <div className='frameDiv'>
        <div className='privacyPolicyWrapper'>
          <div className='privacyPolicy'>Privacy Policy</div>
        </div>
        <div className='adeelWasiAhmadIncWrapper'>
          <div className='adeelWasiAhmad'>
            © 2023 Adeel, Wasi, Ahmad, Inc.
          </div>
        </div>
        <div className='termsConditionsWrapper'>
          <div className='privacyPolicy'>{`Terms & Conditions`}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
