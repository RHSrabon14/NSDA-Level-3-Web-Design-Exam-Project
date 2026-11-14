// --- CONTACT PAGE LOGIC (Requirement 3) ---
function submitContactForm() {
    // Get the values
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const message = document.getElementById('cMessage').value;

    // Basic validation check
    if(name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Confirmation Popup
    const confirmSubmit = confirm(`Thank you, ${name}!\n\nAre you sure you want to send this message?`);

    if (confirmSubmit) {
        alert("Success! Your message has been sent. Our team will reply to " + email + " shortly.");
        document.getElementById('contactForm').reset();
    } else {
        alert("Message canceled. You can continue editing.");
    }
}

// --- LIVE CHAT LOGIC ---
function startChat() {
    const userWantsChat = confirm("Connecting to a Plant Specialist...\n\nDo you want to start the live chat?");
    if (userWantsChat) {
        alert("Specialist: Hello! I am Emily, your plant specialist. How can I help you today?");
    }
}
// --- PRODUCT PAGE LOGIC ---

// 1. Add to Cart Total Price Calculator
const potSelect = document.getElementById('potOption');
const standSelect = document.getElementById('standOption');
const totalPriceDisplay = document.getElementById('totalPrice');
const basePrice = 45.00; // Base price of the Monstera

if (potSelect && standSelect && totalPriceDisplay) {
    function calculateTotal() {
        const potPrice = parseFloat(potSelect.value);
        const standPrice = parseFloat(standSelect.value);
        const newTotal = basePrice + potPrice + standPrice;
        totalPriceDisplay.innerText = newTotal.toFixed(2);
    }

    // Add event listeners to dropdowns
    potSelect.addEventListener('change', calculateTotal);
    standSelect.addEventListener('change', calculateTotal);
}

// 2. Add to Cart Button
function addToCart() {
    const total = totalPriceDisplay.innerText;
    alert(`Success! The Monstera with your selected add-ons (Total: $${total}) has been added to your cart.`);
}

// 3. Plant Parent Tips
function submitTip() {
    const name = document.getElementById('parentName').value;
    const tip = document.getElementById('parentTip').value;
    const tipList = document.getElementById('tipList');

    if (name === "" || tip === "") {
        alert("Please fill in both your name and tip.");
        return;
    }

    // Create a new div for the tip
    const newTip = document.createElement('div');
    newTip.className = "border-start border-3 border-success ps-3 mb-2";
    newTip.innerHTML = `<strong>${name}:</strong> <br><span class="small">${tip}</span>`;
    
    // Add to the list
    tipList.prepend(newTip);

    // Clear the form
    document.getElementById('tipsForm').reset();
}
// Current Date and Time Logic (Requirement 7)
function updateDateTime() {
    const now = new Date();
    
    // Format Date
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    // Format Time
    const timeString = now.toLocaleTimeString('en-US');
    
    // Display it in the footer
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.innerHTML = ` ${dateString} |  ${timeString}`;
    }
}
// Run the function once immediately
updateDateTime();

// Update the time every 1 second (1000 milliseconds)
setInterval(updateDateTime, 1000);
// Plant Matchmaker Quiz Logic
function recommendPlant() {
    // Get values from the form
    const sun = document.getElementById('quizSun').value;
    const care = document.getElementById('quizCare').value;
    const pet = document.getElementById('quizPet').value;
    
    let plantName = "";
    let plantDesc = "";
    
    // Simple logic to determine plant
    if (care === 'easy' && pet === 'yes') {
        plantName = "Spider Plant";
        plantDesc = "Thrives in most light, very easy to care for, and completely pet-safe!";
    } else if (sun === 'low' && care === 'easy') {
        plantName = "Snake Plant";
        plantDesc = "Perfect for dark corners, needs very little water, but mildly toxic to pets.";
    } else if (sun === 'bright' && care === 'medium') {
        plantName = "Monstera Deliciosa";
        plantDesc = "Loves bright indirect light, needs moderate watering, but toxic to pets.";
    } else {
        plantName = "Boston Fern";
        plantDesc = "Loves humidity and indirect light. Safe for pets but requires regular watering.";
    }
    
    // Show the result
    const resultDiv = document.getElementById('quizResult');
    resultDiv.innerHTML = `We recommend: <strong>${plantName}</strong> - ${plantDesc}`;
    resultDiv.classList.remove('d-none'); // Make the result visible
}