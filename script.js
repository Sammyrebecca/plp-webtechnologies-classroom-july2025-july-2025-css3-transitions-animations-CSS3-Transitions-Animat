// script.js

// Part 2: JavaScript Functions

// Function with parameters and return value
function addNumbers(a, b) {
    return a + b;
}

// Function demonstrating local vs global scope
function calculateCircleArea(radius) {
    // PI is a local variable - only accessible within this function
    const PI = 3.14159;
    return PI * radius * radius;
}

// Global variable
let calculationCount = 0;

function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Using the addNumbers function
    const sum = addNumbers(num1, num2);
    
    // Update global variable
    calculationCount++;
    
    document.getElementById('sumResult').textContent = 
        `The sum is: ${sum}. Calculations performed: ${calculationCount}`;
}

function calculateArea() {
    const radius = parseFloat(document.getElementById('radius').value) || 0;
    
    // Using the calculateCircleArea function
    const area = calculateCircleArea(radius);
    
    document.getElementById('areaResult').textContent = 
        `The area of a circle with radius ${radius} is: ${area.toFixed(2)}`;
}

// Reusable function to trigger loader animation
function startLoader(duration) {
    const loader = document.getElementById('loader');
    
    // Show and animate the loader
    loader.classList.add('active');
    
    // Hide the loader after the specified duration
    setTimeout(function() {
        loader.classList.remove('active');
    }, duration);
}

// Part 3: Combining CSS Animations with JavaScript

// Card flip function
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Modal functions
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Close modal if clicked outside content
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});