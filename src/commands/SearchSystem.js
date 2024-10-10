// search.js
export function initializeSearch() {
    const searchName = document.querySelector(".search-name");
    const searchStarted = document.querySelector(".search-started");
    const searchDuration = document.querySelector(".search-duration");

    searchName.addEventListener("input", () => {
        const searchValue = searchName.value.toLowerCase();
        const projectListContent = document.querySelector("#project-list-content");

        projectListContent.querySelectorAll(".project-item").forEach(projectItem => {
            const projectName = projectItem.querySelector("p").textContent.toLowerCase();
            if (projectName.includes(searchValue)) {
                projectItem.classList.remove("hidden");
            } else {
                projectItem.classList.add("hidden");
            }
        });
    });

    searchStarted.addEventListener("input", () => {
        const searchValue = searchStarted.value.toLowerCase();
        const projectListContent = document.querySelector("#project-list-content");

        projectListContent.querySelectorAll(".project-item").forEach(projectItem => {
            const projectStarted = projectItem.querySelectorAll("p")[3].textContent.toLowerCase();
            if (projectStarted.includes(searchValue)) {
                projectItem.classList.remove("hidden");
            } else {
                projectItem.classList.add("hidden");
            }
        });
    });

    searchDuration.addEventListener("input", () => {
        const searchValue = searchDuration.value.toLowerCase();
        const projectListContent = document.querySelector("#project-list-content");

        projectListContent.querySelectorAll(".project-item").forEach(projectItem => {
            const projectDuration = projectItem.querySelectorAll("p")[4].textContent.toLowerCase();
            if (projectDuration.includes(searchValue)) {
                projectItem.classList.remove("hidden");
            } else {
                projectItem.classList.add("hidden");
            }
        });
    });
}
