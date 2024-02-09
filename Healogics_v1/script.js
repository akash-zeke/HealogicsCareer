function populateJobs(params) {
  var data = params.data;
  var container = params.container;
  container.innerHTML = "";
  data.forEach((element) => {
    var randId = element["Job Reference"];
    var jobDiv = `
        <div class="job-card p-4">
            <div class="pb-3">
              <span class="job-title" onclick="openDescription()" id ="${randId}" class="fw-bold" > ${element["Position Name"]} </span>
            </div> <!-- title -->
            <div class="pb-1 accordion fc-light">
              <span class="fs-17"> <i class="fa-solid fa-location-dot"></i>
                ${element["Job Location"]} 
              </span>
            </div><!-- location -->
            <div class="pb-1 fc-light">
              <span class="fs-15"><i class="fa-solid fa-clock"></i>
                Posted On ${element["Job Created Date"]}
              </span>
            </div> <!-- posted on  -->
            <div class="pb-1 fc-light">${element["Job Reference"]}</div>     <!-- job id -->
        </div>
        `;
    container.innerHTML += jobDiv;
    document.getElementById(randId).addEventListener("click", function () {
      openDescription(element);
    });
  });
}

function getJobById(id) {
  var jobLength = staticJobData.length;
  for (var i = 0; i < jobLength; i++) {
    if (staticJobData[i]["Job Reference"] == id) {
      return staticJobData[i];
    }
  }
  return null;
}

function search() {
  var searchKey = document.getElementById("search-input").value;
  var filterOptions = {
    searchKey: searchKey,
  };
  listJobData(filterOptions);
}

function getFilteredJobData(filterOptions) {
  var searchKey = filterOptions["searchKey"];
  var jobLength = staticJobData.length;
  var filteredData = [];
  for (var i = 0; i < jobLength; i++) {
    var job = JSON.stringify(staticJobData[i]);
    if (job.toLowerCase().includes(searchKey.toLowerCase())) {
      filteredData.push(staticJobData[i]);
    }
  }
  return filteredData;
}

function listJobData(filterOptions) {
  var filterData = getFilteredJobData(filterOptions);
  populateJobs({
    data: filterData,
    container: document.getElementById("job-list"),
  });
}

function openDescription(elementData) {
  var jobId = event.target.getAttribute("id");
  var elementData = getJobById(jobId);

  var positionName = elementData["Position Name"];
  var jobLocation = elementData["Job Location"];
  var jobCreatedDate = elementData["Job Created Date"];
  var jobReference = elementData["Job Reference"];
  var jobDescription = elementData["Job Description"];
  var jobId = elementData["Job Id"];
  var jobPostedOn = elementData["Job Posted On"];
  var jobPostedBy = elementData["Job Posted By"];
  var jobPostedByEmail = elementData["Job Posted By Email"];
  var jobPostedByPhone = elementData["Job Posted By Phone"];
  var jobPostedByWebsite = elementData["Job Posted By Website"];
  var jobPostedByCompany = elementData["Job Posted By Company"];
  var jobPostedByCompanyEmail = elementData["Job Posted By Company Email"];
  var jobContract = elementData["Contract Details"];

  if (jobContract.includes("full")) {
    jobContract = "full time";
  } else if (jobContract.includes("part")) {
    jobContract = "part time";
  } else {
    jobContract = "freelance";
  }

  var introContainer = document.getElementById("intro-container");
  var descriptionContainer = document.getElementById("description-container");
  introContainer.classList.add("d-none");
  descriptionContainer.classList.remove("d-none");
  var div = document.createElement("div");
  /* div.innerHTML = `
  <div class="description-title p-4">
                <span class="d-inline-block fs-3 fw-bold">${positionName}</span>
                <span class="d-inline-block pb-3">
                  <i class="fa-solid fa-arrow-up-right-from-square mx-3"></i>
                </span>
              </div>
              <div class="job-description">
                <div>

                </div>
              </div>
              <div onclick="closeContainer()" class="close-desc d-inline-block">
                <i class="fa-solid fa-xmark"></i>
              </div>
    `; */

  div.innerHTML = `
    <div class="description-title px-4 ">
              <div class="d-flex">
                <div class="d-inline-block flex-item fs-3 fw-bold flex-shrink-1">${positionName}</div>
                <div class="desc-link flex-item pb-3 flex-shrink-0 fc-light">
                  <i class="fa-solid fa-arrow-up-right-from-square mx-3"></i>
                </div>
              </div>
              <div>
                <button id="apply-job" class="btn btn-primary mt-3 px-3">
                  Apply
                </button>
              </div>
            </div>
            <div class="job-description fc-light px-4 py-3">
              <div class="job-highlights d-flex">
                <div class="highlights-left w-50">
                  <span class="fs-17"> <i class="fa-solid fa-location-dot"></i>
                    ${jobLocation}
                  </span>
                </div>
                <div class="highlights-right d-flex flex-column w-50">
                  <div class="fs-15 mb-2 text-uppercase">
                    <span class="highlight-icons-wrap"><i class="fa-solid fa-business-time"></i></span>
                    ${jobContract}
                  </div>
                  <div class="fs-15 mb-2">
                    <span class="highlight-icons-wrap"><i class="fa-solid fa-clock"></i></span>
                    Posted On ${jobCreatedDate}
                  </div>
                  <div class="fs-15">
                    <span class="highlight-icons-wrap"><i class="fa-solid fa-bookmark"></i></span>
                    ${jobReference}
                  </div>
                </div>
              </div>
            </div>
            <div onclick="closeContainer()" class="close-desc fc-light">
              <i class="fa-solid fa-xmark"></i>
            </div>`;
  div.setAttribute("class", "pos-relative");
  descriptionContainer.innerHTML = "";
  descriptionContainer.appendChild(div);
  descriptionContainer.classList.add("flex-grow-1")
}

