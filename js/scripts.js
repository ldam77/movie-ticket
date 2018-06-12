// Business logic
function TicketPrice (title, showtime, age){
  this.title = title;
  this.showtime = showtime;
  this.age = age;
  this.price = 0;
  this.releaseDate = "";
}

var solo = {name: "solo", date: "May 25 2018"};
var oceans = {name: "oceans", date: "June 07 2018"};
var deadpool = {name: "deadpool", date: "May 18 2018"};
var avengers = {name: "avengers", date: "April 27 2018"};

var moviesReleaseDate = {movies: [solo, oceans, deadpool, avengers]};

TicketPrice.prototype.calculatePrice = function() {
  var price = 0;

  if(this.age === 'adult'){
    price = 15;
  } else if(this.age === 'senior'){
    price = 10;
  } else {
    price = 5;
  }

    return price;
}


// User Interface
$(document).ready(function(){
$('#movie-ticket').submit(function(event){
  event.preventDefault();
   var movieTitle = $("input:radio[name=movie-title]:checked").val();
   var movieTime = $("#movie-time").val();
   var ageGroup = $("#age-group").val();
   var perTicket = new TicketPrice(movieTitle, movieTime, ageGroup);

   moviesReleaseDate.movies.forEach(function(title){
debugger;
     if (movieTitle === title.name){
       perTicket.releaseDate = title.date;
     };
   });

     perTicket.price = perTicket.calculatePrice();

   $("#ticket-price").text(perTicket.price);
 })

});
