import React from 'react';

export default function Links() {
  return (
    <div class="body" style={{textAlign:'center'}}>
      <h1 style={{ margin: '25px', textDecorationLine: 'underline', textAlign:'c'}}>
        You can find me, and reach out to me here! ProNevros or just Nevros is an online handle I go by, as well.
      </h1>
      <div>
          <a  href="https://github.com/ProNevros">
            <img class='icon-link' src="images/git_icon.png"
              alt="GitHub">
            </img>
          </a>
          <a  href="https://www.linkedin.com/in/jos%C3%A9-leyva-427258249/">
            <img class='icon-link' src="images/inkedin_logo.png"
              alt="First Project">
            </img>
          </a>
          <img className='icon-link' src="images/gmail_logo.png" alt="Gmail" onClick={() => window.location = 'mailto:jrleyva41096@gmail.com'}></img>
          <p style={{fontSize:'10px'}}>(I'm sure I'll be able to add more places in the future)</p>
      </div>
    </div>
  );
}
