import React from 'react';

export default function Portfolio() {
  return (
    <div class="body">
      <h1 style={{textAlign:'center', margin:'25px', textDecorationLine:'underline'}}>These are the projects I've worked on! All of them are a work in progress; and there's things I would like to add in the future</h1>
      <div>
        <div class='selectable'>
          <figure class="figure">
            <a href="https://mateo-wallace.github.io/P1-Steamy-Scoops/">
              <img src="images/project-image.png"
                class="figure-img img-fluid rounded"
                alt="First Project">
              </img>
            </a>
            <figcaption class="figure-caption" style={{ fontSize: '30px', textAlign: 'center' }}>Steamy Scoops</figcaption>
          </figure>
          <p class='selectableText' style={{ paddingLeft: '5px' }}>This was my bootcamp's first project in the course. Our group's primary goal was to showcase our understanding
            of APIs and how to use their data, as well as putting our CSS understanding to the test to provide a polished UI.
            This application was a simple concept to bring users recent news and videos about the game they searched. The news
            articles and videos are populated using Steam and YouTube APIs, respectively. I was tasked with UI elements and
            getting the APIs to properly fetch data. </p>
        </div>
        <div class='selectable'>
          <p class='selectableText' style={{ paddingRight: '3px' }}>The second project we've done in the bootcamp! This focuses on using databases to provide informnation such as users,
            their emails, passwords; and other things that could be associated with them. THe goal for this application
            was to have a user type in the name of the wine they were curious about, and based on the wine, the page would
            populate with reviews that people have left on that particular wine. All reviews have a reviewer, the name of
            the wine that was reviewd, where the grape is from, its vineyard, price, and a rating out of 100. My task in this project
            was the styling and the help of geting the database properly set up so data would display properly.</p>
          <figure class="figure">
            <a href="https://rose-to-rough.herokuapp.com/">
              <img src="./images/localhost_3001_.png"
                class="figure-img img-fluid rounded"
                alt="Second Project">
              </img>
            </a>
            <figcaption class="figure-caption" style={{ fontSize: '30px', textAlign: 'center' }}>Rose to Rough</figcaption>
          </figure>
        </div>
        <div class='selectable'>
          <figure class="figure">
            <a href="https://jubilee.herokuapp.com/">
              <img src="./images/localhost_3000_albums__albumId.png"
                class="figure-img img-fluid rounded"
                alt="Third Project">
              </img>
            </a>
            <figcaption class="figure-caption" style={{ fontSize: '30px', textAlign: 'center' }}>Jubilee</figcaption>
          </figure>
          <p class='selectableText' style={{ paddingLeft: '5px' }}>Our third and final project of the course I had taken. This was, by far, the hardest to get together. We were lucky
            to have a running build to even show off, haha. This was to showcase our usage of a "react" application. Being able to
            navigate through pages effortlessly and with minimal loading was the name of the game while providing a polished UI.
            It still needs some fixing; but this application was meant to be a budget option of creating a custom vinyl record
            of user selected songs. The user is required to create an account, login to be able to create the album, then search
            and select songs using the Spotify API to build their custom setlist. We also planned to add a mock payment method; but time
            got in the way.</p>
        </div>
        <div class='selectable'>
          <p class='selectableText' style={{ paddingRight: '3px' }}>Nothing here, yet!</p>
          <img src="https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gaming" width="500px" height="500px"></img>
        </div>
        <div class='selectable'>
          <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
            alt="PC" width="500px" height="500px"></img>
          <p class='selectableText' style={{ paddingLeft: '5px' }}>Nothing here, yet!</p>
        </div>
      </div>
    </div>
  );
}
