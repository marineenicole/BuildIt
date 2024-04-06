// rotate words
document.addEventListener('DOMContentLoaded', function() {
    const rotatingText = document.getElementById('rotating');
    const specialties = [
        'Crafting Cityscapes', 'Fostering Community Pride',
        'Enhancing Urban Spaces','Building Dreams', 
        'Transforming Communities', 'Eco-Friendly Solutions',
        'Custom Builds', 'Innovative Construction', 'Building Dreams'
    ];
    let index = 0;

    function rotateSpecialties() {
        rotatingText.textContent = specialties[index];
        rotatingText.classList.remove('rotating'); // Removes class to reset animation
        void rotatingText.offsetWidth; // Triggers reflow to restart animation
        rotatingText.classList.add('rotating'); // Adds class back
        index = (index + 1) % specialties.length;
    }

    setInterval(rotateSpecialties, 3500); // Rotate every 3 seconds
});