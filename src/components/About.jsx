function About(){
    const name ="Fatma";
    const role ="IT Student";
    return(
    <section className="about">
<h2>About Me</h2>
<p>I'm {name}, an {role} passionate about building web and mobile apps</p>
      <p>skills i learned recently:</p>
      <ul>
        <li>Flutter</li>
        <li>Laravel</li>
        <li>React (Beginner)</li>
      </ul>
        </section>
    );
}
export default About;
