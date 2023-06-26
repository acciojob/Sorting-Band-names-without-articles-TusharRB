//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd'];

// Function to remove articles from band names
function removeArticles(name) {
  // Regular expression pattern to match articles
  const articlePattern = /^(a|an|the)\s/i;
  return name.replace(articlePattern, '');
}

// Sort the band names excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create an unordered list element
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');

// Add list items to the unordered list
bandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Append the unordered list to the document body
document.body.appendChild(ul);
