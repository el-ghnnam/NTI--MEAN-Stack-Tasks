// 1. Given a web document as shown below in Fig. a, with only these few lines of
// code in shown in Fig. b. Using DOM Nodes to access, create, modify or remove
// any of its elements to have it finally as shown in Fig. c


// Create the center container
const centerContainer = document.createElement('div');
centerContainer.className = 'center-container';
document.body.appendChild(centerContainer);

// Create the menu list
const ul = document.createElement('ul');

// Menu title
const title = document.createElement('li');
title.innerHTML = '<b>Menu</b>';
ul.appendChild(title);

// Menu items
const items = ['Articles', 'Photos', 'About', 'Clients', 'Contact'];

items.forEach(itemText => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#';
  a.textContent = itemText;
  li.appendChild(a);
  ul.appendChild(li);
});

// Add the list to the center container
centerContainer.appendChild(ul);

// Function to create and position image
function createCornerImage(className, src) {
  const img = document.createElement('img');
  img.src = src;
  img.className = `corner-img ${className}`;
  document.body.appendChild(img);
}

// Add top-right image
createCornerImage('top-right', './dom.jpg');

// Add bottom-left image
createCornerImage('bottom-left', 'dom.jpg');