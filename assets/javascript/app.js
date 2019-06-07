$(document).ready(function() {
  //dropdown
  $(".dropdown-trigger").dropdown({
    alignment: "left",
    coverTrigger: false,
    inDuration: 200,
    outDuration: 400
  });
  //short intro pre-populated
  function populateIntro() {
    var introTitle = $(
      "<p id='intro-headText'><span class='red-text'>Hi</span>!</p>"
    );
    var introContent = $(
      "<p id='intro-text'>My name is <span class='red-text'>Muhammad</span>. <br>I'm a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio!</p>"
    );
    var introDiv = $("<div class='content'></div>");
    introDiv.attr("value", 1);
    introDiv.append(introTitle).append(introContent);
    return introDiv;
  }
  // About me page
  function populateAbout() {
    var aboutTitle = $(
      "<p id='about-headText'><span class='red-text'>About Me</span>:</p>"
    );
    var aboutContent = $(
      "<p id='about-text'> Hi, my name is Muhammad Mohsin Tahir. I’m a Sr. operations supervisor at Apple for iPhone repairs. I’ve been in the tech industry my entire career. I’ve worked at Verizon as a lead software tester, where I was responsible for performing a variety of information systems analysis, design, development, installation and implementation tasks related to information technology systems focused on testing of new software systems. I always wanted to become a software developer, and when the opportunity came to attend the bootcamp trough UC Davis, I didn’t hesitate sign up. Coding has become a hobby now, and I’m excited to develop web applications, and more. <br> Aside from coding, I like to watch football, hiking, camping, and BBQ. With remaining free time, I like to spend that with my wife, and 3 beautiful children. </p>"
    );
    var aboutDiv = $("<div class='content'></div>");
    aboutDiv.attr("value", 2);
    aboutDiv.append(aboutTitle).append(aboutContent);
    return aboutDiv;
  }

  // Contact page
  function populateContact() {
    var contactTitle = $(
      "<p id='contact-headText' class='red-text'>Contact</p>"
    );
    var contactContent1 = $(
      "<p class='contact-text' class='left-align'>Click below to see my Work!</p>"
    );
    var contactContent2 = $(
      "<p class='contact-text' class='left-align' style='padding-bottom: 1%'>Email: <br><span class='red-text'><a href='mailto:mohsin.m.tahir@gmail.com'>mohsin.m.tahir@gmail.com</a></span></p>"
    );
    var imgrow = $("<div class='row'></div>");
    var githubImgDiv = $(
      "<div class='col s6'><a href='https://github.com/mtahir2008' target='_blank'><img class='responsive-img ourImage center' src='assets/images/github.png'></a></div>"
    );
    var linkedinImgDiv = $(
      "<div class='col s6'><a href='https://www.linkedin.com/in/muhammad-mohsin-tahir/' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedin.png'></a></div>"
    );
    imgrow.append(githubImgDiv).append(linkedinImgDiv);
    var contactDiv = $("<div class='content'></div>");
    contactDiv.attr("value", 4);
    contactDiv
      .append(contactTitle)
      .append(contactContent1)
      .append(imgrow)
      .append(contactContent2);
    return contactDiv;
  }

  function populatePortfolio() {
    var portfolioTitle = $(
      "<p id='portfolio-headText' class='red-text'>Portfolio</p>"
    );
    //make cards from materialize card
    var projcard1 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-2.jpg'><span style='font-size:1.40em;' class='card-title white-text black'>Word Guess Game</span></div><div class='card-content'><p class='card-textcontent'>Welcome to my first word guess game using Javascript.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://mtahir2008.github.io/Word-Guess-Game-/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/Word-Guess-Game-' target='_blank'>View on GitHub</a></p></div></div>"
    );
    var projcard2 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-4.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Crystal Collector</span></div><div class='card-content'><p class='card-textcontent'>My second game using Javascript. In this game you collect crystals to play.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://mtahir2008.github.io/unit-4-game/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/unit-4-game' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard3 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-5.jpg'><span style='font-size:1.40em;' class='card-title white-text black'>Train Time</span></div><div class='card-content'><p class='card-textcontent'>A web app the allows you to know the next train time. First time using moment.js and Firebase.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://mtahir2008.github.io/train-time/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/train-time' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard4 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-1.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>World of Gifs</span></div><div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://mtahir2008.github.io/Giphy-api/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/Giphy-api' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard5 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-3.jpg'><span style='font-size:1.40em;' class='card-title white-text black'>Sports Trivia Game</span></div><div class='card-content'><p class='card-textcontent'>A timed sports trivia question game created using JavaScript timeout functions.</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://mtahir2008.github.io/TriviaGame-/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/TriviaGame-' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard6 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-6.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Project 1</span></div><div class='card-content'><p class='card-textcontent'>First group project using many different features, and different APIs to make it all function.</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://mallika1.github.io/bootccamp-p1/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/Mallika1/bootccamp-p1' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard7 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-7.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Liri Bot</span></div><div class='card-content'><p class='card-textcontent'>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://github.com/mtahir2008/liri-bot.git' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/liri-bot.git' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard8 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-8.jpg'><span style='font-size:1.40em;' class='card-title white-text black'>constructor-word-guess</span></div><div class='card-content'><p class='card-textcontent'>This is a node.js based application with interactive prompts on the command-line. Good luck and enjoy the game!</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://github.com/mtahir2008/constructor-word-guess.git' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/constructor-word-guess.git' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard9 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-9.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Bamazon</span></div><div class='card-content'><p class='card-textcontent'>Welcome to Bamazon, think of this as the new Amazon.To get started, clone repo, run npm install to add all of the dependencies.</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://github.com/mtahir2008/bamazon.git' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/bamazon.git' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard10 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-10.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>FriendFinder</span></div><div class='card-content'><p class='card-textcontent'> This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://rocky-basin-97853.herokuapp.com/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/FriendFinder' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard11 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-3.jpg'><span style='font-size:1.40em;' class='card-title white-text black'>clicky-game</span></div><div class='card-content'><p class='card-textcontent'>Click game built with React to track clicks and present the user with a score. The game will track each clicked image a user makes. If the same image is clicked twice the game will be reset.</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://rocky-eyrie-58301.herokuapp.com/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/clicky-game' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard12 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-1.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Project 2</span></div><div class='card-content'><p class='card-textcontent'>This application was written for project 2 of the UCD Coding Bootcamp. The landing page provides users with the opportunity to learn about trading as well as register to create a secure sign in.</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://floating-headland-19856.herokuapp.com/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/Mallika1/Project2' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard13 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-4.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Burger</span></div><div class='card-content'><p class='card-textcontent'> A burger logger utilizes MySQL, Express, and Handlebars to allow users to create, update, and read burgers from the database.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://whispering-inlet-19938.herokuapp.com/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/burger' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard14 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-5.jpg'><span style='font-size:1.40em;' class='card-title white-text black'>NYT Scraper</span></div><div class='card-content'><p class='card-textcontent'>A web app utilizes below technologies to let users view latest news Buzz!!</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href=' https://cryptic-crag-87371.herokuapp.com/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/mtahir2008/NYTScraper' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var projcard15 = $(
      "<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='http://lorempixel.com/output/technics-q-c-200-125-6.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Project 3</span></div><div class='card-content'><p class='card-textcontent'>This application was written for project 3 of the UCD Coding Bootcamp. The front end was built using React, Material-UI, and CSS/CSS Bootstrap. The backend uses Sequelize and Mysql database.</p></div><a style='font-size:1.40em;padding:5px;' class='red-text' href='https://polar-springs-68613.herokuapp.com/' target='_blank'>View Web Page</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://jenniferhjones.github.io/TBM/' target='_blank'>View on GitHub</a></p></div></div>"
    );

    var cardrow = $("<div class='row'></div>");
    cardrow
      .append(projcard1)
      .append(projcard2)
      .append(projcard3);
    var cardrow2 = $("<div class='row'></div>");
    cardrow2
      .append(projcard4)
      .append(projcard5)
      .append(projcard6);
    var cardrow3 = $("<div class='row'></div>");
    cardrow3
      .append(projcard7)
      .append(projcard8)
      .append(projcard9);
    var cardrow4 = $("<div class='row'></div>");
    cardrow4
      .append(projcard10)
      .append(projcard11)
      .append(projcard12);
    var cardrow5 = $("<div class='row'></div>");
    cardrow5
      .append(projcard13)
      .append(projcard14)
      .append(projcard15);
    var portfolioDiv = $("<div class='content'></div>");
    portfolioDiv.attr("value", 3);
    portfolioDiv.append(portfolioTitle).append(cardrow);
    portfolioDiv.append(cardrow2);
    portfolioDiv.append(cardrow3);
    portfolioDiv.append(cardrow4);
    portfolioDiv.append(cardrow5);
    return portfolioDiv;
  }

  function changeDiv(cValue, valueNew, newDiv) {
    if (cValue != valueNew) {
      $("div[value=" + cValue + "]").fadeOut(1000, function() {
        newDiv.fadeIn(500);
      });
    }
  }
  var currentValue = 1;
  var intro = populateIntro();
  var about = populateAbout();
  var portfolio = populatePortfolio();
  var contact = populateContact();
  $("#attachDiv")
    .append(intro)
    .append(about)
    .append(portfolio)
    .append(contact);
  //when user first loads page, only show intro

  about.hide();
  portfolio.hide();
  contact.hide();
  //click functions
  $("#homePage").click(function() {
    changeDiv(currentValue, 1, intro);
    currentValue = 1;
  });
  $("#topTitle").click(function() {
    $("#homePage").trigger("click");
  });
  $("#aboutPage").click(function() {
    changeDiv(currentValue, 2, about);
    currentValue = 2;
  });
  $("#portfolioPage").click(function() {
    changeDiv(currentValue, 3, portfolio);
    currentValue = 3;
  });
  $("#contactPage").click(function() {
    changeDiv(currentValue, 4, contact);
    currentValue = 4;
  });
});
