html, body, section {
  block-size: 100%;
}

.parallax {
  /* The image used */
  background-image: url('img/bg/sky.png');

  /* Full height */
  height: 100%; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Turn off parallax scrolling for tablets and phones. Increase the pixels if needed */
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}

html {
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

section:nth-of-type(even) {
  color: white;
  background: black;
}

section:nth-of-type(odd) {
  color: black;
  background: white;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  font-size: 4rem;
}

article {
  /*  leverage cascade for cross-browser gradients  */
  background: radial-gradient(
    hsl(100 100% 60%), 
    hsl(200 100% 60%) 
  ) fixed;
  background: conic-gradient(
    hsl(100 100% 60%), 
    hsl(200 100% 60%), 
    hsl(100 100% 60%) 
  ) fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
} 