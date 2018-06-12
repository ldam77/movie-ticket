// Business logic
function TicketPrice (title, showtime, age, date){
  this.title = title;
  this.showtime = showtime;
  this.age = age;
  this.date = date;
  this.price = 0;
  this.releaseDate = "";
}



var solo = {name: "solo", date: "2018-05-25"};
var oceans = {name: "oceans", date: "2018-06-07"};
var deadpool = {name: "deadpool", date: "2018-05-18"};
var avengers = {name: "avengers", date: "2018-04-27"};


var moviesReleaseDate = {movies: [solo, oceans, deadpool, avengers]};

TicketPrice.prototype.calculatePrice = function() {
  const REGULARPRICE = 15;
  var discount = 0;
  const MSINDAY = 86400000;
  var releasedDate = Date.parse(this.releaseDate)/MSINDAY;
  var selectedDate = Date.parse(this.date)/MSINDAY;

  if(this.age === 'kid' || this.age === 'senior'){
    return 10;
  };

  if((selectedDate - releasedDate) > 14){
    discount += 3;
  };

  if(this.showtime < 17){
    discount += 2;
  };

    return REGULARPRICE - discount;
}


// User Interface
$(document).ready(function(){
$('#movie-ticket').submit(function(event){
  event.preventDefault();
   var movieTitle = $("input:radio[name=movie-title]:checked").val();
   var movieTime = parseInt($("#movie-time").val());
   var ageGroup = $("#age-group").val();
   var movieDate = $("#movie-date").val();
   var perTicket = new TicketPrice(movieTitle, movieTime, ageGroup, movieDate);

   moviesReleaseDate.movies.forEach(function(title){

     if (movieTitle === title.name){
       perTicket.releaseDate = title.date;
     };
   });

     perTicket.price = perTicket.calculatePrice();

   $("#ticket-price").text(perTicket.price);
   $('#buy-ticket').attr("href", "https://www.fandango.com/");
 })

});
