// script.js
document.getElementById('textInput').addEventListener('input', updateCounts);

function updateCounts() {
    const text = document.getElementById('textInput').value;

    // Count words
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Count characters
    const charCount = text.length;

    // Count paragraphs
    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
    const paraCount = paragraphs.length;

    // Count numbers
    const numberCount = (text.match(/\d/g) || []).length;

    // Count special characters
    const specialCharCount = (text.match(/[^\w\s]/g) || []).length;

    // Update counts in the DOM
    document.getElementById('wordCount').innerText = wordCount;
    document.getElementById('charCount').innerText = charCount;
    document.getElementById('paraCount').innerText = paraCount;
    document.getElementById('numberCount').innerText = numberCount;
    document.getElementById('specialCharCount').innerText = specialCharCount;
}
