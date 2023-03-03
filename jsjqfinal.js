// click action to run a callback function
$('#btnGetRandomQuote').click(function () {
  // Establish communication with the url of the Rapid API web server using only one parameter

  let url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  // Settings object created for key value pairs as required by the documentation and to perform AJAX as it interacts with the server

  const settings = {
    // Quotes will be retrieved asynchronously
    async: true,
    //Implementing a method to open the domain from Rapid API
    crossDomain: true,
    //Provide the URL created for this setting
    url: url,
    // Using GET method versus POST to get the data versus posting the data
    method: 'GET',
    //Part of the Rapid API key and required as part of the documentation
    headers: {
      'x-rapidapi-key': '46fd0c1f95msh9560f7fa197bf43p168b4fjsnf3b7ad5e85ea',
      'x-rapidapi-host': 'quotes15.p.rapidapi.com',
    },
  };
  //Use ajax command to satisfy the settings requirement and acquire XML and JSON formatted data
  $.ajax(settings).done(function (response) {
    //gets the response from the server using the callback function
    console.log(response);
    //Create inside the variable "out" a string from the label and the response to get the data
    let out = 'Quotes: ' + response.content;
    out += '<br/>Name: ' + response.originator.name;

    $('#out').html(out);
  });
});
//Create a temporary library storage of a list of favorite quotes stored in the browser using both javascript/jquery and in JSON format

//Create a variable to store arrays of JSON nodes or elements
let sayings = [];

//Add function takes place upon click
$('#btnAdd').click(function () {
  //Variables created to get the value of the favorite quote and author fields
  let favoriteQuote = $('#favoriteQuote').val();
  let author = $('#author').val();
  //Create a data node using the JSON notation for the two labels
  let data = [
    { favoriteQuoteName: favoriteQuote, favoriteQuoteAuthor: author },
  ];
  // Push or add the favorite quote in the array which is defined above
  sayings.push(data);

  //Clear the favoriteQuote and author fields/
  $('#favoriteQuote').val('');
  $('#author').val('');
  //Create the table listing favorite quote and author name/
  $('table').html('<tr><th>favoriteQuote</th><th>Author</th></tr>');
  // Print the arrays in the console
  console.log(sayings);

  // Loop through the arrays each time values are added using two arguments/

  $.each(sayings, function (key, value) {
    //Extract the values from both arguments

    let favoriteQuoteName = value[0].favoriteQuoteName;
    let favoriteQuoteAuthor = value[0].favoriteQuoteAuthor;
    //Add last row to the table
    $('table tr:last').after(
      '<tr><td>' +
        favoriteQuoteName +
        '</td><td style="width: 225px;">' +
        favoriteQuoteAuthor +
        '</td></tr>'
    );
  });
  //When the browser is closed, the data is stored in the browser DOM
});
