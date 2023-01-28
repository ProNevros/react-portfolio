import React from 'react';

export default function Home() {
  return (
    <div class='body' style={{ textAlign: 'center' }}>
      {/* <img src=''></img> */}
      <h1 style={{ margin: '25px', textDecorationLine: 'underline' }}>
        Hello! I'm an amatuer web developer interested in the tech industry and gaming.
      </h1>
      <section>
        <h2>How I got started</h2>
        <p style={{marginInline:'100px'}}>I began this journey by signing up for a full-time 90 day bootcamp course provided
          by the Univercity of Central Florida. I had NO prior knowledge of coding, and only
          had a surface/hobbyist level knowledge of computers. The bootcamp started simple
          in the first month with html and CSS, and light javascript. I felt confident that
          first month; but was immediately humbled going into the second month with the
          introduction of more advanced JavaScript, databases with DBeaver, and node. The third
          month felt like the longest month, followed by the BIGGEST wave of impostor syndrome ever.
          I didn't; and won't give up, though.
        </p>
      </section>
      <section>
        <h2>What led me to this interest?</h2>
        <p style={{marginInline:'100px'}}>When I moved to Florida and began living with my roommate. I would see
          him on his laptop with a screen full of lines of code. I jokingly asked 'are you a hacker?';
          and he showed me that he was making a simple game and a website attched to it. I was so
          interested in it, I had to try it out myself. I would youtube videos on how to do it; but
          the issue was that with my draining 9-5, I didn't have the energy to keep it up past a few days.
          So, I took the leap and decided to look for courses that specialized in coding. Lo and behold, I found UCF!
        </p>
      </section>
      <section>
        <h2>What do I do for fun?</h2>
        <p style={{marginInline:'100px'}}>I like tinkering around with my past projects to see what I can do to make them better. When I'm not doing that,
          I'm lazing about at home in my jammies playing games and chatting with my freinds. I typically play shooters with
          friends; but fighting games are my jam! I loved playing Soul Caliber 2 back in the arcade; and my family was obsessed
          with Mortal Kombat. If I'm not coding, I'm trying to get my friends to try more fighting games haha.
        </p>
      </section>
      <section>
        <h2>What do I see in my future?</h2>
        <p style={{marginInline:'100px'}}>Personally, sitting in my home office chair making bank. I want to live comfortably; and ensure my future is
          financially secured. I'd like to help my mother and grandmother pay off thier own debt for everything they've done. For
          a more personal goal, I'd like to learn what it takes to code a fighting game! It won't happen without a lot of work
          and googling; and I'm 100% ready(and nervous) to move forward from this point.
        </p>
      </section>
    </div>
  );
}
