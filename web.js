// Copy Button for Code
document.getElementById('copy-btn').addEventListener('click', function() {
    var codeText = document.querySelector('#code-layer code').innerText;
    navigator.clipboard.writeText(codeText).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy code: ' + err);
    });
});

// Scroll Animations
window.addEventListener('scroll', function() {
    var sections = ['code-layer', 'image-section', 'features-section'];
    sections.forEach(function(id) {
        var section = document.getElementById(id);
        var rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// 3-Dot Menu Click
document.getElementById('menu-icon').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Premium Mode Activation
document.getElementById('premium-btn').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
    
    var premiumSections = ['premium-info', 'premium-features', 'premium-cost'];
    premiumSections.forEach(function(id) {
        var section = document.getElementById(id);
        section.classList.remove('hidden');
        setTimeout(() => section.classList.add('visible'), 100);
    });

    // Hide dropdown after selection
    document.getElementById('dropdown-menu').style.display = 'none';
});
