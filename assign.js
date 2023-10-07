const readline = require('readline');
const nodemailer = require('nodemailer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const facultyData = [
  {
    "Date": "2-1-2024",
    "Faculty Name": "Carmine Derrick",
    "Dept": "AI&DS",
    "Emp_id": "T801"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Dalt Patley",
    "Dept": "EEE",
    "Emp_id": "T802"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Mendy Kuzemka",
    "Dept": "EEE",
    "Emp_id": "T803"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Natty Stainsby",
    "Dept": "EEE",
    "Emp_id": "T804"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Erma De Cruz",
    "Dept": "EEE",
    "Emp_id": "T805"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Kristopher Dreschler",
    "Dept": "CSM",
    "Emp_id": "T806"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Cordelie Jarmyn",
    "Dept": "ECE",
    "Emp_id": "T807"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Tracey Ciccarelli",
    "Dept": "IT",
    "Emp_id": "T808"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Layton Ewen",
    "Dept": "IT",
    "Emp_id": "T809"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Clarissa Newcomb",
    "Dept": "CSE",
    "Emp_id": "T810"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Rebe Pillifant",
    "Dept": "ECE",
    "Emp_id": "T811"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Gerry Dockree",
    "Dept": "MECH",
    "Emp_id": "T812"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Pierce Battelle",
    "Dept": "CSE",
    "Emp_id": "T813"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Dallis Polley",
    "Dept": "EEE",
    "Emp_id": "T814"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Stevena Paddingdon",
    "Dept": "ECE",
    "Emp_id": "T815"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Austin Daintry",
    "Dept": "CSM",
    "Emp_id": "T816"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Darwin Drayn",
    "Dept": "CIVIL",
    "Emp_id": "T817"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Johnny Torn",
    "Dept": "CSE",
    "Emp_id": "T818"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Tirrell Kem",
    "Dept": "CSE",
    "Emp_id": "T819"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Jillene Conry",
    "Dept": "CIVIL",
    "Emp_id": "T820"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Nerissa Coultas",
    "Dept": "CSE",
    "Emp_id": "T821"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Tiffy Extence",
    "Dept": "CSE",
    "Emp_id": "T822"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Charmine Winfield",
    "Dept": "ASE",
    "Emp_id": "T823"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Padraig Bullent",
    "Dept": "MECH",
    "Emp_id": "T824"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Sidoney Werrilow",
    "Dept": "CIVIL",
    "Emp_id": "T825"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Aloisia Summerley",
    "Dept": "EEE",
    "Emp_id": "T826"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Stacee Butterfill",
    "Dept": "EEE",
    "Emp_id": "T827"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Dulci Sycamore",
    "Dept": "CSE",
    "Emp_id": "T828"
  },
  {
    "Date": "2-1-2024",
    "Faculty Name": "Alyson Paxman",
    "Dept": "EEE",
    "Emp_id": "T900"
  }
];

const roomData = [
  {
    "class": "1S01",
    "faculty count": 1
  },
  {
    "class": "1S03",
    "faculty count": 1
  },
  {
    "class": "2S01",
    "faculty count": 2
  },
  {
    "class": "2S02",
    "faculty count": 1
  },
  {
    "class": "2S03",
    "faculty count": 2
  },
  {
    "class": "3S03",
    "faculty count": 1
  },
  {
    "class": "1G01",
    "faculty count": 2
  },
  {

    "class": "1G03",
    "faculty count": 2
  },
  {

    "class": "2G01",
    "faculty count": 1
  },
  {

    "class": "2G02",
    "faculty count": 2
  },
  {

    "class": "2G03",
    "faculty count": 2
  },
  {
    "class": "3G02",
    "faculty count": 1
  },
  {
    "class": "3G03",
    "faculty count": 2
  },
  {
    "class": "1F03",
    "faculty count": 2
  },
  {
    "class": "2F02",
    "faculty count": 1
  },
  {
    "class": "3F01",
    "faculty count": 1
  },
  {
    "class": "2F03",
    "faculty count": 1
  },
  {
    "class": "3F03",
    "faculty count": 2
  },
  {
    "class": "1S04",
    "faculty count": 1
  },
  {
    "class": "1S05",
    "faculty count": 1
  },
  {
    "class": "1S06",
    "faculty count": 1
  },
  {
    "class": "2S04",
    "faculty count": 2
  },
  {
    "class": "2S05",
    "faculty count": 1
  },
  {
    "class": "2S06",
    "faculty count": 1
  },
  {
    "class": "3S06",
    "faculty count": 1
  },
  {
    "class": "1G04",
    "faculty count": 2
  },
  {
    "class": "1G06",
    "faculty count": 1
  },
  {
    "class": "2G04",
    "faculty count": 2
  },
  {
    "class": "2G05",
    "faculty count": 1
  },
  {
    "class": "2G06",
    "faculty count": 2
  },
  {
    "class": "4G01",
    "faculty count": 2
  }
];

// Create a transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'roysandeepd@gmail.com',
    pass: 'nfaloizzetcxauxp',
  },
});

// Function to send an email
function sendEmail(receiverEmail, subject, message, date) {
  const mailOptions = {
    from: 'sandeep sandeepdukkipati06@gmail.com',
    to: receiverEmail,
    subject: subject,
    text: ${message}\nDate: ${date},
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

function assignFacultyToRooms() {
  rl.question("Enter the class you want to assign faculty to: ", (classInput) => {
    const room = roomData.find((room) => room["class"] === classInput);

    if (!room) {
      console.log(Class "${classInput}" not found.);
      rl.close();
      return;
    }

    const maxFaculty = room["faculty count"];
    console.log(class: ${room["class"]});
    console.log(faculty count: ${maxFaculty});

    const selectedFaculty = selectRandomFaculty(maxFaculty);

    console.log("Assigned Faculty:");

    selectedFaculty.forEach((faculty, index) => {
      console.log(Name: ${faculty["Faculty Name"]});
      console.log(Department: ${faculty["Dept"]});
      console.log(Employee ID: ${faculty["Emp_id"]});
      console.log(Date: ${faculty["Date"]});

      // Get the current date
      const currentDate = new Date().toLocaleDateString();

      // Update the date and send the email
      faculty.date = currentDate;
      sendEmail(
        'janishtottadi07@gmail.com',
        'Room Assignment',
        You have been assigned to room ${room["class"]}.,
        currentDate // Pass the current date to the sendEmail function
      );

      // Reduce the faculty count
      room["faculty count"]--;

      console.log();
    });

    // Continue to the next room or exit
    rl.question('Press Enter to continue to the next room, or type "exit" to quit: ', (response) => {
      if (response.toLowerCase() === 'exit') {
        rl.close();
      } else {
        assignFacultyToRooms();
      }
    });
  });
}

function selectRandomFaculty(count) {
  if (count <= 0 || count > facultyData.length) {
    console.log("Invalid count value. Please enter a valid count.");
    return [];
  }

  const selectedFaculty = [];
  while (selectedFaculty.length < count) {
    const randomIndex = Math.floor(Math.random() * facultyData.length);
    const faculty = facultyData[randomIndex];
    if (!selectedFaculty.includes(faculty)) {
      selectedFaculty.push(faculty);
    }
  }

  return selectedFaculty;
}

assignFacultyToRooms();