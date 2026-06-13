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
