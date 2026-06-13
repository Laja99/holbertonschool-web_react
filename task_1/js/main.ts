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
