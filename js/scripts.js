// Business logic
function TicketPrice (title, showtime, age){
  this.title = title;
  this.showtime = showtime;
  this.age = age;
  this.price = 0;
  this.releaseDate = "";
}

// var solo = {date: "May 25 2018"};
// var oceans = {date: "June 07 2018"};
// var deadpool = {date: "May 18 2018"};
// var avengers = {date: "April 27 2018"};
//
// var moviesReleaseDate = {movie: [solo, oceans, deadpool, avengers]};

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

//    moviesReleaseDate.movie.forEach(title) {
// debugger;
//      if (movieTitle === title){
//        perTicket.releaseDate = movie.date;
//      };
//    };

   // $("button#calculate-price").click(function(){
     perTicket.price = perTicket.calculatePrice();
   // });

   $("#ticket-price").text(perTicket.price);
 })

});
