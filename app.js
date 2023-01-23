* {
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
  }
  
  section {
    background-color: #b1deef;
    min-height: 20px;
    max-width: 50%;
    margin: 1% auto;
    text-align: center;
    padding: 5% auto;
    border: 1px solid #264653;
  }
  
  h2 {
    color: #E76F51;
  }
  
  button {
    margin: 25px 10px;
    border: 1px solid #299D8F;
    background-color:  #89c8c1;
    padding: 6px 14px;
    max-height: 30px;
    min-height: 30px;
  }
  
  input {
    margin: 25px 10px;
    border: 1px solid #E9C46B;
    max-height: 24px;
    min-height: 30px;
  }
  
  h3 {
    color: #F3A261;
    border: 1px solid #e37011;
    width: 30%;
    margin: 2px auto;
    text-align: center;
  }
  
  /* 
  264653 - teal
  299D8F - 🍏 
  E9C46B - 💛 
  F3A261 - 📙 
  E76F51 - 🧡 
   */
  
   #myInput {
    background-image: url('/css/searchicon.png'); /* Add a search icon to input */
    background-position: 10px 12px; /* Position the search icon */
    background-repeat: no-repeat; /* Do not repeat the icon image */
    width: 100%; /* Full-width */
    font-size: 16px; /* Increase font-size */
    padding: 12px 20px 12px 40px; /* Add some padding */
    border: 1px solid #ddd; /* Add a grey border */
    margin-bottom: 12px; /* Add some space below the input */
  }
  
  /* #myUL  */
  
  #even, #odd{
    /* Remove default list styling */
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  /* #myUL li a */
  
  #even li, #odd li {
    border: 1px solid #ddd; /* Add a border to all links */
    margin-top: -1px; /* Prevent double borders */
    background-color: #f6f6f6; /* Grey background color */
    padding: 12px; /* Add some padding */
    text-decoration: none; /* Remove default text underline */
    font-size: 18px; /* Increase the font-size */
    color: black; /* Add a black text color */
    display: block; /* Make it into a block element to fill the whole list */
  }
  
  /* #myUL li a:hover:not(.header) */
  
  #even li a:hover:not(.header) {
    background-color: #eee; /* Add a hover effect to all links, except for headers */
  }
  
  #odd li a:hover:not(.header) {
    background-color: #eee; /* Add a hover effect to all links, except for headers */
  }
  
  #image-container {
    margin: 1% auto;
    text-align: center;
    padding: 5% auto;
  }
  
  #image-container > img {
    object-fit: contain;
    object-position: 50% 50%;
    width: 250px;
  }
  
  p {
    background-color: #b1deef;
    min-height: 20px;
    max-width: 30%;
    margin: 1% auto;
    text-align: center;
    padding: 5% auto;
    border: 1px solid #264653;
  }
  
  li {
    border: solid 1px #299D8F;
  }