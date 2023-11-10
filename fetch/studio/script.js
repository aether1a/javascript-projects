window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
      response.json().then( function(json) {
        const div = document.getElementById('container');
        //loop
            div.innerHTML = `
              <ul>
                <li>id ${json.id}</li>
                <li>active ${json.active}</li>
                <li>firstName ${json.firstName}</li>
                <li>lastName ${json.lastName}</li>
                <li>skills ${json.skills}</li>
                <li>hoursInSpace ${json.hoursInSpace}</li>
                <li>picture ${json.picture}</li>
              </ul>
            `;
          });
    });
  });