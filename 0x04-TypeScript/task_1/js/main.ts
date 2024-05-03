// Define interface for constructor of StudentClass
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
  }
  
  // Define interface for structure of StudentClass
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }

  // Implement StudentClass
  class StudentClassImpl implements StudentClass {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
      return "Currently working";
    }

    displayName(): string {
      return this.firstName;
    }
  }
