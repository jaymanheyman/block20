const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
  ];

  function main() {
    const rootElement = document.getElementById("root");
  
    // Create and append the h1 element
    const heading = document.createElement("h1");
    heading.textContent = "FREELANCERS";
    rootElement.appendChild(heading);
  
    // Create the unordered list element
    const userList = document.createElement("ul");
    userList.className = "user-list"; // Add a CSS class
  
    // Loop through the users array to create li elements
    for (let user of users) {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
      userList.appendChild(listItem);
    }
  
    // Append the unordered list element to the HTML document
    rootElement.appendChild(userList);
  }
  
  // Call the main function
  main();