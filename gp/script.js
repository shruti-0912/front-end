document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const occasion = document.getElementById('occasion').value;

    const recommendations = getGiftRecommendations(age, gender, occasion);

    displayRecommendations(recommendations);
});

function getGiftRecommendations(age, gender, occasion) {
    // You can implement your recommendation logic here
    // This is just a placeholder
    const recommendations = [];

    // Example recommendations based on age, gender, and occasion
    if (age < 18) {
        recommendations.push("Toy");
    } else {
        recommendations.push("Gadget");
    }

    if (gender === "male") {
        recommendations.push("Watch");
    } else {
        recommendations.push("Jewelry");
    }

    recommendations.push(`Gift card for ${occasion}`);

    return recommendations;
}

function displayRecommendations(recommendations) {
    const recommendationsElement = document.getElementById('recommendations');
    recommendationsElement.innerHTML = '<h2>Recommendations:</h2>';
    const ul = document.createElement('ul');

    recommendations.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    recommendationsElement.appendChild(ul);
}
