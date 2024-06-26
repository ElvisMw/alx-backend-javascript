namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      constructor(teacher: Teacher) {
        super(teacher);
      }
  
      getRequirements(): string {
        return "Here is the list of requirements for C++";
      }
  
      getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  