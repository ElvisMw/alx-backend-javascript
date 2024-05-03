# 0x04. TypeScript

This project involves several tasks related to TypeScript, where you'll be working with interfaces, classes, functions, DOM manipulation, generic types, namespaces, ambient namespaces, advanced types, string literal types, ambient namespaces, declaration merging, and more.

## Tasks Overview

1. **Creating an interface for a student**
   - Define an interface named `Student` with specified elements.
   - Create two students and render them in a table using Vanilla JavaScript.

2. **Let's build a Teacher interface**
   - Create a `Teacher` interface with specific attributes.
   - Allow adding any attribute to the object dynamically.

3. **Extending the Teacher class**
   - Write an interface `Directors` that extends `Teacher`.
   - It requires an attribute named `numberOfReports`.

4. **Printing teachers**
   - Write a function `printTeacher` that returns a formatted string.
   - Define an interface for the function.

5. **Writing a class**
   - Implement a `StudentClass` class with specified methods.
   - Describe the constructor through an interface.

6. **Advanced types Part 1**
   - Create interfaces and classes for directors and teachers.
   - Implement methods for different roles.

7. **String literal types**
   - Define a string literal type named `Subjects`.
   - Write a function `teachClass` based on the subject provided.

8. **Ambient Namespaces**
   - Define types and interfaces for database CRUD operations.
   - Utilize ambient namespaces and declaration merging.

9. **Namespace & Declaration merging**
   - Create interfaces and classes for various subjects within a namespace.
   - Implement methods and attributes for each subject.

10. **Update task_4/js/main.ts**
    - Export constants and objects for different subjects.
    - Log subject details and teacher availability.

11. **Brand convention & Nominal typing**
    - Define interfaces with a brand property.
    - Create functions to sum credits for different subjects.

## File Structure

- Each task has its own directory (`task_0`, `task_1`, ..., `task_5`).
- Configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`, etc.) are provided in each task directory.
- Implementation files (`main.ts`, `interface.ts`, etc.) are located within the respective task directories.

## Usage

- Clone the repository `alx-backend-javascript`.
- Navigate to the relevant task directory.
- Use the provided configuration files to set up your development environment.
- Implement the required functionality in the corresponding TypeScript file (`main.ts` or others as specified).
- Use `npm run build` to compile the TypeScript code.
- Check for any TypeScript errors and ensure they are resolved.
- Test the functionality as per the task requirements.

## Repository Information

- **GitHub Repository:** [alx-backend-javascript](https://github.com/username/alx-backend-javascript)
- **Directory Structure:** Each task is organized into its respective directory (`0x04-TypeScript/task_0`, `0x04-TypeScript/task_1`, ..., `0x04-TypeScript/task_5`).
- **File Naming Convention:** Each task's TypeScript file is named `main.ts`, and other necessary files follow a similar naming convention.

## Note

- Ensure all files end with a newline character.
- Double-check that the TypeScript compiler does not show any warnings or errors.
- Use TypeScript extensions (`*.ts`) wherever possible.
- Follow the provided guidelines for editors, linting, and testing.

