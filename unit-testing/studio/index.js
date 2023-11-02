
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let divisors = {
      2: "Launch",
      3: "Code",
      5: "Rocks",
    }
    let message = ""
    for (let i in divisors) {
      if (num % i === 0) {
        message += divisors[i];
      }
    }
    if (message === "") {
      message = "That doesn't work."
    }
    if (!message.includes("!")) {
      message += "!";
    }
    if (message.includes("hR")) {
      message += " (CRASH!!!)";
    }
    if (message.indexOf("R") > 0) {
      message = message.replace("R"," R");
    }

    return message;
  }
}



module.exports = launchcode;