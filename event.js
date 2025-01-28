const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const eventModal = document.getElementById("event-modal");
const closeModal = document.getElementById("close-modal");
const saveEvent = document.getElementById("save-event");
const eventTitleInput = document.getElementById("event-title");

let events = {};
let currentDate = new Date();

function renderCalendar(date) {
  calendar.innerHTML = "";
  const year = date.getFullYear();
  const month = date.getMonth();
  monthYear.textContent = `${date.toLocaleDateString("default", {
    month: "long",
  })} ${year}`;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create empty spaces before the first day
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendar.appendChild(emptyDiv);
  }

  // Create days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    if (
      day === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      dayDiv.classList.add("today");
    }
    dayDiv.textContent = day;

    const key = `${year}-${month + 1}-${day}`;
    if (events[key]) {
      events[key].forEach((event) => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.textContent = event;
        dayDiv.appendChild(eventDiv);
      });
    }

    dayDiv.addEventListener("click", () => openModal(key));
    calendar.appendChild(dayDiv);
  }
}

function openModal(dateKey) {
  eventModal.style.display = "flex";
  saveEvent.onclick = () => {
    const eventTitle = eventTitleInput.value.trim();
    if (!eventTitle) return;

    if (!events[dateKey]) {
      events[dateKey] = [];
    }
    events[dateKey].push(eventTitle);
    eventTitleInput.value = "";
    eventModal.style.display = "none";
    renderCalendar(currentDate);
  };
}

closeModal.addEventListener("click", () => {
  eventModal.style.display = "none";
});

document.getElementById("prev").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("next").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
