<<<<<<< HEAD
<<<<<<< HEAD:source code/script.js
=======
<<<<<<< HEAD
=======
>>>>>>> f84ee3b (Final commit before pushing to GitHub)
const doctors = [
  {
    id: 1,
    name: "Dr. Aarti Sharma",
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/400x250?text=Dr.+Aarti",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    specialty: "Dermatologist",
    image: "https://via.placeholder.com/400x250?text=Dr.+Rohan",
  },
  {
    id: 3,
    name: "Dr. Priya Desai",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/400x250?text=Dr.+Priya",
  }
];

const doctorList = document.getElementById("doctor-list");

doctors.forEach((doc) => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${doc.image}" class="card-img-top" alt="${doc.name}" />
      <div class="card-body">
        <h5 class="card-title">${doc.name}</h5>
        <p class="card-text">${doc.specialty}</p>
        <button class="btn btn-primary" onclick="openModal('${doc.name}')">Book Appointment</button>
      </div>
    </div>
  `;
  doctorList.appendChild(card);
});

function openModal(doctorName) {
  document.getElementById("selectedDoctor").value = doctorName;
  document.getElementById("confirmation").classList.add("d-none");
  document.getElementById("appointment-form").reset();
  new bootstrap.Modal(document.getElementById("appointmentModal")).show();
}

document.getElementById("appointment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const doctor = document.getElementById("selectedDoctor").value;
  const name = document.getElementById("patientName").value;
  const date = document.getElementById("appointmentDate").value;
  const time = document.getElementById("appointmentTime").value;
  const message = `Appointment confirmed with ${doctor} on ${date} at ${time}, for ${name}.`;
  const confirmation = document.getElementById("confirmation");
  confirmation.textContent = message;
  confirmation.classList.remove("d-none");
});
<<<<<<< HEAD
=======
>>>>>>> d14729e (Added documents and demo video):script.js
const doctors = [
  {
    id: 1,
    name: "Dr. Aarti Sharma",
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/400x250?text=Dr.+Aarti",
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    specialty: "Dermatologist",
    image: "https://via.placeholder.com/400x250?text=Dr.+Rohan",
  },
  {
    id: 3,
    name: "Dr. Priya Desai",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/400x250?text=Dr.+Priya",
  }
];

const doctorList = document.getElementById("doctor-list");

doctors.forEach((doc) => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";
  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${doc.image}" class="card-img-top" alt="${doc.name}" />
      <div class="card-body">
        <h5 class="card-title">${doc.name}</h5>
        <p class="card-text">${doc.specialty}</p>
        <button class="btn btn-primary" onclick="openModal('${doc.name}')">Book Appointment</button>
      </div>
    </div>
  `;
  doctorList.appendChild(card);
});

function openModal(doctorName) {
  document.getElementById("selectedDoctor").value = doctorName;
  document.getElementById("confirmation").classList.add("d-none");
  document.getElementById("appointment-form").reset();
  new bootstrap.Modal(document.getElementById("appointmentModal")).show();
}

document.getElementById("appointment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const doctor = document.getElementById("selectedDoctor").value;
  const name = document.getElementById("patientName").value;
  const date = document.getElementById("appointmentDate").value;
  const time = document.getElementById("appointmentTime").value;
  const message = `Appointment confirmed with ${doctor} on ${date} at ${time}, for ${name}.`;
  const confirmation = document.getElementById("confirmation");
  confirmation.textContent = message;
  confirmation.classList.remove("d-none");
});
<<<<<<< HEAD:source code/script.js
=======
>>>>>>> f6b3451 (Initial commit - DocSpot front-end)
>>>>>>> d14729e (Added documents and demo video):script.js
=======
>>>>>>> f84ee3b (Final commit before pushing to GitHub)
