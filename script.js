// load members from Google Sheet
function loadMembers() {
  fetch("https://script.google.com/a/macros/student.judsonisd.org/s/AKfycbzatszFP79hsuJS_v44J2eEn3ON9a4vENXCog8b-Q6tvasRwP1RkLcZJSsFvDJGxlxzgg/exec")
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("memberList");
      list.innerHTML = ""; // clear old
      data.forEach(row => {
        const item = document.createElement("li");
        item.textContent = `${row[0]} - Grade ${row[2]}`;
        list.appendChild(item);
      });
    });
}

// call on page load
window.onload = loadMembers;
