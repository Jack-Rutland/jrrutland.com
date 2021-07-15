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
<p>My asperations are to make the world a better place through inivative technologies.</p>
<br>
<p>I am currently a pursuing my B.S. in Computer Science at Rensselaer Polytechnic Institute, and I am looking for work opertunities.</p>
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
<p>Resume<br>Email</p>
</div>
<h1>Who am I?</h1>
<p>My name is Jack Rutland and I am currently pursuing my Bachelors of Science in Computer Science
at Rensselaer Polytechnic Institute in New York
</p>
<p>
Ever since I was little, I've been interested in puzzles. In fact, my preschool teachers
used to tell my parents that I frequented the "timeout table", not because I had been
troublesome, but because that's where all the puzzles were kept.
</p>
<p>
I started programming when I was 11, learning basic html and css online and running my Unity games at low frame rates on my family computer.
After that, I kept adding various tools to my toolbelt, which has led me to where I am today.
</p>
<p>
The following are the languages and technologies that I am familiar with :
</p>
<ul>
<li>C++</li>
<li>Python</li>
<li>Java</li>
<li>CSS</li>
<li>HMTL</li>
<li>Git</li>
</ul>
</div>`

let projects_html = `<h1>Hello! My name is Jack Rutland.</h1>
<p>I'm a Software Engineer based in New York.</p>
<p>My asperations are to make the world a better place through inivative technologies.</p>
<br>
<p>I am currently a pursuing my B.S. in Computer Science at Rensselaer Polytechnic Institute, and I am looking for work opertunities.</p>
<p>To contact me, please refer to the icons on the the left</p>
<br>
<h2>About this website</h2>
<p>This website takes heavy inspiration from the Windows 95 operating system as I believe it is important to reflect on the past to excel in the future</p>
<p>The tabs at the top of this page are used to navigate the site, with each tab containing the following information:</p>
<ul>
    <li><b>Homepage</b> - Displays the general information for this site.</li><br>
    <li><b>About Me</b> - Information about me as well as the technologies I use. Here you can find my resume.</li><br>
    <li><b>Projects</b> - Descriptions and reflections on projects I have produced, as well as links to the repositories.</li><br>
    <li><b>Contact Me</b> - Provides Links to my socials and contact info (You can additionally use the sidebar for this!)</li><br>
</ul>`

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