document.addEventListener("DOMContentLoaded", function () {
  const states = document.querySelectorAll("#indian-map path");

  states.forEach((state) => {
    state.addEventListener("mouseenter", function () {
      this.style.fill = "#00ff00"; /* Highlight color on hover */
    });

    state.addEventListener("mouseleave", function () {
      this.style.fill = "#ddd"; /* Restore default color on mouse leave */
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Get all paths within the SVG
  var paths = document.querySelectorAll('path');

  // Add mouseover and mouseout event listeners to each path
  paths.forEach(function (path) {
    path.addEventListener('mouseover', function () {
      // Add the holographic projection effect on hover
      this.classList.add('state-hover');
    });

    path.addEventListener('mouseout', function () {
      // Remove the holographic projection effect on mouseout
      this.classList.remove('state-hover');
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const festivals = {
      "Bonalu": "Telangana",
      "Samakka Sarakka Jatara": "Telangana",
      "tirupati": "Andhra Pradesh",
      // Add entries for other festivals and their corresponding states
  };

  var festivalSearch = document.getElementById("festival-search");
  var autocompleteList = document.getElementById("autocomplete-list");

  festivalSearch.addEventListener("input", function () {
      autocomplete();
  });

  festivalSearch.addEventListener("focus", function () {
      autocomplete(); // Show all available festivals when the search bar is focused
  });

  function autocomplete() {
      var input = festivalSearch.value.toLowerCase();
      autocompleteList.innerHTML = ""; // Clear the previous list

      // Filter festivals based on the input
      for (const festival in festivals) {
          if (festival.toLowerCase().includes(input)) {
              var listItem = document.createElement("li");
              listItem.textContent = festival;
              listItem.onclick = function () {
                  festivalSearch.value = festival;
                  autocompleteList.innerHTML = ""; // Clear the list after selecting
                  highlightState(festival);
              };
              autocompleteList.appendChild(listItem);
          }
      }
  }

  function highlightState(selectedFestival) {
      // Reset all state colors
      resetStateColors();

      // Highlight the state for the selected festival
      var stateName = festivals[selectedFestival];
      if (stateName) {
          var stateElement = document.querySelector('[name="' + stateName + '"]');
          if (stateElement) {
              stateElement.style.fill = "red"; // Change the color to highlight
          }
      }
  }

  function resetStateColors() {
      // Reset all state colors to the default color
      var allStates = document.querySelectorAll('[id^="IN"]');
      allStates.forEach(function (state) {
          state.style.fill = "#008080"; // Reset to default color
      });
  }
});


function handleMapClicks() {
  const statePaths = document.querySelectorAll("#mysvg path");

  statePaths.forEach((path) => {
    const stateName = path.getAttribute('name');
    path.addEventListener("click", () => {
      const url = `state_${stateName.toLowerCase().replace(/\s/g, "_")}.html`;
      window.open(url,"_blank");
    });
  });
}

handleMapClicks();