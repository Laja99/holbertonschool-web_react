// Define the Teacher interface
interface Teacher {
  // Readonly properties can only be set during initialization
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  // Optional property
  yearsOfExperience?: number;
  location: string;
  // Index signature allows adding any additional attribute of type string
  [key: string]: any;
}

// Create a teacher object with extra attributes
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Print the object to the console
console.log(teacher3);

// Define the Directors interface which extends Teacher
// It adds a new mandatory property: numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Print the director object to the console
console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
// It takes firstName and lastName and returns the first letter of firstName followed by a dot and the full lastName
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage:
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface describing the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface describing the structure of the class
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the class
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Returns the string "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Returns the firstName of the student
  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass("John", "Doe");
console.log(student.displayName());      // Output: John
console.log(student.workOnHomework());   // Output: Currently working
