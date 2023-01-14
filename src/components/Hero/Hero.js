import "style.css";
function Hero() {
return(
    <div>
    <img class="img" src="prpic.PNG" height={150} width={150}/>
        <div class="row">
        <h1 id="ob1"><b>BABU BALAJI V</b></h1>
        <h3 class="abc">IT Professional</h3> 
        <h3>Full Stack Developer</h3>
        <p>babubalaji877841@gmail.com</p>
        </div>
        <div class="row">
            <h3>Internship: <a href="https://www.indiespirit.in/" target="_blank">Indie Spirit Technologies</a></h3>
            <h3><b><a class="ob3" href="https://www.linkedin.com/in/babu-balaji-v-a3a11a253/" target="_blank">LinkedIn</a></b></h3>
        </div>
        <hr/>
        </div>
);
}
export default Hero;