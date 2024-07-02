document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");
  const dayElement = document.getElementById("day");

  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleDateString("en-GB", { weekday: "long" });

    timeElement.textContent = utcTime;
    dayElement.textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
