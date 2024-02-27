function populateJobs(params) {
  var data = params.data;
  var container = document.getElementById(params.containerId);
  container.innerHTML = "";
  var page = params.currentPage || 1;
  var pageSize = params.pageSize || 10;
  var recordStartIndex = (page - 1) * pageSize;
  var recordEndIndex = recordStartIndex + pageSize;
  var dataToBeDisplayed = data.slice(recordStartIndex, recordEndIndex);
  managePagination(params);
  var jobDiv = "";
  var pgc = document.querySelector(".pagination-controller");

  if (dataToBeDisplayed && dataToBeDisplayed.length) {
    dataToBeDisplayed.forEach((element) => {
      var randId = element["Job Reference"];
      jobDiv = `
        <div class="job-card p-4">
            <div class="pb-3">
              <span class="job-title" onclick="openDescription()" id ="${randId}" class="fw-bold" > ${element["Position Name"]} </span>
            </div> <!-- title -->
            <div class="pb-1 accordion fc-light">
              <span class="fs-17"> <i class="fa-solid fa-location-dot"></i>
                ${element["Job Location"]}  
              </span>
            </div><!-- location -->
            <div class="d-none pb-1 fc-light">
              <span class="fs-15"><i class="fa-solid fa-clock"></i>
                Posted On ${element["Job Created Date"]}
              </span>
            </div> <!-- posted on  -->
            <div class="pb-1 fc-light">${element["Job Reference"]}</div>     <!-- job id -->
        </div>
        `;
      container.innerHTML += jobDiv;
      /* document.getElementById(randId).addEventListener("click", function () {
        openDescription(element);
      }); */
    });

    var jobCountSpan = document.getElementById("no-of-jobs-span");
    jobCountSpan && (jobCountSpan.innerText = params.data.length);

    var pageDescriptionSpan = document.getElementById(
      "current-page-description"
    );
    pageDescriptionSpan.innerText = `${recordStartIndex + 1} - ${
      recordStartIndex + dataToBeDisplayed.length
    } of ${params.data.length}`;

    pgc.classList.remove("d-none");
    pgc.classList.add("d-flex");
  } else {
    pgc.classList.remove("d-flex");
    pgc.classList.add("d-none");
    jobDiv = `<div class="jobErrorContainer"><div class="css-283mgg"><span class="css-1bsf6g3"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="360" height="176" class="wd-graphic wd-graphic-empty-state-search-gray" focusable="false" role="presentation" viewBox="0 0 360 176"><defs><path id="wd-graphic-empty-state-search-gray-path-1" d="M65.5 2C51.677 2 40.325 12.584 39.108 26.09a1 1 0 0 1-.996.91H11a1 1 0 1 1 0-2h26.213C38.939 10.91 50.945 0 65.5 0c11.476 0 21.366 6.783 25.883 16.555A11.992 11.992 0 0 1 95 16c5.592 0 10.289 3.824 11.622 9H141a1 1 0 0 1 0 2H105.779a1 1 0 0 1-.944-.82C103.98 21.527 99.901 18 95 18a9.978 9.978 0 0 0-7.728 3.653 1 1 0 0 1-1.544-1.27 12.047 12.047 0 0 1 3.803-3.067C85.313 8.268 76.138 2 65.5 2zM1 25a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H1z"></path><path id="wd-graphic-empty-state-search-gray-path-3" d="M40.5 2c-8.403 0-15.245 6.687-15.493 15.03a1 1 0 0 1-1 .97H1a1 1 0 1 1 0-2h22.063C23.825 7.037 31.34 0 40.5 0a17.466 17.466 0 0 1 13.471 6.329C54.946 6.113 55.961 6 57 6c6.343 0 11.699 4.217 13.42 10H88a1 1 0 1 1 0 2H69.672a.993.993 0 0 1-.64-.216.999.999 0 0 1-.353-.554C67.429 11.938 62.673 8 57 8c-3.225 0-6.15 1.27-8.308 3.34a1 1 0 0 1-1.384-1.442 14.013 14.013 0 0 1 4.565-2.93A15.456 15.456 0 0 0 40.5 2zM92 16a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5z"></path><path id="wd-graphic-empty-state-search-gray-path-5" d="M51.5 2a8.5 8.5 0 0 0-8.5 8.5 1 1 0 1 1-2 0c0-.768.082-1.517.239-2.238A6.003 6.003 0 0 0 37 14a1 1 0 0 1-1 1H20a1 1 0 1 1 0-2h15.062a8.004 8.004 0 0 1 6.918-6.936A10.501 10.501 0 0 1 51.5 0c4.94 0 9.083 3.411 10.202 8.007A7.002 7.002 0 0 1 68.71 13H95a1 1 0 1 1 0 2H67.917a1 1 0 0 1-.986-.835 5.002 5.002 0 0 0-5.85-4.08 1 1 0 0 1-1.173-.838A8.503 8.503 0 0 0 51.5 2zM0 14a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm12-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2h-7z"></path><path id="wd-graphic-empty-state-search-gray-path-7" d="M38.661 6.416a7.502 7.502 0 0 1 12.397-1.952c-1.17.363-2.257.923-3.17 1.62a1 1 0 1 0 1.224 1.583c1.073-.841 2.268-1.385 3.628-1.583.053.001.107-.002.16-.01a8.004 8.004 0 0 1 8.901 6.146 1 1 0 0 0 .996.78H79a1 1 0 1 0 0-2H63.542C62.267 6.943 58.478 4 54 4c-.24 0-.489.01-.734.028A9.49 9.49 0 0 0 45.5 0c-3.64 0-6.8 2.047-8.395 5.05A8.006 8.006 0 0 0 30.252 11H12a1 1 0 1 0 0 2h19.07a1 1 0 0 0 .99-.858 6.002 6.002 0 0 1 5.725-5.138 1 1 0 0 0 .876-.588zM82 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1zM1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H1z"></path><path id="wd-graphic-empty-state-search-gray-path-9" d="M5 0c.57 0 .827 1.836 2.077 3.086C8.327 4.336 10 4.432 10 5c0 .568-1.684.823-2.934 2.073C5.816 8.323 5.723 10 5 10c-.723 0-.854-1.762-2.104-3.012S0 5.623 0 5s1.508-.642 2.815-1.949S4.43 0 5 0z"></path><path id="wd-graphic-empty-state-search-gray-path-11" d="M3 0c.342 0 .496 1.102 1.246 1.852S6 2.659 6 3c0 .34-1.01.494-1.76 1.244S3.433 6 3 6c-.434 0-.512-1.057-1.262-1.807S0 3.373 0 3c0-.374.905-.385 1.69-1.17C2.472 1.047 2.657 0 3 0z"></path><path id="wd-graphic-empty-state-search-gray-path-13" d="M3 0c.342 0 .496 1.102 1.246 1.852S6 2.659 6 3c0 .34-1.01.494-1.76 1.244S3.433 6 3 6c-.434 0-.512-1.057-1.262-1.807S0 3.373 0 3c0-.374.905-.385 1.69-1.17C2.472 1.047 2.657 0 3 0z"></path><path id="wd-graphic-empty-state-search-gray-path-15" d="M3 0c.342 0 .496 1.102 1.246 1.852S6 2.659 6 3c0 .34-1.01.494-1.76 1.244S3.433 6 3 6c-.434 0-.512-1.057-1.262-1.807S0 3.373 0 3c0-.374.905-.385 1.69-1.17C2.472 1.047 2.657 0 3 0z"></path><path id="wd-graphic-empty-state-search-gray-path-17" d="M3 0c.342 0 .496 1.102 1.246 1.852S6 2.659 6 3c0 .34-1.01.494-1.76 1.244S3.433 6 3 6c-.434 0-.512-1.057-1.262-1.807S0 3.373 0 3c0-.374.905-.385 1.69-1.17C2.472 1.047 2.657 0 3 0z"></path><path id="wd-graphic-empty-state-search-gray-path-19" d="M3 0c.342 0 .496 1.102 1.246 1.852S6 2.659 6 3c0 .34-1.01.494-1.76 1.244S3.433 6 3 6c-.434 0-.512-1.057-1.262-1.807S0 3.373 0 3c0-.374.905-.385 1.69-1.17C2.472 1.047 2.657 0 3 0z"></path><circle id="wd-graphic-empty-state-search-gray-path-21" cx="2" cy="2" r="2"></circle><circle id="wd-graphic-empty-state-search-gray-path-23" cx="1.5" cy="1.5" r="1.5"></circle><circle id="wd-graphic-empty-state-search-gray-path-25" cx="1.5" cy="1.5" r="1.5"></circle><circle id="wd-graphic-empty-state-search-gray-path-27" cx="1" cy="1" r="1"></circle><circle id="wd-graphic-empty-state-search-gray-path-29" cx="1" cy="1" r="1"></circle><circle id="wd-graphic-empty-state-search-gray-path-31" cx="1" cy="1" r="1"></circle></defs><g fill="none" fill-rule="evenodd" class="wd-icon-container"><g fill-rule="nonzero" transform="translate(29 102)"><path fill="#000" fill-opacity=".04" d="M92 18C81.5 1.5 66.5-2 53.5 3c18 1.5 29.948 14.971 31.5 21 3.5-4 6-6 7-6z"></path><use fill="#CAD3D9" xlink:href="#wd-graphic-empty-state-search-gray-path-1"></use></g><g fill-rule="nonzero" transform="translate(216 43)"><path fill="#000" fill-opacity=".04" d="M54 7C48 1 43.5-.276 32 3.099c7 0 13.5.901 15 7.901 4-4.5 5.5-3 7-4z"></path><use fill="#CAD3D9" xlink:href="#wd-graphic-empty-state-search-gray-path-3"></use></g><use fill="#E6EBEE" fill-rule="nonzero" transform="translate(25 32)" xlink:href="#wd-graphic-empty-state-search-gray-path-5"></use><use fill="#E6EBEE" fill-rule="nonzero" transform="translate(222 144)" xlink:href="#wd-graphic-empty-state-search-gray-path-7"></use><use fill="#FFDB63" transform="translate(114 7)" xlink:href="#wd-graphic-empty-state-search-gray-path-9"></use><use fill="#FFDB63" transform="translate(115 89)" xlink:href="#wd-graphic-empty-state-search-gray-path-11"></use><use fill="#FFDB63" transform="translate(152 138)" xlink:href="#wd-graphic-empty-state-search-gray-path-13"></use><use fill="#FFDB63" transform="translate(322 31)" xlink:href="#wd-graphic-empty-state-search-gray-path-15"></use><use fill="#FFDB63" transform="translate(24 64)" xlink:href="#wd-graphic-empty-state-search-gray-path-17"></use><use fill="#FFDB63" transform="translate(260 98)" xlink:href="#wd-graphic-empty-state-search-gray-path-19"></use><use fill="#E6EBEE" transform="translate(260 30)" xlink:href="#wd-graphic-empty-state-search-gray-path-21"></use><use fill="#E6EBEE" transform="translate(71 73)" xlink:href="#wd-graphic-empty-state-search-gray-path-23"></use><use fill="#E6EBEE" transform="translate(230 104)" xlink:href="#wd-graphic-empty-state-search-gray-path-25"></use><use fill="#E6EBEE" transform="translate(86 130)" xlink:href="#wd-graphic-empty-state-search-gray-path-27"></use><use fill="#E6EBEE" transform="translate(100 67)" xlink:href="#wd-graphic-empty-state-search-gray-path-29"></use><use fill="#E6EBEE" transform="translate(221 56)" xlink:href="#wd-graphic-empty-state-search-gray-path-31"></use><path fill="#fff" d="M166 106c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36-16.118 36-36 36zm43.89 1.89l27.165 27.165a4.164 4.164 0 1 1-5.889 5.89L204 113.778l5.89-5.889z"></path><path fill="#dfe2e6" d="M163.5 105.915C182.216 104.63 197 89.042 197 70c0-19.042-14.784-34.63-33.5-35.915.826-.056 1.66-.085 2.5-.085 19.882 0 36 16.118 36 36s-16.118 36-36 36c-.84 0-1.674-.029-2.5-.085z"></path><path fill="#7b858f" d="M204.768 110.182l-12.614-12.614C185.34 104.033 176.134 108 166 108c-20.987 0-38-17.013-38-38s17.013-38 38-38 38 17.013 38 38c0 10.134-3.967 19.34-10.432 26.154l12.614 12.614 3.707-3.707 28.58 28.58a6.164 6.164 0 1 1-8.717 8.718l-28.58-28.58 3.596-3.597zM166 106c19.882 0 36-16.118 36-36s-16.118-36-36-36-36 16.118-36 36 16.118 36 36 36zm43.89 1.89l-5.89 5.888 27.166 27.167a4.164 4.164 0 0 0 5.89-5.89l-27.167-27.166z"></path></g></svg></span></div><div  class="jobNoJobsErrorMessage">There are no job openings at this time</div><div class="jobCheckBackErrorMessage" >Check back later</div></div>`;
    container.innerHTML += jobDiv;
  }
}

