var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function giveName() {
  var name = document.getElementById("yName").value;
  if (name == "") {
    alert("Please fill in your name");
    return false;
  }
}

function selectGender() {
  var gender = document.getElementById("gender").value;
  if (gender == "1") {
    alert("Please select Gender");
    return false;
  }
}

function giveYear() {
  var year = document.getElementById("yBorn").value;
  if (year == "") {
    alert("Please fill in your year of Birth");
    return false;
  }
}

function giveMonth() {
  var month = document.getElementById("mBorn").value;
  if (month == "0") {
    alert("Please select month");
    return false;
  }
}

function giveDay() {
  var day = document.getElementById("dayBorn").value;
  if (day == "") {
    alert("Please fill in the day you were born");
    return false;
  }
}

function allLetters(input){
  var characters = /[^a-z]/gi;
  input.value = input.value.replace(characters, "");
}

function digits(input){
  var digits = /[^0-9]/;
  input.value = input.value.replace(digits, "");
}


function getName(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var cc = parseInt(document.getElementById("yBorn").value.slice(0, 2));
  var yy = parseInt(document.getElementById("yBorn").value.slice(2, 4));
  var dd = parseInt(document.getElementById("dayBorn").value);
  var mm = parseInt(document.getElementById("monthBorn").value);
  var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  var akanDay = days[day.toFixed()];
  var gender = parseInt(document.getElementById("gender").value);
  if (gender == 2) {
    if (akanDay === 'Sunday') {
      document.getElementById("output").value = "Born on Sunday: Your Akan Name would be: " + akanMale[0];
      return true;
    }
    else if (akanDay === 'Monday') {
      document.getElementById("output").value = "Born on Monday: Your Akan Name would be: " + akanMale[1];
      return true;
    }
    else if (akanDay === 'Tuesday') {
      document.getElementById("output").value = "Born on Tuesday: Your Akan Name would be: " + akanMale[2];
      return true;
    }
    else if (akanDay === 'Wednesday') {
      document.getElementById("output").value = "Born on Wednesday: Your Akan Name would be: " + akanMale[3];
      return true;
    }
    else if (akanDay === 'Thursday') {
      document.getElementById("output").value = "Born on Thursday: Your Akan Name would be: " + akanMale[4];
      return true;
    }
    else if (akanDay === 'Friday') {
      document.getElementById("output").value = "Born on Friday: Your Akan Name would be: " + akanMale[5];
      return true;
    }
    else {
      document.getElementById("output").value = "Born on Saturday: Your Akan Name would be: " + akanMale[6];
      return true;
    }
  }
    if (gender == 3) {
      if (akanDay === 'Sunday') {
        document.getElementById("output").value = "Born on Sunday: Your Akan Name would be: " + akanFemale[0];
        return true;
      }
      else if (akanDay === 'Monday') {
        document.getElementById("output").value = "Born on Monday: Your Akan Name would be: " + akanFemale[1];
        return true;
      }
      else if (akanDay === 'Tuesday') {
        document.getElementById("output").value = "Born on Tuesday: Your Akan Name would be: " + akanFemale[2];
        return true;
      }
      else if (akanDay === 'Wednesday') {
        document.getElementById("output").value = "Born on Wednesday: Your Akan Name would be: " + akanFemale[3];
        return true;
      }
      else if (akanDay === 'Thursday') {
        document.getElementById("output").value = "Born on Thursday: Your Akan Name would be: " + akanFemale[4];
        return true;
      }
      else if (akanDay === 'Friday') {
        document.getElementById("output").value = "Born on Friday: Your Akan Name would be: " + akanFemale[5];
        return true;
      }
      else {
        document.getElementById("output").value = "Born on Saturday: Your Akan Name would be: " + akanFemale[6];
        return true;
      }
    }
}

function clearForm(){
  document.getElementById("form").reset();
}

function clearResult(){
  document.getElementById("answer").reset();
}