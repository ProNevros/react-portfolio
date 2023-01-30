import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <div style={{fontSize:'50px', paddingInline:'10px', borderRadius:'5px'}}>José Leyva</div>
      <div className="navi" style={{display:'flex', fontSize:'25px'}}>
        <div>
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Home' ? 'tab-active' : 'tab'}
          >
            About Me
          </a>
        </div>
        <div>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'tab-active' : 'tab'}
          >
            Portfolio
          </a>
        </div>
        <div>
          <a
            href="#links"
            onClick={() => handlePageChange('Links')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Links' ? 'tab-active' : 'tab'}
          >
            Links
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
