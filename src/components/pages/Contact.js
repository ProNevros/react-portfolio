import React from 'react';

export default function Links() {
  return (
    <div class="body pt-6 p-8 pl-2 md:pl-8 text-left space-y-4">
      <p class="text-base mb-2 text-slate-200">
        Helo World! I'm José Leyva. Like these other fine lads I began about a month before this
        project started. The journey is rough and headache inducing; but getting those lines of
        code to work aftert hours of struggling is one of the greatest feelings as a developer. I'm still
        struggling with javascript; but I'm doing my best to pick it up ASAP to be on the level of
        my classmates and fellow coders. NICE CODE.
      </p>
    
      <a href="https://github.com/ProNevros" target="_blank" rel="noopener noreferrer">
        <button
          class="shadow py-2 px-4 rounded mt-2"
          type="button">GitHub</button>
      </a>
      <a href="https://www.linkedin.com/in/jos%C3%A9-leyva-427258249/" target="_blank" rel="noopener noreferrer">
        <button
          class="shadow py-2 px-4 rounded mt-2"
          type="button">LinkedIn</button>
      </a>
    </div>
  );
}
