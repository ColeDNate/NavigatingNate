<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nate's Page</title>
  <script src="JavaScript/Nateism.js"></script>

  <script src = "https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <link href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
  <script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>

  <script src = "../Code/JavaScript/Renav.js" type="text/javascript"></script>
  <link rel="stylesheet" href="formating.css">
</head>

<!-- in the body section I am applying the background color to the full page-->
  <body>

    <!--This is the top banner test thing -->
    <nav class="navbar sticky-top navbar-expand-sm bg-dark navbar-dark" style = "background-color: lightslategray">
    
    <!-- Links -->
    <ul class="navbar-nav">
      
      <!-- First element in dropdown list-->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          More Info
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\AboutMe.html">About Me</a>
          <a class="dropdown-item" href="D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\History.html">History</a>
          <a class="dropdown-item" href="D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\ContactInfo.html">Contact Info</a>
        </div>
      </li>
  
      <!-- second element in the dropdown list -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          Interests & Hobbies
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\Interests\Motorcycles.html">Motorcycles</a>
          <a class="dropdown-item" href="D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\Interests\Music.html">Music</a>
          <a class="dropdown-item" href="D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\Interests\Writing.html">Writing</a>
        </div>
      </li>
    </ul>
  </nav>

    <!--This is the main logo thing-->
    <!--Utilizing a separate background color for the title-->
    <div id="headline">

      <div id = "header">
        <H1>
          Navigating Nate
        </H1>
        <div class="compass-tilt">
          <img src = "D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Media\compass.png" alt = "Compass"/>
        </div>
      </div>
    </div>
    

    <!-- this is the primary text block currently functioning as an "announcement"-->
    <div id="content">

      <!-- Dropdown Navigation Column-->
      <div class = "navcolumn">
        <div id = "itemList" style = "cursor: pointer"><h3>Useful Links</h3></div>
        <div id="menu">
          <ul>
            <li><a href = "D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\Interests\Motorcycles.html">Motorcycles</a></li>
            <li><a href = "D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\Interests\Music.html">Music</li>
            <li><a href = "D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\Interests\Writing.html">Writing</a></li>
            <li><a href = "D:\Documents\GCU\CST-120\worcspaceCST-120\Milestone Project\Code\History.html">History</a></li>
          </ul>
        </div>
      </div>

      <script>
        //automatically hide the content
        $("#menu").hide();
        //on click slide the content into view
        $("#itemList").click(function(){
          $("#menu").slideToggle(250);
        });
      </script>
      

      <div class = "contentcolumn">
        <h3>
          Heads up.
        </h3>
        <p>
          In a nutshell, Nate is an average individual. Any exceptionality is immediately brought to an average by failures.
          I have any number of interests and hobbies and it can be tough to choose which ones I would like to talk about when prompted.
          I have included a trail of breadcrumbs in the about me section.
          If one is so inclined, they can find more info <a href = "AboutMe.html"> about me here.</a>
          <br/><br/>
          I generally avoid using social media, but, if one needs to get a hold of me, I do have several <a href = "ContactInfo.html">ways to be contacted here.</a>
          <br/><br/>
          This site might be an assignment for a grade but I do want to make it function so that I can take pride in what I've crafted.
          However, I never shy away from a chance to give a villain's monologue. 
          Life is too short not to make something fun out of what would normally be considered mundane.
          There are any number of options that I could have chosen for this text but a jumble of quotes and references have been done to high heaven.
          <br/><br/>
          I am a writer. I am a maverick. I will write my own monologue and hope that I will be the one to be quoted.
          If not, I will try again harder next time.
          If I fall off of my motorcycle I will get right back up, kick it off my leg if need be, fix it, and get back on. 
          Frankly, last time it happened I was in the middle of the mountains and I had to get home but I didn't have a choice.
          But this is my monologue, not a motorcycle. They both start with an 'M' but they are completely different!
          I mean, of course I could go for hours on end right on to infinity with either category, but that is no fun for anyone but myself.
          Speaking of infinity, I crafted an amazing sentence on the subject!
          Excuse me while I quote myself!
          <br/><br/>
          "What is infinity? Precariously perched from my personal perception and presumption in a position of pragmatic passion, I perceive infinity as a particularly peculiar concept which has a propensity to positively perplex perturbed ponderers with a preposterous progression of plentiful possibilities." -Myself.
          <br/><br/>
          All that is to say, "I think it confuses people with bigness."
          <br/><br/>
          Sometimes, that is how my mind feels and I can get lost in my own head. 
          I occasionally need to find my way back to where I need to be and in those cases it can be a daunting task, trying to find myself again.
          That being said is why I came up with the concept for the site name that I have sitting here at the headline.
          Count your blessings if you bother to read this, because my mind races at a million miles an hour and sometimes it is even hard for me to keep up.
          As of right now, enjoy the little bit of chaos I can fit in with my busy schedule. 
          That little bit of chaos is just the little bit of my reality. My reality is only a little bit of my existence. 
          <br/><br/>
          Thank you,
          <br/>
          David N. Cole
          <br/>
          Nate
        </p>

        <!-- Some javascript and JQuery whatever project blahness-->
        <div>
          <p>P.S. Since I could not think of anything to use for my JavaScript section, as my original idea failed with an epic faceplant, here is a thing.</p>
          <h3 id = "NateismTitle" style = "cursor: pointer">List of Nateisms</h3>

          <div id="NateismSection">
            <span id = "NateismIndex">0</span>

            <p id = "TheNateism">No Nateisms to speak of</p>

            <div class="buttons">
              <button onclick = "nateismDecrement('NateismIndex', 'TheNateism')">Last Nateism</button>
              <button onclick = "nateismIncrement('NateismIndex', 'TheNateism')">Next Nateism</button>
            </div>
          </div>

          <script>
            $("#NateismSection").hide();
            $("#NateismTitle").click(function(){
              $("#NateismSection").slideToggle(250);
            });
          </script>
        </div>
        
      </div>
    </div>

    <div id = "footer">
      <p>no content here</p>
    </div>
  </body>
</html>