var getPaginationLiItem = function (liName, opts) {
  var _opts = JSON.parse(JSON.stringify(opts));
  var paginationLi = document.createElement("li");
  paginationLi.setAttribute("id", "li-pagination" + liName);
  paginationLi.setAttribute("class", "page-item");
  paginationLi.setAttribute("custom-data", liName);
  var paginationLink = document.createElement("span");
  paginationLink.setAttribute("class", "page-link");
  paginationLi.appendChild(paginationLink);
  if (liName === "previous") {
    _opts.currentPage = _opts.currentPage - 1;
    paginationLink.textContent = "Previous";
  } else if (liName === "next") {
    _opts.currentPage = _opts.currentPage + 1;
    paginationLink.textContent = "Next";
  } else {
    _opts.currentPage = liName;
    paginationLink.textContent = liName;
  }
  paginationLink.setAttribute(
    "onclick",
    `populateJobs(${JSON.stringify(_opts)})`
  );
  return paginationLi;
};
var CONST = {
  PAGE_NUMBER_TO_BE_DISPLAY: 5,
};
function managePagination(opts) {
  var paginationUl = document.getElementById("pagination-ul");
  var totalRecords = opts.data.length;
  var currentPage = opts.currentPage || 1;
  var startPage = opts.data.startPage || 1;
  var visiblePages = opts.data.visiblePages || 5;
  var totalPages = Math.ceil(totalRecords / 10);

  paginationUl.innerHTML = "";

  if (currentPage != 1) {
    var paginationLi = getPaginationLiItem("previous", opts);
    paginationLi.setAttribute("data-page", currentPage);
    paginationLi.setAttribute("data-total-pages", totalPages);
    paginationLi.setAttribute("data-start-page", startPage);
    paginationLi.setAttribute("data-visible-pages", visiblePages);
    paginationLi.setAttribute("data-total-records", totalRecords);
    paginationLi.setAttribute("data-current-page", currentPage);
    paginationUl.appendChild(paginationLi);
  }

  if (totalPages <= CONST.PAGE_NUMBER_TO_BE_DISPLAY) {
    for (var i = 1; i <= totalPages; i++) {
      var paginationLi = getPaginationLiItem(i, opts);
      paginationUl.appendChild(paginationLi);
    }
  } else {
    if (currentPage < 3) {
      for (var i = 1; i <= visiblePages; i++) {
        var paginationLi = getPaginationLiItem(i, opts);
        paginationUl.appendChild(paginationLi);
      }
    } else if (currentPage > totalPages - 2) {
      for (var i = totalPages - visiblePages + 1; i <= totalPages; i++) {
        var paginationLi = getPaginationLiItem(i, opts);
        paginationUl.appendChild(paginationLi);
      }
    } else {
      for (var i = currentPage - 2; i <= currentPage + 2; i++) {
        var paginationLi = getPaginationLiItem(i, opts);
        paginationUl.appendChild(paginationLi);
      }
    }
    if (currentPage < totalPages) {
      var paginationLi = getPaginationLiItem("next", opts);
      paginationUl.appendChild(paginationLi);
    }
  }

  var currentLiItem = document.getElementById("li-pagination" + currentPage);
  currentLiItem && currentLiItem.setAttribute("class", "active");
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

var filterOptions = {};

function getJobTypeDisplayName(jobType) {
  switch (jobType) {
    case "full_time":
      return "Full Time";
    case "part_time":
      return "Part Time";
    case "freelance":
      return "As-needed";
    default:
      return jobType;
  }
}

function search() {
  var searchKey = document.getElementById("search-input").value;
  filterOptions["searchKey"] = searchKey;
  listJobData(filterOptions);
  document.getElementById("search-input").value = "";
}

function filterDataWithSearchKey(data, searchKey, shouldNotIncludeKeyword) {
  var jobLength = data.length;
  var filteredData = [];
  for (var i = 0; i < jobLength; i++) {
    var job = JSON.stringify(data[i]);
    if (job.toLowerCase().includes(searchKey.toLowerCase())) {
      if (
        shouldNotIncludeKeyword &&
        !job.toLowerCase().includes(shouldNotIncludeKeyword.toLowerCase())
      ) {
        filteredData.push(data[i]);
      } else {
        filteredData.push(data[i]);
      }
    }
  }
  return filteredData;
}

function getFilteredJobData(filterOptions) {
  var searchKey = filterOptions["searchKey"] || "";
  var jobLength = staticJobData.length;
  var filteredData = filterDataWithSearchKey(staticJobData, searchKey);
  /*   for (var i = 0; i < jobLength; i++) {
      var job = JSON.stringify(staticJobData[i]);
      if (job.toLowerCase().includes(searchKey.toLowerCase())) {
        filteredData.push(staticJobData[i]);
      }
    } */

  var jobTypes = filterOptions["jobTypes"] || [];
  if (jobTypes.length > 0) {
    filteredData = filteredData.filter((element) => {
      return jobTypes.includes(element["Contract Details"]);
    });
  }

  var jobLocations = filterOptions["location"] || [];
  if (jobLocations.length > 0) {
    filteredData = filteredData.filter((element) => {
      var location = element["Job Location"].split(",")[1].trim();
      return jobLocations.includes(location);
    });
  }

  var category = filterOptions["category"] || [];
  if (category.length > 0) {
    var categoryFilteredData = [];
    if (category.includes("Nurse Practitioner")) {
      Array.prototype.push.apply(
        categoryFilteredData,
        filterDataWithSearchKey(filteredData, "Nurse Practitioner")
      );
    }
    if (category.includes("Medical Director")) {
      Array.prototype.push.apply(
        categoryFilteredData,
        filterDataWithSearchKey(filteredData, "Medical Director")
      );
    }
    if (category.includes("Physician")) {
      Array.prototype.push.apply(
        categoryFilteredData,
        filterDataWithSearchKey(filteredData, "Physician", "Medical Director")
      );
    }
    filteredData = categoryFilteredData;
  }

  return filteredData;
}

function listFilterOptions(filterOptions) {
  var filterDisplayDiv = document.getElementById("badge-list");
  var searchElement;
  filterDisplayDiv.innerHTML = "";
  var clearFilterButton = document.getElementById("clear-bt-wrap");
  clearFilterButton.classList.add("d-none");
  if (filterOptions["searchKey"]) {
    var searchText = filterOptions["searchKey"];
    var randId = generateRandomId(10);
    var searchElement = ` 
    <span onclick="removeSearchFilter()" id="${randId}" class="badge rounded-pill text-bg-light">
      ${searchText} <span class="badge-close"><iclass="fa-solid fa-xmark"></i></span>
    </span>
    `;
    filterDisplayDiv.innerHTML += searchElement;
    clearFilterButton.classList.remove("d-none");
  }
  var jobLocation = filterOptions["location"] || [];
  if (jobLocation.length > 0) {
    jobLocation.forEach((location) => {
      var randId = generateRandomId(10);
      var locationElement = ` 
      <span id="${randId}" onclick="removeLocationFilter('${location}')" class="badge rounded-pill text-bg-light">
        ${STATES[location]}
        <span class="badge-close">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </span>
      `;
      filterDisplayDiv.innerHTML += locationElement;
    });
    clearFilterButton.classList.remove("d-none");
  }

  var jobCategories = filterOptions["category"] || [];
  if (jobCategories.length > 0) {
    jobCategories.forEach((category) => {
      var randId = generateRandomId(10);
      var categoryElement = ` 
      <span id="${randId}" onclick="removeCategoryFilter('${category}')" class="badge rounded-pill text-bg-light">${category} <span class="badge-close"><i
                  class="fa-solid fa-xmark"></i></span></span>
      `;
      filterDisplayDiv.innerHTML += categoryElement;
    });
    clearFilterButton.classList.remove("d-none");
  }

  var jobTypes = filterOptions["jobTypes"] || [];
  if (jobTypes.length > 0) {
    jobTypes.forEach((jobType) => {
      var randId = generateRandomId(10);
      var jobTypeElement = ` 
      <span id="${randId}" onclick="removeJobTypeFilter('${jobType}')" class="badge rounded-pill text-bg-light">${getJobTypeDisplayName(
        jobType
      )} <span class="badge-close"><i
                  class="fa-solid fa-xmark"></i></span></span>
      `;
      filterDisplayDiv.innerHTML += jobTypeElement;
    });
    clearFilterButton.classList.remove("d-none");
  }
}

function removeSearchFilter() {
  filterOptions["searchKey"] = "";
  listJobData(filterOptions);
}

function removeJobTypeFilter(jobTypeToBeRemoved) {
  var jobTypes = filterOptions["jobTypes"] || [];
  if (jobTypes.length > 0) {
    jobTypes.forEach((jobType) => {
      if (jobType === jobTypeToBeRemoved) {
        filterOptions["jobTypes"] = filterOptions["jobTypes"].filter(
          (item) => item !== jobType
        );
      }
    });
  }
  listJobData(filterOptions);
}

function removeCategoryFilter(categoryToBeRemoved) {
  var jobCategories = filterOptions["category"] || [];
  if (jobCategories.length > 0) {
    jobCategories.forEach((category) => {
      if (category === categoryToBeRemoved) {
        filterOptions["category"] = filterOptions["category"].filter(
          (item) => item !== category
        );
      }
    });
  }
  listJobData(filterOptions);
}

function removeLocationFilter(locationToBeRemoved) {
  var jobLocation = filterOptions["location"] || [];
  if (jobLocation.length > 0) {
    jobLocation.forEach((location) => {
      if (location === locationToBeRemoved) {
        filterOptions["location"] = filterOptions["location"].filter(
          (item) => item !== location
        );
      }
    });
  }
  listJobData(filterOptions);
}

function listJobData(filterOptions) {
  listFilterOptions(filterOptions);
  var filterData = getFilteredJobData(filterOptions);
  populateJobs({
    data: filterData,
    containerId: "job-list",
    container: document.getElementById("job-list"),
  });
}

function checkAndListJobData() {
  var fullTimeCheckBox = document.getElementById("fullTimeCheckbox");
  var partTimeCheckBox = document.getElementById("partTimeCheckbox");
  var freelanceCheckBox = document.getElementById("freelanceCheckbox");

  var jobTypes = [];
  if (fullTimeCheckBox.checked) {
    jobTypes.push("full_time");
  }
  if (partTimeCheckBox.checked) {
    jobTypes.push("part_time");
  }
  if (freelanceCheckBox.checked) {
    jobTypes.push("freelance");
  }

  filterOptions["jobTypes"] = jobTypes;
  listJobData(filterOptions);
}

function openDescription(elementData) {
  var jobId = event.target.getAttribute("id");
  var elementData = getJobById(jobId);

  var positionName = elementData["Position Name"];
  var jobLocation = elementData["Job Location"];
  var jobCreatedDate = elementData["Job Created Date"];
  var jobReference = elementData["Job Reference"];
  var jobDescription = elementData["description"];
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
                <div onclick="openJobInNewTab('${jobReference}')" class="desc-link flex-item pb-3 flex-shrink-0 fc-light">
                  <i class="fa-solid fa-arrow-up-right-from-square mx-3"></i>
                </div>
              </div>
              <div>
                <button onclick="openJobInNewTab('${jobReference}')" id="apply-job" class="btn btn-primary mt-3 px-3">
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
              
                  <div class="fs-15">
                    <span class="highlight-icons-wrap"><i class="fa-solid fa-bookmark"></i></span>
                    ${jobReference}
                  </div>
                </div>
              </div>
              <div class="d-none job-detailed-desc mt-3 mb-2">
                ${jobDescription}
              </div>
            </div>
            <div onclick="closeContainer()" class="close-desc fc-light">
              <i class="fa-solid fa-xmark"></i>
            </div>`;
  div.setAttribute("class", "pos-relative");
  descriptionContainer.innerHTML = "";
  descriptionContainer.appendChild(div);
  descriptionContainer.classList.add("flex-grow-1");
}

//UI filter elements scripts ----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var radios = document.querySelectorAll('input[name="distLocRadios"]');
  var closeButton = document.querySelector(
    '.dist-loc.dropdown-menu button[data-bs-dismiss="dropdown"]'
  );
  var distanceOptions = document.getElementById("distanceOptions");
  var locationOptions = document.getElementById("locationOptions");
  var distLocButtonsRow = document.getElementById("distLocButtonsRow");

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

      distLocButtonsRow.classList.remove("d-none");
    });
  });

  var clearButton = document.querySelector("#distLocButtonsRow .clear-button");
  clearButton.addEventListener("click", function () {
    var distanceSelect = document.getElementById("distanceSelect");
    var locationCheckboxes = document.querySelectorAll(
      '#locationOptions input[type="checkbox"]'
    );
    distanceSelect.selectedIndex = 0;
    locationCheckboxes.forEach(function (checkbox) {
      checkbox.checked = false;
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

var staticJobData = [];

async function fetchJobs(url, allJobs = []) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const jobs = data.results || [];
    allJobs.push(...jobs);
    if (data.count > allJobs.length) {
      const nextPage = data.next;
      if (nextPage) {
        await fetchJobs(nextPage, allJobs);
      }
    }
    return allJobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return allJobs;
  }
}

function openLoader() {
  document.querySelector(".pagination-controller").classList.remove("d-none");
}

const allJobsBaseUrl =
  "https://api.manatal.com/open/v3/career-page/korzen-health-2/jobs/?search=healogics";

async function printAllJobs(fetchJobsFromAPI) {
  const pageSize = 100;
  const url = `${allJobsBaseUrl}&page=1&page_size=${pageSize}`;
  var spinner = document.querySelector("#loading-spinner");
  spinner.classList.remove("d-none");
  spinner.classList.add("d-flex");
  try {
    if (fetchJobsFromAPI) {
      const allJobs = await fetchJobs(url);
      if (!allJobs || (allJobs && allJobs.length == 0))
        staticJobData = getBackupData();
      else staticJobData = allJobs;
    } else {
      staticJobData = getBackupData();
    }
    populateJobs({
      data: staticJobData,
      container: document.getElementById("job-list"),
      containerId: "job-list",
      currentPage: 1,
    });
    populateFilterOptions(staticJobData);
    spinner.classList.remove("d-flex");
    spinner.classList.add("d-none");
  } catch (error) {
    spinner.classList.remove("d-flex");
    spinner.classList.add("d-none");
    console.error("Error:", error);
  }
}

var STATES = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

function sortStates(statesList) {
  const stateOrder = {
    AL: 1,
    AK: 2,
    AZ: 3,
    AR: 4,
    CA: 5,
    CO: 6,
    CT: 7,
    DE: 8,
    FL: 9,
    GA: 10,
    HI: 11,
    ID: 12,
    IL: 13,
    IN: 14,
    IA: 15,
    KS: 16,
    KY: 17,
    LA: 18,
    ME: 19,
    MD: 20,
    MA: 21,
    MI: 22,
    MN: 23,
    MS: 24,
    MO: 25,
    MT: 26,
    NE: 27,
    NV: 28,
    NH: 29,
    NJ: 30,
    NM: 31,
    NY: 32,
    NC: 33,
    ND: 34,
    OH: 35,
    OK: 36,
    OR: 37,
    PA: 38,
    RI: 39,
    SC: 40,
    SD: 41,
    TN: 42,
    TX: 43,
    UT: 44,
    VT: 45,
    VA: 46,
    WA: 47,
    WV: 48,
    WI: 49,
    WY: 50,
  };

  return statesList.sort((a, b) => stateOrder[a] - stateOrder[b]);
}

function populateFilterOptions(allJobs) {
  var allLocations = allJobs.map((el) => el["state"]);
  var locationDropDown = document.getElementById("location-drop-down");
  allLocations = [...new Set(allLocations)];

  if(allLocations.length  < 2 && allLocations[0] == undefined){
    allLocations = Object.keys(STATES);
  }
  var sortedStateList = sortStates(allLocations);
  sortedStateList.forEach((el) => {
    var id = generateRandomId(10);
    var template = `
      <div class="filter-item">
      <input class="form-check-input" type="checkbox" value="${el}" id="${id}" />
      <label class="form-check-label" for="defaultCheck1">
        ${STATES[el]}
      </label>
    </div>
      `;
    locationDropDown.innerHTML += template;
  });
}

var jobBaseUrl = "https://www.careers-page.com/korzen-health-2/job/";

function openJobInNewTab(jobId) {
  window.open(`${jobBaseUrl}${jobId}/apply`, "_blank");
}

function checkAndUpdateCategoryFilter() {
  var medicalDirectorCheckbox = document.getElementById(
    "medicalDirectorCheckbox"
  );
  var nursePractitionerCheckbox = document.getElementById(
    "nursePractitionerCheckbox"
  );
  var physicianCheckbox = document.getElementById("physicianCheckbox");

  filterOptions["category"] = [];
  if (medicalDirectorCheckbox.checked) {
    filterOptions["category"].push("Medical Director");
  }
  if (nursePractitionerCheckbox.checked) {
    filterOptions["category"].push("Nurse Practitioner");
  }
  if (physicianCheckbox.checked) {
    filterOptions["category"].push("Physician");
  }
  listJobData(filterOptions);
}

function updateLocationFilter() {
  var locationDropDown = document.getElementById("location-drop-down");
  var locationCheckboxes = document.querySelectorAll(
    '#location-drop-down input[type="checkbox"]'
  );
  var checkedLocations = [];
  locationCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedLocations.push(checkbox.value);
    }
  });
  filterOptions["location"] = checkedLocations;
  listJobData(filterOptions);
}

function resetLocationFilter() {
  filterOptions["location"] = [];
  listJobData(filterOptions);
}

function clearAllFilter() {
  filterOptions = {};
  listJobData(filterOptions);
  clearCategoryFilter();
  clearTypeFilter();
}

function clearCategoryFilter() {
  var medicalDirectorCheckbox = document.getElementById(
    "medicalDirectorCheckbox"
  );
  var nursePractitionerCheckbox = document.getElementById(
    "nursePractitionerCheckbox"
  );
  var physicianCheckbox = document.getElementById("physicianCheckbox");
  medicalDirectorCheckbox.checked = false;
  nursePractitionerCheckbox.checked = false;
  physicianCheckbox.checked = false;
};

function clearTypeFilter() {
  var fullTimeCheckBox = document.getElementById("fullTimeCheckbox");
  var partTimeCheckBox = document.getElementById("partTimeCheckbox");
  var freelanceCheckBox = document.getElementById("freelanceCheckbox");
  fullTimeCheckBox.checked = false;
  partTimeCheckBox.checked = false;
  freelanceCheckBox.checked = false;
}


function beforeShowFilterDropDown() {
  var locationDropDown = document.getElementById("location-drop-down");
  var locationCheckboxes = document.querySelectorAll(
    '#location-drop-down input[type="checkbox"]'
  );
  var filteredLocations = filterOptions["location"] || [];
  locationCheckboxes.forEach(function (checkbox) {
    checkbox.checked = filteredLocations.includes(checkbox.value);
  });
}

/*
 *  fetchJobsFromAPI: true to fetch jobs from API, false to use backup data
 *   Add the Jobs Details Json to the backupData Array.
 */
var fetchJobsFromAPI = false;
printAllJobs(fetchJobsFromAPI);

function generateRandomId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
/* populateJobs({
  data: staticJobData,
  container: document.getElementById("job-list"),
}); */




function getBackupData() {
  var backupData = [
    {
      "Position Name":
        "Clinical Medical Director | Wound Care Physician | Full-Time",
      "Job Client": "Healogics",
      "Job Status": "active",
      "Job Location": "Oklahoma City, OK, United States",
      "Center Code and Name": "OK047- Integris Baptist Health Medical Center",
      "Headcount": 1,
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
      "Headcount": 2,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
      "Headcount": 1,
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
  return backupData;
}


