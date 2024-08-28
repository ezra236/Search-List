const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", 
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", 
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", 
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
  "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", 
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", 
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", 
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", 
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
  "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", 
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", 
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const searchInput = document.getElementById('search');
const countryList = document.getElementById('country-list');

// Function to render the list of countries
function renderCountries(filter = '') {
  countryList.innerHTML = ''; // Clear the list first
  const filteredCountries = countries.filter(country => 
    country.toLowerCase().includes(filter.toLowerCase())
  );
  
  filteredCountries.forEach(country => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    // Add event listener to list items
    listItem.addEventListener('click', () => {
      searchInput.value = country; // Set the input field value
      countryList.style.display = 'none'; // Hide the list after selection
    });
    countryList.appendChild(listItem);
  });
}

// Event listener to show the list when the mouse is over the input field
searchInput.addEventListener('mouseover', () => {
  renderCountries(searchInput.value);
  countryList.style.display = 'block';
});

// Event listener to hide the list when the mouse moves out of the container
searchInput.addEventListener('mouseout', () => {
  setTimeout(() => {
    if (!countryList.matches(':hover') && !searchInput.matches(':hover')) {
      countryList.style.display = 'none';
    }
  }, 200); // Small delay to allow clicking on the list
});

// Event listener for search input
searchInput.addEventListener('input', (event) => {
  renderCountries(event.target.value);
});

// Initial setup: Hide the list by default
countryList.style.display = 'none';
