export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDeptIndex >= departments.length) {
        return { done: true };
      }

      const currentDeptEmployees = departments[currentDeptIndex];
      const currentEmployee = currentDeptEmployees[currentEmployeeIndex];

      currentEmployeeIndex += 1;

      if (currentEmployeeIndex >= currentDeptEmployees.length) {
        currentDeptIndex += 1;
        currentEmployeeIndex = 0;
      }

      return { value: currentEmployee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
