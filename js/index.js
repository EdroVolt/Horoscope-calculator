// ask user to enter his/her name
do {
  var username = prompt("Enter your name: ");
} while (!username);

// attempts counter
let attempts = 3;

do {
  var password = prompt("Enter your password: ");
  attempts--;
} while (password !== "123" && attempts);

if (password !== "123") {
  alert("you’ve entered wrong password 3 times");
  const body = document.querySelector("body");
  body.innerHTML = `<h1 class="access-denied"> Access denied! 😫 </h1>`;
  body.style.background = "crimson";
} else {
  let birthMonth;
  let birthDay;
  //   month to day mapping
  const monthHasDayes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const dayInput = document.querySelector("#day");

  function setMonth(e) {
    birthMonth = Number(e.target.value.split("-")[1]);
    // default day
    birthDay = 1;
    generateDays();
  }

  function setDay(e) {
    birthDay = Number(e.target.value);
  }

  // generate days options depending on the month selected
  function generateDays() {
    for (let i = 1; i <= monthHasDayes[birthMonth - 1]; i++) {
      const option = document.createElement("option");
      option.innerHTML = i;
      option.value = i;
      dayInput.appendChild(option);
    }
  }

  function checkHoroscope() {
    let horoscope;
    if (
      (birthMonth === 3 && birthDay >= 21) ||
      (birthMonth === 4 && birthDay <= 19)
    )
      horoscope = "Aries";
    else if (
      (birthMonth === 4 && birthDay >= 20) ||
      (birthMonth === 5 && birthDay <= 20)
    )
      horoscope = "Taurus";
    else if (
      (birthMonth === 5 && birthDay >= 21) ||
      (birthMonth === 6 && birthDay <= 20)
    )
      horoscope = "Gemini";
    else if (
      (birthMonth === 6 && birthDay >= 21) ||
      (birthMonth === 7 && birthDay <= 22)
    )
      horoscope = "Cancer";
    else if (
      (birthMonth === 7 && birthDay >= 23) ||
      (birthMonth === 8 && birthDay <= 22)
    )
      horoscope = "Leo";
    else if (
      (birthMonth === 8 && birthDay >= 23) ||
      (birthMonth === 9 && birthDay <= 22)
    )
      horoscope = "Virgo";
    else if (
      (birthMonth === 9 && birthDay >= 23) ||
      (birthMonth === 10 && birthDay <= 22)
    )
      horoscope = "Libra";
    else if (
      (birthMonth === 10 && birthDay >= 23) ||
      (birthMonth === 11 && birthDay <= 21)
    )
      horoscope = "Scorpio";
    else if (
      (birthMonth === 11 && birthDay >= 22) ||
      (birthMonth === 12 && birthDay <= 21)
    )
      horoscope = "Sagittarius";
    else if (
      (birthMonth === 12 && birthDay >= 22) ||
      (birthMonth === 1 && birthDay <= 19)
    )
      horoscope = "Capricorn";
    else if (
      (birthMonth === 1 && birthDay >= 20) ||
      (birthMonth === 2 && birthDay <= 18)
    )
      horoscope = "Aquarius";
    else if (
      (birthMonth === 2 && birthDay >= 19) ||
      (birthMonth === 3 && birthDay <= 20)
    )
      horoscope = "Pisces";
    else {
      alert("please choose month and day");
      return;
    }
    alert(`your horoscope is : ${horoscope}`);
  }
}

// Aries Dates: March 21 – April 19
// Taurus Dates: April 20 – May 20
// Gemini Dates: May 21 – June 20
// Cancer Dates: June 21 – July 22
// Leo Dates: July 23 – August 22
// Virgo Dates: August 23 – September 22
// Libra Dates: September 23 – October 22
// Scorpio Dates: October 23 – November 21
// Sagittarius Dates: November 22 – December 21
// Capricorn Dates: December 22 – January 19
// Aquarius Dates: January 20 – February 18
// Pisces Dates: February 19 – March 20
