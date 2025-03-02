// Toggle dropdown menu
function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Copy Code Function
document.getElementById('copy-btn').addEventListener('click', function() {
    var codeText = document.querySelector('#code-layer code').innerText;
    navigator.clipboard.writeText(codeText).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy code: ' + err);
    });
});

// Enable Premium Mode
function enablePremium() {
    document.body.classList.add('premium-mode');
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('premium-content').classList.remove('hidden');
}

// Scroll Animation
window.addEventListener('scroll', function() {
    var codeLayer = document.getElementById('code-layer');
    var rect = codeLayer.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        codeLayer.classList.add('visible');
    }

    var imageSection = document.getElementById('image-section');
    var imageRect = imageSection.getBoundingClientRect();
    if (imageRect.top < window.innerHeight) {
        imageSection.classList.add('visible');
    }

    var featuresSection = document.getElementById('features-section');
    var featuresRect = featuresSection.getBoundingClientRect();
    if (featuresRect.top < window.innerHeight) {
        featuresSection.classList.add('visible');
    }
});
