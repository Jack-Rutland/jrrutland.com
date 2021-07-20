function changeTab(tab_name) {
    switch(tab_name) {
        case "homepage" :
            document.getElementById("tabbed-content").innerHTML = homepage_html;
            document.getElementById("navigation").innerHTML = nav_homepage;
            break;
        case "about me" :
            document.getElementById("tabbed-content").innerHTML = about_me_html;
            document.getElementById("navigation").innerHTML = nav_about_me;
            break;
        case "projects" :
            document.getElementById("tabbed-content").innerHTML = projects_html;
            document.getElementById("navigation").innerHTML = nav_projects;
            break;
        case "contact me" :
            document.getElementById("tabbed-content").innerHTML = contact_me_html;
            document.getElementById("navigation").innerHTML = nav_contact_me;
            break;
    }

}

function windowPop() {
    document.getElementById("wrapper").innerHTML = "";
    var element = document.getElementById("wrapper");
    var zoom = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (zoom == 100) {
            clearInterval(id);
            element.style.height = '100%';
            document.getElementById("wrapper").innerHTML = wrapper_head + '<div class="content"  id="tabbed-content">' + homepage_html + '</div>';
        } 
        else {
            zoom+= 2; 
            element.style.width = (80 * zoom * 0.01) + '%'; 
            element.style.height = (700 * zoom * 0.01) + 'px';
            element.style.marginRight = 50 - (40 * zoom * 0.01) + '%';
            element.style.marginTop = 20 - (17 * zoom * 0.01) + '%';
        }
    }
}










// Wrapper HTML HEAD
let wrapper_head = `<div id="wrapper-header"><b>JRRutland.com</b><p><b>x</b></p></div>
<div id="navigation">
    <ul>
        <li><button id="homepage-tab" class="current_tab" onclick="changeTab('homepage')">Homepage</button></li>
        <li><button onclick="changeTab('about me')">About Me</button></li>
        <li><button onclick="changeTab('projects')">Projects</button></li>
        <li><button onclick="changeTab('contact me')">Contact Me</button></li>
    </ul>
</div>`

// TABBED PANAL HTML
let homepage_html =  `<h1>Hello! My name is Jack Rutland.</h1>
<p>I'm a Software Engineer based in New York.</p>
<p>My aspirations are to make the world a better place through innovative technologies.</p>
<br>
<p>I am currently pursuing my B.S. in Computer Science at Rensselaer Polytechnic Institute, and I am looking for work opportunities.</p>
<p>To contact me, please refer to the icons on the the left</p>
<br>
<h2>About this website</h2>
<p>This website takes heavy inspiration from the Windows 95 operating system as I believe it is important to reflect on the past to excel in the future</p>
<br>
<ul>
   <p>The tabs at the top of this page are used to navigate the site, with each tab containing the following information:</p>
   <li><b>Homepage</b> - Displays the general information for this site.</li><br>
   <li><b>About Me</b> - Information about me as well as the technologies I use. Here you can find my resume.</li><br>
   <li><b>Projects</b> - Descriptions and reflections on projects I have produced, as well as links to the repositories.</li><br>
   <li><b>Contact Me</b> - Provides Links to my socials and contact info (You can additionally use the sidebar for this!)</li><br>
</ul>`

let about_me_html = `<div class="img-with-text">
<img src="images/me.bmp">
<p>Resume<br>Email</p></div><h1>Who am I?</h1>
<p>My name is Jack Rutland and I am currently pursuing my Bachelors of Science in Computer Science
at Rensselaer Polytechnic Institute in Troy, New York
</p>
<p>
I know my way around JavaScript and I have an ever growing knowledge of web frameworks such as Next.js, and libraries such as React.<br>
I also have knowledge of Python, C++, and C from school and outside learning / projects.
</p>
<h3>How I became who I am</h3>
<p>
I’ve had an interest in computers ever since my family got an old Dell computer and placed it in the study. I would spend all the time I was allowed on it playing games I borrowed from the library and clicking on icons and buttons to see what they would do.<br> <br>
 
Once I had exhausted all the games available at the library, I moved on to a little game called Minecraft. Minecraft enabled me to unknowingly construct complex logic gates and program using redstone and command blocks respectively. The functionality of these were quite limiting, so I moved on to creating 2D and 3D shooters in unity and eventually picking up the hottest programming language at the time, Python. <br> <br>
 
I initially used Python to help me in school. It allowed me to create calculators for equations that took a long time to write by hand, as well as generate realistic looking data if I missed a lab in class. From there I began developing discord bots for servers with my friends and little 2D games with pygame. At that point I thought I knew that that was what I wanted to do, be a Python developer.<br> <br>
 
The honeymoon phase with Python eventually came to an end when I hit college and entered a hackathon with a couple of buddies. We decided that we were going to build a website for our project, which meant I had to dip my toes in the water that is JavaScript. <br> <br>
 
After completing that project and seeing how powerful JavaScript was, I had a desire to keep pursuing web development; And that’s exactly what I did
 
 
</p>
<p>
The following are the languages and technologies that I am familiar with :
</p>
<ul>
<li>JavaScript</li>
<li>HTML/CSS</li>
<li>React</li>
<li>Node</li>
<li>C/C++</li>
<li>Python</li>
<li>Git</li>
</ul>
</div>
 


`

