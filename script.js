function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes().toString().padStart(2,'0');
  document.getElementById("clock").textContent =
    `Local Time: ${hours}:${mins}`;

  const day = now.getDay();
  let open = false;

  if (day === 0) {
    open = hours >= 9 && hours < 23;
  } else {
    open = hours >= 9 && hours < 20;
  }

  const status = document.getElementById("openStatus");
  if (open) {
    status.textContent = "OPEN NOW";
    status.className = "status-badge open";
  } else {
    status.textContent = "CLOSED";
    status.className = "status-badge closed";
  }
}

setInterval(updateClock,1000);
updateClock();
