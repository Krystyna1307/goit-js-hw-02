function checkForSpam(message) {

    let lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('spam') || lowerMessage.includes('sale')) {
        return true; 
    } else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true