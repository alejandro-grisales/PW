const studentsData = [
  {
    name: "John Doe",
    avatar: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?tf=3840x",
    github: "johndoe",
    neocities: "johndoe.neocities.org",
    email: "john@example.com",
    phone: "123-456-7890",
    activities: [
      { name: "Activity 1", uiux: "UI/UX", dev: "Dev", progress: "80%" },
      { name: "Activity 2", uiux: "UI/UX", dev: "Dev", progress: "70%" },
      // Agrega más actividades aquí si es necesario
    ],
    grade: "A",
  },
  {
    name: "Jane Smith",
    avatar: "https://www.semana.com/resizer/AhOjY7VO50nkdLUyhuzX2HcLZuc=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/KVRYJNDM6FGKPGL6WXPO26HFUA.png",
    github: "janesmith",
    neocities: "janesmith.neocities.org",
      email: "jane@example.com",
      phone: "987-654-3210",
      activities: [
          { name: "Activity 1", uiux: "UI/UX", dev: "Dev", progress: "90%" },
          { name: "Activity 2", uiux: "UI/UX", dev: "Dev", progress: "85%" },
          // Agrega más actividades aquí si es necesario
      ],
      grade: "B",
  },
  // Agrega más estudiantes aquí si es necesario
];

function createStudentCard(student) {
  const container = document.getElementById("students-container");

  const card = document.createElement("div");
  card.id = "student-card";

  const avatar = document.createElement("img");
  avatar.id = "student-avatar";
  avatar.src = student.avatar;
  avatar.alt = "Avatar";
  card.appendChild(avatar);

  const name = document.createElement("h1");
  name.id = "student-name";
  name.textContent = student.name;
  card.appendChild(name);

  const github = document.createElement("p");
  github.id = "student-github";
  github.textContent = `GitHub: ${student.github}`;
  card.appendChild(github);

  const neocities = document.createElement("p");
  neocities.id = "student-neocities";
  neocities.textContent = `Neocities: ${student.neocities}`;
  card.appendChild(neocities);

  const email = document.createElement("p");
  email.id = "student-email";
  email.textContent = `Email: ${student.email}`;
  card.appendChild(email);

  const phone = document.createElement("p");
  phone.id = "student-phone";
  phone.textContent = `Phone: ${student.phone}`;
  card.appendChild(phone);

  const activitiesHeading = document.createElement("h2");
  activitiesHeading.textContent = "Actividades";
  card.appendChild(activitiesHeading);

  const activitiesList = document.createElement("ul");
  activitiesList.id = "student-activities";
  student.activities.forEach((activity) => {
    const item = document.createElement("li");
    const itemIcon = document.createElement("div");
    itemIcon.classList.add("item");
    itemIcon.textContent = activity.name.charAt(0).toUpperCase();
    item.appendChild(itemIcon);
    const itemName = document.createElement("div");
    itemName.classList.add("nombre");
    itemName.textContent = activity.name;
    item.appendChild(itemName);
    const itemUiUx = document.createElement("div");
    itemUiUx.classList.add("estadouiux");
    itemUiUx.textContent = activity.uiux;
    item.appendChild(itemUiUx);
    const itemDev = document.createElement("div");
    itemDev.classList.add("estadodev");
    itemDev.textContent = activity.dev;
    item.appendChild(itemDev);
    activitiesList.appendChild(item);
  });
  card.appendChild(activitiesList);

  const gradeHeading = document.createElement("h2");
  gradeHeading.textContent = "Valoraciones";
  card.appendChild(gradeHeading);

  const ratingsList = document.createElement("ul");
  ratingsList.id = "student-ratings";
  const gradeItem = document.createElement("li");
  gradeItem.textContent = `Calificación: ${student.grade}`;
  ratingsList.appendChild(gradeItem);
  card.appendChild(ratingsList);

  // Obtener una broma aleatoria de Chuck Norris y mostrarla en la tarjeta
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      const jokeItem = document.createElement("li");
      jokeItem.textContent = `Chuck Norris Joke: ${data.value}`;
      ratingsList.appendChild(jokeItem);
    })
    .catch((error) => {
      console.log("Error al obtener la broma de Chuck Norris:", error);
    });

  container.appendChild(card);
}

studentsData.forEach((student) => {
  createStudentCard(student);
});