let projects_html = `
<div class="projects-wrapper">
    <div class="project indent img-with-text no-float">
    <a href="https://devpost.com/software/valentinies" target="_blank" rel="noopener noreferrer"><img src="images/project_thumbnails/valentinies.png"></a>
        <h1>Valentinies</h1>
        <p>Valentinies was designed to enable children to have the joy of creating Valentine's Day cards
        in school, virtually!</p>
    </div>
    <p></p><p></p>
    <div class="project indent img-with-text no-float">
    <a href="https://devpost.com/software/six-feet" target="_blank" rel="noopener noreferrer"><img src="images/project_thumbnails/six_feet.png"></a>
        <h1>Six Feet</h1>
        <p>Six feet is a web based contact tracing website that updates in real time using web sockets</p>
    </div>
    <p></p><p></p><p></p><p></p>
    <div class="project indent img-with-text no-float">
    <a href="https://www.passchat.online" target="_blank" rel="noopener noreferrer"><img src="images/project_thumbnails/passchat.jpeg"></a>
        <h1>Passchat</h1>
        <p>Passchat is a SPA(Single-Page Application) chat application with infinite chat rooms. This allows users to interact in real
        time in a room of their choosing with deleting messages.</p>
    </div>
</div>
`

let contact_me_html = `<h1>Get Connected!</h1>
<p>I am currently looking for work oppertunities, so feel free to contact me with any questions!</p>
<p>Generally, I will get back to you within 24 hours</p>
<a href="mailto:jackrrutland@gmail.com" target="_blank" rel="noopener noreferrer" id="send-a-message">Send Me a Message!</a>
<br><br><br>
<p>Email for those who don't like using mailto : jackrrutland@gmail.com</p>`

let nav_homepage = ` 
<ul>
    <li><button id="homepage-tab" class="current_tab" onclick="changeTab('homepage')">Homepage</button></li>
    <li><button id="about-me-tab" onclick="changeTab('about me')">About Me</button></li>
    <li><button id="projects-tab" onclick="changeTab('projects')">Projects</button></li>
    <li><button id="contact-me-tab" onclick="changeTab('contact me')">Contact Me</button></li>
</ul>`

let nav_about_me = `  
<ul>
    <li><button id="homepage-tab"onclick="changeTab('homepage')">Homepage</button></li>
    <li><button id="about-me-tab" class="current_tab"  onclick="changeTab('about me')">About Me</button></li>
    <li><button id="projects-tab" onclick="changeTab('projects')">Projects</button></li>
    <li><button id="contact-me-tab" onclick="changeTab('contact me')">Contact Me</button></li>
</ul>`

let nav_projects = ` 
<ul>
    <li><button id="homepage-tab"onclick="changeTab('homepage')">Homepage</button></li>
    <li><button id="about-me-tab" onclick="changeTab('about me')">About Me</button></li>
    <li><button id="projects-tab" class="current_tab"  onclick="changeTab('projects')">Projects</button></li>
    <li><button id="contact-me-tab" onclick="changeTab('contact me')">Contact Me</button></li>
</ul>`

let nav_contact_me = ` 
<ul>
    <li><button id="homepage-tab" onclick="changeTab('homepage')">Homepage</button></li>
    <li><button id="about-me-tab" onclick="changeTab('about me')">About Me</button></li>
    <li><button id="projects-tab" onclick="changeTab('projects')">Projects</button></li>
    <li><button id="contact-me-tab" class="current_tab" onclick="changeTab('contact me')">Contact Me</button></li>
</ul>`