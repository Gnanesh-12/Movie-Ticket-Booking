var username;
var password;

function display (){
    var spot = document.querySelector(".hidden");
    spot.style.display = "block";
}

function signup(){
    var user = document.getElementById("use").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if(pass1 === pass2){
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass1);

        window.location.href = "login.html";
    }else{
        document.querySelector(".error").style.display = "block";
        return;
    }
}

function login(){
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if((document.getElementById("username").value == storedUsername) && (document.getElementById("password").value == storedPassword)){
        var loginLink = document.querySelectorAll('.sep');
        loginLink.textContent = 'Logout';
        window.location.href = "index.html";
    }else{
        document.querySelector(".error1").style.display = "block";
        return;
    }
}

function setRating(ratingValue) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
      star.style.color = index < ratingValue ? 'gold' : 'gray';
  });
}

function contact(){
    
    document.querySelector(".confirm").style.display = "block";
}

function paymeny(){
    }



    let seats = document.querySelector(".all-seats");
      for (var i = 0; i < 59; i++) {
        let randint = Math.floor(Math.random() * 2);
        let booked = randint === 1 ? "booked" : "";
        seats.insertAdjacentHTML(
          "beforeend",
          '<input type="checkbox" name="tickets" id="s' +
            (i + 2) +
            '" /><label for="s' +
            (i + 2) +
            '" class="seat ' +
            booked +
            '"></label>'
        );
      }

      let tickets = seats.querySelectorAll("input");
      tickets.forEach((ticket) => {
        ticket.addEventListener("change", () => {
          let amount = document.querySelector(".amount").innerHTML;
          let count = document.querySelector(".count").innerHTML;
          amount = Number(amount);
          count = Number(count);

          if (ticket.checked) {
            count += 1;
            amount += 200;
          } else {
            count -= 1;
            amount -= 200;
          }
          document.querySelector(".amount").innerHTML = amount;
          document.querySelector(".count").innerHTML = count;
        });
      });



    