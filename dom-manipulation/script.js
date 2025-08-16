// Array of quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", category: "Resilience" }
];

// Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>"${quote.text}"</p><small>- ${quote.category}</small>`;
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const quoteText = textInput.value.trim();
  const quoteCategory = categoryInput.value.trim();

  if (quoteText === "" || quoteCategory === "") {
    alert("Please enter both a quote and a category.");
    return;
  }

  // Add new quote to array
  quotes.push({ text: quoteText, category: quoteCategory });

  // Show the newly added quote
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>"${quoteText}"</p><small>- ${quoteCategory}</small>`;

  // Clear inputs
  textInput.value = "";
  categoryInput.value = "";
}

// Attach event listener for "Show New Quote" button
document.addEventListener("DOMContentLoaded", () => {
  // Display one quote when page loads
  showRandomQuote();

  // Button event
  const newQuoteBtn = document.getElementById("newQuote");
  newQuoteBtn.addEventListener("click", showRandomQuote);
});
