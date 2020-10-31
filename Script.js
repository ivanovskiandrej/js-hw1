// DATA
const courses = [
  {
    section: 'INF310',
    title: 'Modern JavaScript',
    instructor: 'Mikov',
    department: 'INF',
    credits: 1,
  },
  {
    section: 'INF240',
    title: 'Website Development',
    instructor: 'Dimitrov',
    department: 'INF',
    credits: 3,
  },
  {
    section: 'INF280',
    title: 'Database Systems',
    instructor: 'Christozov',
    department: 'INF',
    credits: 3,
  },
  {
    section: 'MAT104',
    title: 'Calculus II',
    instructor: 'Dalakov',
    department: 'MAT',
    credits: 3,
  },
  {
    section: 'COS221',
    title: 'Fundamental Data Structures',
    instructor: 'Christozov',
    department: 'COS',
    credits: 3,
  },
  {
    section: 'BUS260',
    title: 'Marketing',
    instructor: 'Petkov',
    department: 'BUS',
    credits: 3,
  },
  {
    section: 'BUS300',
    title: 'Business Ethics',
    instructor: 'Schwartz',
    department: 'BUS',
    credits: 4,
  },
  {
    section: 'BUS220',
    title: 'Financial Accounting',
    instructor: 'Cleary',
    department: 'BUS',
    credits: 3,
  },
  {
    section: 'BUS448',
    title: 'Strategic Management',
    instructor: 'Pantelides',
    department: 'BUS',
    credits: 3,
  },
  {
    section: 'THR130',
    title: 'Beginning Acting',
    instructor: 'Delchev',
    department: 'FAR',
    credits: 3,
  },
  {
    section: 'ENG205',
    title: 'Creative Writing',
    instructor: 'Cohen',
    department: 'ENG',
    credits: 4,
  },
];

const students = [
  {
    name: 'Adam Banff',
    standing: 'Junior',
    courses: ['INF240', 'BUS220', 'ENG205']
  },
  {
    name: 'Betty Cahn',
    standing: 'Senior',
    courses: ['INF280', 'COS221', 'INF310']
  },
  {
    name: 'Chisto Dotev',
    standing: 'Senior',
    courses: ['BUS220', 'BUS448', 'THR130']
  },
  {
    name: 'Dani Emerson',
    standing: 'Sophomore',
    courses: ['ENG205', 'THR130', 'INF310']
  },
  {
    name: 'Emy Fang',
    standing: 'Senior',
    courses: ['BUS300', 'BUS260', 'BUS448']
  },
  {
    name: 'Filip Gomez',
    standing: 'Junior',
    courses: ['COS221', 'COS310', 'INF240']
  },
  {
    name: 'Gergana Harris',
    standing: 'Senior',
    courses: ['BUS448', 'ENG205', 'THR130']
  },
  {
    name: 'Harry Insman',
    standing: 'Senior',
    courses: ['INF310', 'ENG205', 'THR130']
  },
  {
    name: 'Iliana Johnes',
    standing: 'Sophomore',
    courses: ['BUS260', 'BUS300', 'ENG205']
  },
  {
    name: 'Jane Kelly',
    standing: 'Sophomore',
    courses: ['BUS220', 'BUS260', 'THR130']
  }
];

// SAMPLE CODE
// Question: How many students are there in each of the classes?
function getStudentsPerCourse() { // define a function that answers the question
  const studentsPerCourse = {}; // define an object that will be used as a dictionary data structure to keep the results
  for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      if (!studentsPerCourse[course]) { 
        studentsPerCourse[course] = 0; // if the course is not present in the result dictionary - initialize it to 0
      }
    
      studentsPerCourse[course] += 1; // increment the number of students in the course to include the current student
    }
  }
  return studentsPerCourse; // return the resulting dictionary object
}







// How many students are there per standing (freshman, sophomore, etc)
function getStudentsPerStanding() { // defining a function
    const studentsPerStanding = {}; // defining an empty object that will be used to store data
    for (let student of students){ // go through all the students
            if (!studentsPerStanding[student.standing]){ // if the standing is not present in the object
                studentsPerStanding[student.standing]=0; // then it is assigned the value zero
            }
            studentsPerStanding[student.standing]+=1; // then we increase the occurence of the given standing by 1 
    }
    return studentsPerStanding; // at the end we return the object that contains standings and number of students per standing
}





// How many courses are there per department?
function getCoursesPerDepartment(){ // defining a function
    const coursesPerDepartment = {};// defining an empty object that will be used to store data
    for (let course of courses){ // go through all the courses
        if (!coursesPerDepartment[course.department]){ // if the department is not present in the object
            coursesPerDepartment[course.department] = 0 // then the given department is assigned the value of zero
        }
        coursesPerDepartment[course.department] += 1 // we increae the occurence of the given department by 1
    }
    
    return coursesPerDepartment; // we return the object that contains the departments and the number of courses for each
}





// How many students are in each department?
function getStudentsPerDepartment() { // define a function
  const studentsPerDepartment = {}; // define an object for keeping the results
  for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      for (let c of courses){ // go through the course list
          if (course == c.section){ // find the course in the course list, which has the same name as the course that the student is enrolled in
            if (!studentsPerDepartment[c.department]) { // if the department of that course is not in the object
            studentsPerDepartment[c.department] = 0; // it is initialized to zero
            }
            studentsPerDepartment[c.department] += 1; // and then we increment the occurence of the given department
          }
      }
        
    }
  }
  return studentsPerDepartment; // return the object
}