//UI filter elements scripts ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var radios = document.querySelectorAll('input[name="distLocRadios"]');
  var closeButton = document.querySelector(
    '.dist-loc.dropdown-menu button[data-bs-dismiss="dropdown"]'
  );
  var distanceOptions = document.getElementById("distanceOptions");
  var locationOptions = document.getElementById("locationOptions");
  var distLocButtonsRow = document.getElementById("distLocButtonsRow"); // Select buttons row

  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (radio.value === "option1") {
        distanceOptions.classList.remove("d-none");
        locationOptions.classList.add("d-none");
        closeButton.classList.add("d-none");
      } else if (radio.value === "option2") {
        distanceOptions.classList.add("d-none");
        locationOptions.classList.remove("d-none");
        closeButton.classList.add("d-none");
      }

      // Show buttons row when any radio button is selected
      distLocButtonsRow.classList.remove("d-none");
    });
  });

  var clearButton = document.querySelector("#distLocButtonsRow .clear-button");
  clearButton.addEventListener("click", function () {
    var distanceSelect = document.getElementById("distanceSelect");
    var locationCheckboxes = document.querySelectorAll(
      '#locationOptions input[type="checkbox"]'
    );
    distanceSelect.selectedIndex = 0; // Reset distance dropdown to the default option
    locationCheckboxes.forEach(function (checkbox) {
      checkbox.checked = false; // Uncheck all location checkboxes
    });
  });

  var closeDescriptionButton = document.getElementById("close-description");
});
function closeContainer() {
  var introContainer = document.getElementById("intro-container");
  var descriptionContainer = document.getElementById("description-container");
  introContainer.classList.remove("d-none");
  descriptionContainer.classList.add("d-none");
}
document.addEventListener("DOMContentLoaded", function () {
  var clearButton = document.querySelector("#timeTypebuttonsRow .clear-button");
  var checkboxes = document.querySelectorAll(
    '.time-type.dropdown-menu input[type="checkbox"]'
  );

  clearButton.addEventListener("click", function () {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var clearButton = document.querySelector("#jobCatButtonsRow .clear-button");
  var checkboxes = document.querySelectorAll(
    '.jobCateg.dropdown-menu input[type="checkbox"]'
  );

  clearButton.addEventListener("click", function () {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  });
});
//End of UI filter elements scripts ----------------------------------------------------------------

var staticJobData = [
  {
    "Position Name":
      "Clinical Medical Director | Wound Care Physician | Full-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Oklahoma City, OK, United States",
    "Center Code and Name": "OK047- Integris Baptist Health Medical Center",
    Headcount: 1,
    "Job Stage": "Submitted",
    "Contract Details": "full_time",
    "Minimum Salary": "220000.00 USD",
    "Maximum Salary": "300000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-22 02:58:16",
    "Job Reference": "L38VX5WW",
  },
  {
    "Position Name": "Nurse Practitioner",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "",
    Headcount: 2,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": 120000,
    "Maximum Salary": 150000,
    "Job Owner": "Franklin",
    "Job Team": "Franklin",
    "Job Created Date": "2023-12-19 20:58:41",
    "Job Reference": "QW9XX879",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Full-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "MA146 - Baystate",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": "125000.00 USD",
    "Maximum Salary": "145000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:35",
    "Job Reference": "L8549963",
  },
  {
    "Position Name":
      "Nurse Practitioner (NP) - Full-Time - Inpatient and Outpatient Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "MA146 - Baystate",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": "125000.00 USD",
    "Maximum Salary": "145000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:35",
    "Job Reference": "L975XX64",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": "120000.00 USD",
    "Maximum Salary": "145000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-18 23:21:38",
    "Job Reference": "L77WY8X5",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Colorado Springs, CO, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": "120000.00 USD",
    "Maximum Salary": "145000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-18 21:50:02",
    "Job Reference": "QW95XYVW",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Greenfield, MA, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "full_time",
    "Minimum Salary": "130000.00 USD",
    "Maximum Salary": "140000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-05 19:45:12",
    "Job Reference": "L8RX544V",
  },
  {
    "Position Name": "Nurse Practitioner NP - Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Statesville, NC, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": 115000,
    "Maximum Salary": 125000,
    "Job Owner": "Kasia",
    "Job Team": "Kasia,Franklin",
    "Job Created Date": "2024-01-08 20:20:10",
    "Job Reference": "L774Y3Y3",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Wound Care - 2 days/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Glens Falls, NY, United States",
    "Center Code and Name": "NY016-Glen Falls",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": "60.00 USD",
    "Maximum Salary": "65.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-12-29 21:50:16",
    "Job Reference": "L57V6955",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Wound Care | FT",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Washington Township, NJ, United States",
    "Center Code and Name": "NJ174 Kennedy Univ Hosp - Washington Twp",
    Headcount: 1,
    "Job Stage": "Final interview",
    "Contract Details": "full_time",
    "Minimum Salary": "120000.00 USD",
    "Maximum Salary": "145000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-11 20:36:40",
    "Job Reference": "L8R3547V",
  },
  {
    "Position Name": "Nurse Practitioner (NP) | Wound Care | Part-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "MA133  - Baystate Wing Hospital",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 60,
    "Maximum Salary": 60,
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:35",
    "Job Reference": "QV8R4478",
  },
  {
    "Position Name": "Nurse Practitioner (NP) | Wound Care | Part-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Palmer, MA, United States",
    "Center Code and Name": "MA133 - Baystate Wing Hospital",
    Headcount: 1,
    "Job Stage": "Submitted",
    "Contract Details": "full_time",
    "Minimum Salary": "60.00 USD",
    "Maximum Salary": "60.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-24 19:21:23",
    "Job Reference": "L384W648",
  },
  {
    "Position Name": "Nurse Practitioner (NP) - Wound Care | Part Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Eugene, OR, United States",
    "Center Code and Name": "OR02Y - McKenzie Willamette MC WE",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "full_time",
    "Minimum Salary": "55.00 USD",
    "Maximum Salary": "60.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-12 23:14:24",
    "Job Reference": "L37R7V98",
  },
  {
    "Position Name": "Nurse Practitioner (NP) | Wound Care | PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "MA146  - Baystate MC",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 60,
    "Maximum Salary": 60,
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:34",
    "Job Reference": "L58X9985",
  },
  {
    "Position Name": "Nurse Practitioner NP - Wound Care PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Leonardtown, MD, United States",
    "Center Code and Name": "MD059 - Med Star St Marys Hosp",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "full_time",
    "Minimum Salary": "60.00 USD",
    "Maximum Salary": "60.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-16 05:03:04",
    "Job Reference": "QY739985",
  },
  {
    "Position Name": "Nurse Practitioner PRN- Wound Care Center - 3 days/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Waco, TX, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "part_time",
    "Minimum Salary": 60,
    "Maximum Salary": 70,
    "Job Owner": "Kasia",
    "Job Team": "Kasia,Franklin",
    "Job Created Date": "2024-01-08 20:23:43",
    "Job Reference": "QX765W9Y",
  },
  {
    "Position Name": "Nurse Practitioner PRN- Wound Care - SNFs - 3 days/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Waco, TX, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Dropped",
    "Contract Details": "part_time",
    "Minimum Salary": "60.00 USD",
    "Maximum Salary": "70.00 USD",
    "Job Owner": "Kasia",
    "Job Team": "Kasia,Franklin",
    "Job Created Date": "2024-01-24 16:33:13",
    "Job Reference": "QW95R839",
  },
  {
    "Position Name": "Nurse Practitioner -Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Sapulpa, OK, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": 100000,
    "Maximum Salary": 120000,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 15:48:41",
    "Job Reference": "QW87858W",
  },
  {
    "Position Name": "Nurse Practitioner- Wound Care",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Longview, TX, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": 100000,
    "Maximum Salary": 120000,
    "Job Owner": "Damian Grzywacz",
    "Job Team": "Damian Grzywacz",
    "Job Created Date": "2023-03-15 18:23:51",
    "Job Reference": "L74V48W5",
  },
  {
    "Position Name": "Nurse Practitioner - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Corinth, MS, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Scheduling interview",
    "Contract Details": "part_time",
    "Minimum Salary": 96000,
    "Maximum Salary": 100000,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 15:45:02",
    "Job Reference": "QV858Y4R",
  },
  {
    "Position Name": "Nurse Practitioner - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Pinehurst, NC, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": 105000,
    "Maximum Salary": 122000,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 14:34:59",
    "Job Reference": "L85W53R3",
  },
  {
    "Position Name": "Nurse Practitioner | Wound Care | Full-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "MA068 - Baystate Franklin MC",
    Headcount: 1,
    "Job Stage": "Dropped",
    "Contract Details": "full_time",
    "Minimum Salary": "125000.00 USD",
    "Maximum Salary": "145000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:35",
    "Job Reference": "L66YRR4W",
  },
  {
    "Position Name": "Nurse Practitioner | Wound Care | Full-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Porterville, CA, United States",
    "Center Code and Name": "CA409  - Sierra View District Hosp",
    Headcount: 1,
    "Job Stage": "Dropped",
    "Contract Details": "full_time",
    "Minimum Salary": 115000,
    "Maximum Salary": 145000,
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:35",
    "Job Reference": "QX8W4473",
  },
  {
    "Position Name": "Nurse Practitioner | Wound Care | Part-Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Woodward, OK, United States",
    "Center Code and Name": "OK174 - AllianceHealth Woodward",
    Headcount: 1,
    "Job Stage": "Final interview",
    "Contract Details": "full_time",
    "Minimum Salary": "60.00 USD",
    "Maximum Salary": "60.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-24 18:54:25",
    "Job Reference": "QX8X9YWR",
  },
  {
    "Position Name": "Physician MD / DO",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Bartlesville, OK, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": "210000.00 USD",
    "Maximum Salary": "300000.00 USD",
    "Job Owner": "Franklin",
    "Job Team": "Franklin",
    "Job Created Date": "2023-10-16 16:11:52",
    "Job Reference": "QV8XRV3R",
  },
  {
    "Position Name": "Physician - Part Time - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Pinehurst, NC, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 125,
    "Maximum Salary": 150,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-05 13:19:02",
    "Job Reference": "L57W83R3",
  },
  {
    "Position Name": "Physician - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Bartlesville, OK, United States",
    "Center Code and Name": "OK093 - Ascention- Jane Phillips",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": 210000,
    "Maximum Salary": 300000,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 14:42:36",
    "Job Reference": "L4434V75",
  },
  {
    "Position Name": "Physician - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Sherman, TX, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": "200000.00 USD",
    "Maximum Salary": "300000.00 USD",
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-11 14:50:56",
    "Job Reference": "QY7387RV",
  },
  {
    "Position Name": "Physician Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Pensacola, FL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": 240000,
    "Maximum Salary": 275000,
    "Job Owner": "Damian Grzywacz",
    "Job Team": "Damian Grzywacz,Franklin",
    "Job Created Date": "2023-09-15 20:15:06",
    "Job Reference": "QY8866Y9",
  },
  {
    "Position Name": "Physician - Wound Care Center - Full Time OR PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Chicago, IL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "part_time",
    "Minimum Salary": 1000,
    "Maximum Salary": 1200,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 15:59:11",
    "Job Reference": "LR989746",
  },
  {
    "Position Name": "Physician - Wound Care Center - NEEDED ASAP",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Waco, TX, United States",
    "Center Code and Name": "TX568  - Providence Hctr",
    Headcount: 1,
    "Job Stage": "Submitted",
    "Contract Details": "full_time",
    "Minimum Salary": 220000,
    "Maximum Salary": 300000,
    "Job Owner": "Jill",
    "Job Team": "Jill",
    "Job Created Date": "2023-11-13 20:53:34",
    "Job Reference": "L44W6645",
  },
  {
    "Position Name": "Physician - Wound Care Center - Part Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Waco, TX, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Submitted",
    "Contract Details": "part_time",
    "Minimum Salary": 1000,
    "Maximum Salary": 1200,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 15:03:33",
    "Job Reference": "L75R5495",
  },
  {
    "Position Name": "Physician - Wound Care Center - PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Laredo, TX, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": 1000,
    "Maximum Salary": 1200,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-05 14:59:23",
    "Job Reference": "L77X58XX",
  },
  {
    "Position Name": "Physician Wound Care - Part time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Mobile, AL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Submitted",
    "Contract Details": "part_time",
    "Minimum Salary": "1000.00 USD",
    "Maximum Salary": "1200.00 USD",
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 15:52:48",
    "Job Reference": "L5858R73",
  },
  {
    "Position Name": "Physician Wound Care PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Sellersville, PA, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "part_time",
    "Minimum Salary": "1000.00 USD",
    "Maximum Salary": "1200.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-19 19:57:46",
    "Job Reference": "QW9534W6",
  },
  {
    "Position Name": "PRN MD/DO Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Alexander City, AL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "full_time",
    "Minimum Salary": 125,
    "Maximum Salary": 150,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-05 13:14:28",
    "Job Reference": "QV768XY6",
  },
  {
    "Position Name": "PRN MD/DO Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Gadsden, AL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 125,
    "Maximum Salary": 150,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 16:13:26",
    "Job Reference": "QX8R8YVY",
  },
  {
    "Position Name": "PRN MD/DO Wound Care Center - 1 Day/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Nashville, TN, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": "125.00 USD",
    "Maximum Salary": "150.00 USD",
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-30 20:29:59",
    "Job Reference": "LRWR769R",
  },
  {
    "Position Name": "PRN MD/DO Wound Care Center - 1 Day/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Port Charlotte, FL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 1000,
    "Maximum Salary": 1200,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-05 13:43:17",
    "Job Reference": "QY768475",
  },
  {
    "Position Name": "PRN MD/DO Wound Care Center - 1 Day/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Roseburg, OR, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 125,
    "Maximum Salary": 150,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 14:26:11",
    "Job Reference": "L85W5353",
  },
  {
    "Position Name": "PRN MD/DO Wound Care Center - 1 Day/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Mobile, AL, United States",
    "Center Code and Name": "AL062  - Providence Hospital",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 1000,
    "Maximum Salary": 1200,
    "Job Owner": "Jill",
    "Job Team": "Jill",
    "Job Created Date": "2023-11-13 20:53:34",
    "Job Reference": "L66YRR6W",
  },
  {
    "Position Name": "PRN - Nurse Practitioner - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Logan, WV, United States",
    "Center Code and Name": "WV001  - Logan Regional Medical Center",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 60,
    "Maximum Salary": 70,
    "Job Owner": "Jill",
    "Job Team": "Franklin,Jill",
    "Job Created Date": "2023-11-13 20:53:34",
    "Job Reference": "L58X9995",
  },
  {
    "Position Name": "PRN - Nurse Practitioner - Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Wytheville, VA, United States",
    "Center Code and Name": "VA121 Wythe County Community Ho",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 60,
    "Maximum Salary": 70,
    "Job Owner": "Jill",
    "Job Team": "Jill",
    "Job Created Date": "2023-11-13 20:53:34",
    "Job Reference": "L753VV5X",
  },
  {
    "Position Name": "PRN Nurse Practitioner - Wound Care Center -1 Day/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Roseburg, OR, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "part_time",
    "Minimum Salary": 60,
    "Maximum Salary": 70,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2023-12-13 15:15:23",
    "Job Reference": "L5858RVR",
  },
  {
    "Position Name": "PRN Physician/Collaboration Wound Care Center",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Panama City, FL, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "full_time",
    "Minimum Salary": 1000,
    "Maximum Salary": 1200,
    "Job Owner": "Jill",
    "Job Team": "Jill,Franklin",
    "Job Created Date": "2024-01-05 14:51:39",
    "Job Reference": "QW938RX9",
  },
  {
    "Position Name": "Wound Care Nurse Practitioner - SNF - 1-2 days per week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Enid, OK, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "",
    "Contract Details": "part_time",
    "Minimum Salary": 58,
    "Maximum Salary": 70,
    "Job Owner": "Kasia",
    "Job Team": "Kasia,Franklin",
    "Job Created Date": "2024-01-08 20:27:17",
    "Job Reference": "L57YVXW3",
  },
  {
    "Position Name": "Wound Care Nurse Practitioner - SNF - 4 days per week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Little Rock, AR, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "New Candidates",
    "Contract Details": "full_time",
    "Minimum Salary": 90000,
    "Maximum Salary": 110000,
    "Job Owner": "Kasia",
    "Job Team": "Kasia,Franklin",
    "Job Created Date": "2024-01-08 20:30:28",
    "Job Reference": "L68XWY35",
  },
  {
    "Position Name": "Wound Care Physician MD DO - 4 days/week",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Longmont, CO, United States",
    "Center Code and Name": "CO056",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "full_time",
    "Minimum Salary": "210000.00 USD",
    "Maximum Salary": "275000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-19 17:38:36",
    "Job Reference": "L8R7X7V3",
  },
  {
    "Position Name": "Wound Care Physician MD DO - FT",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Bethel Park, PA, United States",
    "Center Code and Name": "",
    Headcount: 1,
    "Job Stage": "Scheduling interview",
    "Contract Details": "full_time",
    "Minimum Salary": "230000.00 USD",
    "Maximum Salary": "300000.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-15 19:24:14",
    "Job Reference": "L47V9485",
  },
  {
    "Position Name": "Wound Care Physician MD DO Part Time",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Eugene, OR, United States",
    "Center Code and Name": "OR02Y - McKenzie Willamette MC WE",
    Headcount: 1,
    "Job Stage": "Dropped",
    "Contract Details": "part_time",
    "Minimum Salary": "1000.00 USD",
    "Maximum Salary": "1200.00 USD",
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2024-01-16 05:14:55",
    "Job Reference": "L7748883",
  },
  {
    "Position Name": "Wound Care Physician | PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Springfield, MA, United States",
    "Center Code and Name": "MA146  - Baystate MC",
    Headcount: 1,
    "Job Stage": "Dropped",
    "Contract Details": "freelance",
    "Minimum Salary": 1000,
    "Maximum Salary": 1000,
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:35",
    "Job Reference": "QW8V4499",
  },
  {
    "Position Name": "Wound Care Physician | PRN",
    "Job Client": "Healogics",
    "Job Status": "active",
    "Job Location": "Sellersville, PA, United States",
    "Center Code and Name": "PA239  - Grand View Hosp",
    Headcount: 1,
    "Job Stage": "Shortlisted",
    "Contract Details": "freelance",
    "Minimum Salary": 1000,
    "Maximum Salary": 1000,
    "Job Owner": "Jerry",
    "Job Team": "Jerry",
    "Job Created Date": "2023-11-13 20:53:34",
    "Job Reference": "L85499R3",
  },
];

populateJobs({
  data: staticJobData,
  container: document.getElementById("job-list"),
});
