(this["webpackJsonpprofile-react"]=this["webpackJsonpprofile-react"]||[]).push([[0],{163:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(74),r=i.n(s),c=i(77),o=i(23),l=i.n(o),d=i(0);var m=function(e){return Object(d.jsxs)("section",{id:"hero",className:"testng d-flex flex-column align-items-center justify-content-center",children:[Object(d.jsxs)("h1",{children:["Hi, I'm ",e.name,"!"]}),Object(d.jsx)("h2",{children:e.designation}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("br",{}),Object(d.jsx)("a",{class:"download-button",href:e.resumeUrl,children:"Download Resume"})]}),Object(d.jsx)("a",{href:"#about",className:"btn-get-started scrollto",children:Object(d.jsx)("i",{className:"bi bi-chevron-double-down"})})]})};var h=function(e){return Object(d.jsx)("header",{id:"header",className:"d-flex align-items-center",children:Object(d.jsxs)("div",{className:"container d-flex align-items-center justify-content-between",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("h1",{children:Object(d.jsx)("a",{href:"index.html",children:e.name})})}),Object(d.jsxs)("nav",{id:"navbar",className:"navbar",children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto active",href:"#hero",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"#services",children:"Certificates"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"#awards",children:"Awards"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:e.resumeUrl,children:"Download Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"nav-link scrollto",href:"#contact",children:"Contact"})})]}),Object(d.jsx)("i",{className:"bi bi-list mobile-nav-toggle"})]})]})})},u=i(9);var p=function(e){return Object(d.jsx)("section",{id:"about",className:"about section-bg",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row no-gutters",children:Object(d.jsx)("div",{className:"col-xl ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch",children:Object(d.jsxs)("div",{className:"content d-flex flex-column justify-content-center",children:[Object(d.jsx)("h3",{children:"About"}),e.about.description.map((function(e){return Object(d.jsx)("p",{children:Object(u.a)(e)})})),Object(d.jsx)("div",{className:"row",children:e.about.aboutObjects.map((function(e){return Object(d.jsx)("div",{className:"col-md-6 col-lg-4 d-md-flex align-items-md-stretch",children:Object(d.jsxs)("div",{className:"count-box",children:[Object(d.jsx)("i",{className:e.icon}),Object(d.jsx)("span",{"data-purecounter-start":"0.1","data-purecounter-end":e.value,"data-purecounter-duration":"1","data-purecounter-decimals":e.decimals,className:"purecounter"}),Object(d.jsx)("p",{children:Object(u.a)(e.description)})]})})}))})]})})})})})};var j=function(e){return Object(d.jsx)("section",{id:"skills",className:"skills section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Skills"}),Object(d.jsx)("p",{children:e.skill.description})]}),Object(d.jsx)("div",{className:"row skills-content",children:e.skill.skills.map((function(e){return Object(d.jsx)("div",{className:"col-lg-6",children:Object(d.jsxs)("div",{className:"progress",children:[Object(d.jsxs)("span",{className:"skill",children:[e.name," ",Object(d.jsx)("i",{className:"val"})]}),Object(d.jsx)("div",{className:"progress-bar-wrap",children:Object(d.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]})})}))})]})})},b=i(30),g=i(31),f=function(){function e(){Object(b.a)(this,e),this.generateRandomNum()}return Object(g.a)(e,[{key:"generateRandomNum",value:function(){return this.randomNum=Math.floor(1e4*Math.random()),this.randomNum}},{key:"getRandomNumber",value:function(){return this.randomNum}},{key:"randomize",value:function(){this.generateRandomNum()}}]),e}();function x(e){var t=new f;return e.categoryDetails.map((function(e){return Object(d.jsxs)("div",{className:"resume-item",children:[e.title?Object(d.jsx)("h4",{children:e.title}):null,e.highlight?Object(d.jsx)("h5",{children:e.highlight}):null,e.summary?Object(d.jsx)("p",{children:Object(u.a)(e.summary)}):null,e.descriptionType||"plain"===e.descriptionType?Object(d.jsxs)("ul",{children:[console.log("UL  Elements"),e.description.map((function(e){return Object(d.jsx)("li",{children:Object(u.a)(e)})})),e.shortDescription?Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{className:"view-more-button","data-bs-toggle":"collapse","data-bs-target":"#collapseAwards"+t.getRandomNumber(),"aria-controls":"collapseExample",children:"View More ..."}),Object(d.jsx)("div",{className:"collapse",id:"collapseAwards"+t.getRandomNumber(),children:e.shortDescription.map((function(e){return Object(d.jsx)("li",{children:Object(u.a)(e)})}))})]}):null,t.randomize()]}):Object(d.jsxs)("div",{children:[e.description?e.description.map((function(e){return Object(d.jsx)("p",{children:Object(u.a)(e)})})):null,e.shortDescription?Object(d.jsx)("p",{className:"view-more-button","data-bs-toggle":"collapse","data-bs-target":"#collapseAwards"+t.getRandomNumber(),"aria-expanded":"false","aria-controls":"collapseExample",children:"View More ..."}):null,Object(d.jsx)("div",{className:"collapse",id:"collapseAwards"+t.getRandomNumber(),children:e.shortDescription?e.shortDescription.map((function(e){return Object(d.jsx)("p",{children:e})})):null})]})]})}))}var v=function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:e.pageTitle}),Object(d.jsx)("p",{children:e.awards.description})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-6",children:e.awards.details.map((function(e){return Object(d.jsx)("div",{children:"RIGHT"===e.align&&0!==e.align||1===e.align?null:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"resume-title",children:e.category}),x(e)]})})}))}),Object(d.jsx)("div",{className:"col-lg-6",children:e.awards.details.map((function(e){return Object(d.jsx)("div",{children:"RIGHT"!==e.align&&1!==e.align||0===e.align?null:Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"resume-title",children:e.category}),x(e)]})})}))})]})]})};var O=function(e){var t=e.resume;return Object(d.jsx)("section",{id:"resume",className:"resume section-bg",children:Object(d.jsx)(v,{pageTitle:"Resume",awards:t})})};var w=function(e){var t=e.certificate;return Object(d.jsx)("div",{className:"col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 cert-card",children:Object(d.jsxs)("div",{className:"icon-box",children:[Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("i",{className:t.icon})}),Object(d.jsx)("h4",{className:"title",children:Object(d.jsx)("a",{href:t.url,children:t.title})}),Object(d.jsx)("p",{className:"description",children:t.description})]})})};var y=function(e){return Object(d.jsx)("section",{id:"services",className:"services section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section-title",children:[Object(d.jsx)("h2",{children:"Certifications"}),Object(d.jsx)("p",{})]}),Object(d.jsx)("div",{className:"row",children:e.certification.map((function(e){return Object(d.jsx)(w,{certificate:e})}))})]})})};var N=function(e){return Object(d.jsx)("section",{id:"awards",className:"resume section-bg",children:Object(d.jsx)(v,{pageTitle:"Achievements and Awards",awards:e.awards})})};var k=function(e){return Object(d.jsx)("section",{id:"contact",className:"contact section-bg",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"section-title",children:Object(d.jsx)("h2",{children:"Contact"})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-4 col-md-4",children:Object(d.jsxs)("div",{className:"contact-about",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("p",{children:e.contact.description}),Object(d.jsxs)("div",{className:"social-links",children:[Object(d.jsx)("a",{href:e.contact.twitter,className:"twitter",children:Object(d.jsx)("i",{className:"bi bi-twitter"})}),Object(d.jsx)("a",{href:e.contact.facebook,className:"facebook",children:Object(d.jsx)("i",{className:"bi bi-facebook"})}),Object(d.jsx)("a",{href:e.contact.instagram,className:"instagram",children:Object(d.jsx)("i",{className:"bi bi-instagram"})}),Object(d.jsx)("a",{href:e.contact.linkedIn,className:"linkedin",children:Object(d.jsx)("i",{className:"bi bi-linkedin"})})]})]})}),Object(d.jsx)("div",{className:"col-lg-3 col-md-4",children:Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("i",{className:"bi bi-geo-alt"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:e.contact.location.url,children:e.contact.location.name})]})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center mt-4",children:[Object(d.jsx)("i",{className:"bi bi-envelope"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:"+e.contact.email,children:e.contact.email})})]})]})}),Object(d.jsx)("div",{className:"col-lg-5 col-md-8",children:Object(d.jsxs)("form",{action:"https://integrated-services.herokuapp.com/messages",method:"post",className:"php-email-form",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name",required:!0})}),Object(d.jsx)("div",{className:"form-group mt-3",children:Object(d.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email",required:!0})}),Object(d.jsx)("div",{className:"form-group mt-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject",required:!0})}),Object(d.jsx)("div",{className:"form-group mt-3",children:Object(d.jsx)("textarea",{className:"form-control",name:"message",rows:"5",placeholder:"Message",required:!0})}),Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsx)("div",{className:"loading",children:"Loading"}),Object(d.jsx)("div",{className:"error-message"}),Object(d.jsx)("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"submit",children:"Send Message"})})]})})]})]})})},T=i(75),A=i.n(T),D=new(function(){function e(){Object(b.a)(this,e),this.profileDetailUrl="http://localhost:8080",this.profileDetailEndpoint="/profile-details",this.profileDetailUrl="https://profile-details-service.onrender.com"}return Object(g.a)(e,[{key:"getProfile",value:function(e){var t=String(this.profileDetailUrl)+this.profileDetailEndpoint+e;return A.a.request({url:t,method:"get"})}}]),e}()),I=i(2),S={id:"63cd5a30dfe91e5d2080d334",name:"Shakur",indicationType:"Java Full Stack Developer",experience:"2023-01-22T15:48:14.118+00:00",experienceValue:null,designation:"Java Full-Stack Developer",resumeUrl:"https://drive.google.com/file/d/1lRA3v7t6JlQQSTjtrAx6zjMwVP5-vrKh/view?usp=share_link",about:{description:["I was Born and brought up in <strong><em>Tamilnadu, India</em></strong> . Growing up, I had a unique perspective of the world - being indian and being an Engineer. I really enjoy learning new things and am constantly seeking out new learning opportunities. I'm not afraid of failure. In fact, I think it is an essential part of the experimental process that gets you to success.<br /><br /> I graduated from the Sethu Institute of technology, Madurai, Tamil Nadu, with a B.E in Mechanical Engineering as an Institute level <strong><em>Bronze Medalist</em></strong>."],aboutObjects:[{icon:"bi bi-clock",value:"5",decimals:"2",description:"<strong>Years of experience</strong> I have several years of experience in the Information Technology and services industry, where I have been providing top-notch Backend API and UI development services."},{icon:"bi bi-emoji-smile",value:"15",decimals:"0",description:"<strong>Projects :</strong> I have a diverse portfolio of completed projects that includes both professional and personal creations. These projects are a testament to my technical expertise, creative problem-solving abilities, and attention to detail."},{icon:"bi bi-journal-richtext",value:"8",decimals:"0",description:"<strong>Certified : </strong>I am proficient in various skills and have obtained certifications from well-recognized e-learning providers. The validation of these certificates is available online and can be verified by potential employers or clients to ensure the authenticity of my qualifications."},{icon:"bi bi-clock",value:"14",decimals:"0",description:"<strong>Proficient Technologies : </strong> My expertise in full-stack development allows me to work on projects from ideation to deployment, ensuring that all aspects of the development process are handled effectively."},{icon:"bi bi-award",value:"9",decimals:"0",description:"<strong>Awards and Recognition</strong> from Multi-national company for professional outstanding performance, team work, out-of-box thinking with recognized certificates from the organization"}]},skill:{description:"I'am an Excellent problem solver with good analytical skills, solid understanding of a software development and computer programming, highly organized and creative, possess engineering leadership, strong research skills, excellent written and communication skills with high proficiency in writing automation scripts.",skills:[{name:"Java",value:"95"},{name:"Rest-Assured",value:"90"},{name:"Appium",value:"85"},{name:"Postman",value:"100"},{name:"Jenkins",value:"70"},{name:"React",value:"85"},{name:"HTML",value:"70"},{name:"Selenium",value:"100"},{name:"JMeter",value:"100"},{name:"GIT",value:"90"},{name:"Spring Boot",value:"75"},{name:"Maven",value:"80"}]},certification:[{icon:"bx bx-cog",title:"REST API Automation",url:"https://www.udemy.com/certificate/UC-9710310d-4154-4c88-9358-a68cdab513a6/",description:"Rest API Backend web services automation, end to end automation along with best practices and real time application testing"},{icon:"bx bx-cog",title:"Selenium WebDriver with Java - Advanced + Frameworks",url:"https://www.udemy.com/certificate/UC-4734a1b3-f9cd-4d4c-a782-a4a828852c11/",description:"Selenium Automation of Any Real world web Applications, along with custom framework building from scratch"},{icon:"bx bx-tachometer",title:"JMeter - Performance Testing",url:"https://www.udemy.com/certificate/UC-e37c69f0-efdc-4683-841c-e6513c1de00e/",description:"Design Robust Performance Testcases in Jmeter tool with the help of available features and Monitor the Performance of application with different Load Parameters"},{icon:"bx bx-globe",title:"Java Web Development",url:"https://www.udemy.com/certificate/UC-7538b86e-9ea8-4a54-8c3b-700a899fb986/",description:"Indepth Understanding of Building Backend for Web Applications from Scratch"},{icon:"bx bx-git-repo-forked",title:"Git Complete - The Definitive Guide",url:"https://www.udemy.com/certificate/UC-b9c9a89d-460d-41d3-bac1-a6bf4a5b75dc/",description:"Very Solid Understanding and Hands-On Experience with Git and related source control concepts."},{icon:"bx bxl-figma",title:"Figma UI / UX Design Essentials",url:"https://www.udemy.com/certificate/UC-fcad9e51-ca1a-43ee-bfa7-2d1fd54b6018/",description:"Design Interface using Powerfull tools like constraints for responsive layouts"},{icon:"bx bx-abacus",title:"GMath - Permutations and Combinations",url:"https://www.udemy.com/certificate/UC-e282a8d7-1557-4960-9b48-18de348158a9/",description:"Well Researched Explanations as well as time saving techniques for Solving Permutations and Combinations (PnC) problems"}],contact:{description:"Reach me out any time @ social media sites",location:{name:"Madurai, Tamilnadu, India",url:"https://www.google.co.in/maps/place/Madurai,+Tamil+Nadu/"},email:"abdusshakurt@gmail.com",twitter:"https://twitter.com/abdusshakur1412",facebook:"https://www.facebook.com/smart.shakur/#",linkedIn:"https://www.linkedin.com/in/abdus-shakur/",messageReference:""},awards:{description:"",details:[{description:null,category:"Awards",align:"LEFT",categoryDetails:[{title:"On the Spot Awards",highlight:"3 Awards",summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",descriptionType:null,description:["For Ensuring the Quality of organization delieverables, with Increased attention to details and impeccable knowledge of the domain."],shortDescription:["Created Highest number of automation scripts in the team at the critical delieverable period.","Provided the leadership with extra edge to talk about the wealth of knowledge regarding domain or technology to the customers."]},{title:"Team Awards",highlight:"3 Awards",summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",descriptionType:null,description:["Best team award based on the appreciations from client and inclusive of 2 On-the-spot award for exceptional performance as a team."],shortDescription:null},{title:"Insitute Level Medalist",highlight:"Bachelor of Engineering in Mechanical",summary:"<strong><em>Completed Bachelors degree with distinction & Institute level bronze medalist</em></strong>",descriptionType:null,description:null,shortDescription:null},{title:"Applause Award",highlight:"Out-Of-The-Box thinking",summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",descriptionType:null,description:["For solving critical customer issue with a simple java program based tool."],shortDescription:null}]},{description:null,category:"Java Web Services",align:"LEFT",categoryDetails:[{title:"Virtualized Data Service",highlight:"Spring Boot",summary:null,descriptionType:null,description:["Virtual data service which records the changing data at a specific point to database and pushes the same to the cache upon test execution for regression."],shortDescription:null},{title:"Availabilty Dashboard",highlight:"Spring Boot, React and MongoDb",summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",descriptionType:null,description:["Environment availabilty service with React based <a href='https://abdus-shakur.github.io/api-health-dashboard-react'>UI Dashboard</a> which displays the availability of test environments."],shortDescription:null}]},{description:null,category:"UI Automation",align:"RIGHT",categoryDetails:[{title:"Automation Framework",highlight:"Framework Enhancement",summary:null,descriptionType:null,description:["Designed an Automation framework based on selenium implementing a Page-Object Model, Extent Report and query based data extraction from excel with filtering algorithm to speed up scripting upto 5X for test suites."],shortDescription:null},{title:"Automation Tool",highlight:"Value Addition",summary:null,descriptionType:null,description:["Created an application specific tool which follow the specified pattern of xpath extraction. To completely automate the process of navigations thereby increasing automation teams productivity."],shortDescription:null}]},{description:null,category:"API Automation",align:"RIGHT",categoryDetails:[{title:"Custom API Framework",highlight:"Automation framework",summary:null,descriptionType:null,description:["Created a REST-Assured based automation framework with in-built dynamic header management and embedded OAuth token generation mechanism with Apache poi based test data and integrated mongoDb support for centralized and parallel test suite execution."],shortDescription:null},{title:"Velocity template integration",highlight:"Framework Enhancement",summary:null,descriptionType:null,description:["Dynamic generation of json upon test execution to enable hassle free test data maintenance with increased productivity."],shortDescription:null},{title:"Jira Integration",highlight:"Jira , TestNG",summary:null,descriptionType:null,description:["Embedded Jira Integration to the custom developed framework. Which enables local or over the cloud executed test cases to reflect the live result status in jira eliminating the need of manual updation"],shortDescription:null}]},{description:null,category:"Devops",align:"RIGHT",categoryDetails:[{title:"Single Touch Regression Suite",highlight:"Jenkins",summary:null,descriptionType:null,description:["Enabled test cases from multiple projects to be executed in multiple environments with a simple customizable parametrized jenkins job."],shortDescription:null},{title:"Health Check Report",highlight:"Jenkins",summary:null,descriptionType:null,description:["Highly flexible environment monitoring tool for over 20+ Api's in 12 enviroment with scheduled reports being sent to the clients."],shortDescription:null}]}]},resume:{description:"I'm an Experienced Automation Engineer with a demonstrable history of working in the information technology and services industry. Skilled in API Automation, JMeter, Maven, Agile Methodologies, Quality Assurance, and UI Automation. Strong engineering professional with a Bachelor of Engineering - B.E. focused in Automation Testing and Web Development and all related Technologies.",details:[{description:null,category:"Summary",align:"LEFT",categoryDetails:[{title:"Abdus Shakur",highlight:null,summary:"<br/><em>Highly dedicated Quality Assurance Automation Engineer & Developer, Offering with over <strong><em><span id='experience'>2.88</span></em></strong> years of Industry Experience in Automated Testing.</em>",descriptionType:"bulletin",description:["<em>Madurai, TamilNadu, India.</em>","<em>abdusshakurt@gmail.com</em>"],shortDescription:null}]},{description:null,category:"Professional Experience",align:"LEFT",categoryDetails:[{title:"Quality Assurance Automation Lead",highlight:"Apr 2020 - Present",summary:"<strong><em>Tata Consultancy Services, Kochi, Kerala, India</em></strong>",descriptionType:"bullet",description:["Consistently received highest band for three years along with 2X pay rise after clearing an organization level high talent capablity assessment in 2021","Capable of managing multiple user stories simultaneously even of high complexities."],shortDescription:["Presented live demo to clients for newly created custom framework from scratch with multiple features.","Lead in the design, development and implementation of the automation tests","Delegate tasks to the members of the team and provide counsel on all aspects of the project.","Had a clear idea of how the app is supposed to work in every aspect. Set up a test environment in alignment with all the requirements","Manage Offshore Testing Team and Ensure daily tasks to be promptly fulfilled & comments to be updated in Effort tracking tool.","Fulfilled all the stories/tasks committed to at the start of the sprint/day, zero spillovers.Participate on Scrum stand up, Sprint grooming, Sprint planning & retrospection connects.","DevOps: Integrate the automation project with Dev project & Dev pipeline thereby. With every deployment the regression suite to run smoothly. Also ensure JIRA integration of automation status is done by end of each sprint."]}]}]}};function E(e){var t,i=e.data;return i||(t=!0),Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)("div",{children:"Empty"}):Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{name:i.name,designation:i.designation,resumeUrl:i.resumeUrl}),Object(d.jsx)(h,{name:i.name,resumeUrl:i.resumeUrl}),Object(d.jsxs)("main",{id:"main",children:[Object(d.jsx)(p,{about:i.about}),Object(d.jsx)(j,{skill:i.skill}),Object(d.jsx)(O,{resume:i.resume}),Object(d.jsx)(y,{certification:i.certification}),Object(d.jsx)(N,{awards:i.awards}),Object(d.jsx)(k,{name:i.name,contact:i.contact})]}),Object(d.jsx)(l.a,{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"}),Object(d.jsx)(l.a,{type:"text/javascript",src:"./assets/vendor/php-email-form/validate.js"}),Object(d.jsx)(l.a,{type:"text/javascript",src:"./assets/vendor/purecounter/purecounter.js"}),Object(d.jsx)(l.a,{type:"text/javascript",src:"./assets/js/main.js"})]})})}var R=function(e){var t=Object(a.useState)(S),i=Object(c.a)(t,2),n=i[0],s=i[1],r=Object(I.e)();return Object(a.useEffect)((function(){return D.getProfile(r.search).then((function(e){s(e.data)})).catch((function(e){return console.log("Exception in getting profile data;"+e)})),function(){D.getProfile(r.search).then((function(e){s(e.data)}))}}),[r.search]),Object(d.jsx)(E,{data:n})},C=i(47);var M=function(){return Object(d.jsx)(C.a,{children:Object(d.jsx)(I.a,{path:"/",component:R})})},P=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,164)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),P()}},[[163,1,2]]]);
//# sourceMappingURL=main.5a58ed3c.chunk.js.map