// How many students does each professor instruct?
// How many students are in each department?
function getStudentsPerProfessor() { // define a function
  const studentsPerProfessor = {}; // define an object for keeping the results
  for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      for (let c of courses){ // go through the course list
          if (course == c.section){ // find the course in the course list, which has the same name as the course that the student is enrolled in
            if (!studentsPerProfessor[c.instructor]) { // if the professor of that course is not in the object
            studentsPerProfessor[c.instructor] = 0; // it is initialized to zero
            }
            studentsPerProfessor[c.instructor] += 1; // and then we increment the occurence of the given department
          }
      }
        
    }
  }
  return studentsPerProfessor; // return the object
}






// Which course has the most students enrolled in it?
function getCourseWithMostStudents(){ // defining a function
    let biggestCourse = {}; // creating a object to store the course with most students in it
    let courseName = "" // variable for temporary saving the courseName
    let max = 0 // variable that stores the maximum number of students. Its initial value is 0, because there is no way that a course has less than
    // zero students in it. If anything, any course would have 0 or more students.
    const studentsPerCourse = getStudentsPerCourse() // creating an object and saving the object that is returned by the getStudentsPerCourse function
    // I can rewrite the code from the function here, but since it was given in the prompt, I decided that is better to use it
    // in order to spare writing redundant code.
    for (let course in studentsPerCourse){ // go through all of the courses in that object
        if (studentsPerCourse[course] > max){ // for every given course see if it is greater than the maximum
            max = studentsPerCourse[course] // if it is, then change the maximum to that number
            courseName = course // and store the name of the course
        }
    }
    
    biggestCourse[courseName] = max; // at the end add the course with the most students and the number of students in it to the object
    
    return biggestCourse; // return the object 
}






// Which course has the fewest students enrolled in it?
function getCourseWithLeastStudents(){ // defining a function
    let smallestCourse = {}; // creating a object to store the course with most students in it
    let courseName = "" // variable for temporary saving the courseName
    const studentsPerCourse = getStudentsPerCourse() // creating an object and saving the object that is returned by the getStudentsPerCourse function
    // I can rewrite the code from the function here, but since it was given in the prompt, I decided that is better to use it
    // in order to spare writing redundant code.
    var min = Number.MAX_SAFE_INTEGER // the maximum integer is assigned to min in order to make sure that the number is big enough
    for (let course in studentsPerCourse){ // go through all of the courses in that object
        if (studentsPerCourse[course] <= min){ // for every given course see if it is smaller than or equal to the minimum 
            min = studentsPerCourse[course]
            courseName = course // and store the name of the course
        }
    }
    
    smallestCourse[courseName] = min; // at the end add the course with the most students and the number of students in it to the object
    
    return smallestCourse; // return the object 
}






// Which student has the biggest sum of credits for the classes they are enrolled in?
function getBiggestSumOfCredits(){
    const studentCredits = {} // object containing all students and their respective credit hours 
   for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      for (let c of courses){ // go through the course list                
          if (course == c.section){ // find the course in the course list, which has the same name as the course that the student is enrolled in
                    if (!studentCredits[student.name]){ // if the student is not in the object
                        studentCredits[student.name] = 0 // assign it value 0
                    }
                    studentCredits[student.name]+=c.credits // add the credits of the course to the student
                }
            }
        }
    }
    max = 0 // set max to be 0. A variable used to store the courses
    let studentName = "" // an empty variable to store the student name
    for (let student in studentCredits){ // go through the list of students with their credit hours
        if (studentCredits[student]>=max){ // find the highest number of credits
            max = studentCredits[student] // store the credits
            studentName = student // store the name
        }
    }
    const maxCredits = {} // an object which will be used to store the student with the most credits
    maxCredits[studentName] = max // add the student and the credits to the object
    return maxCredits // return the object
}





// What is the "major" of each student (the department they are taking most courses in)?

function getStudentMajors(){
    const studentsAndMajors = {} // an object used to store students and majorsß
    const arrayDepts = [] // an array used to store the classes that a student is taking, in order to determine their majors
    let major = "" // a temporary variable used to store the major
    for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      for (let c of courses){ // go through the course list 
          if (course == c.section){ // find the course in the course list, which has the same name as the course that the student is enrolled in
              arrayDepts.push(c.department) // we push the department for all of the classes that the student is taking
          }
      } 
        // we see whether a student is taking two classes in the same department
        if (arrayDepts[0] == arrayDepts[1] || arrayDepts[0] == arrayDepts[2]){
            major = arrayDepts[0]
        }
        else if (arrayDepts[1] == arrayDepts[0] || arrayDepts[1] == arrayDepts[2]){
            major =  arrayDepts[1]
        }
        else if (arrayDepts[2]==arrayDepts[1] || arrayDepts[2] == arrayDepts[0]){
            major = arrayDepts[2]
        }
        else {
            // if the student is taking classes in three different departments, then we assume that they have no major
            major = "no major"
        }
        
        if (!studentsAndMajors[student]){ // if the student is not in the object, we add them and their major
            studentsAndMajors[student.name] = major
        }
    }
        arrayDepts.length = 0 // empty the array in order to use it for the next student
    }
    return studentsAndMajors // return the object
}

        



          
          


// Which students are taking courses in the "ENG" department?
function getStudentsInEng() { // define a function
  const studentsEngDept = []; // define an object for keeping the results
  for (let student of students) { // go through the list of all students
    for (let course of student.courses) { // for each student go through the list of the courses they are enrolled in
      for (let c of courses){ // go through the course list
          if (course == c.section){ // find the course in the course list, which has the same name as the course that the student is enrolled in
              if (c.department == 'ENG'){ // if the department is ENG
                if (!studentsEngDept.includes(student)){ //  check whether the student is already in the array
                        studentsEngDept.push(student.name) // if they are not, then push the name of the student
                    }
              }
          }
      }
        
    }
  }
  return studentsEngDept; // return the object
}




