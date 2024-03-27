let lastScrollTop = 0;
const stickBar = document.getElementById('stickBar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        stickBar.style.top = '-100px'; // Adjust as needed
    } else {
        // Scrolling up
        stickBar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


 //slider & indicator
let currentIndex = 0;
let startX = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slider = document.querySelector('.slider');
const indicatorContainer = document.querySelector('.slide-indicator');
const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults');

function navigateToPage(pageURL) {
    // Add logic to navigate to the clicked page (e.g., window.location.href = pageURL;)
    console.log('Navigating to: ' + pageURL);
}

function showSlide(index) {
    const moveAmount = -index * 100 + '%';
    slider.style.transform = 'translateX(' + moveAmount + ')';
}

function updateIndicator() {
    const dots = indicatorContainer.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    updateIndicator();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    updateIndicator();
}

function manualSlide(direction) {
    if (direction === 'next') {
        nextSlide();
    } else {
        prevSlide();
    }
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const diffX = event.touches[0].clientX - startX;
    if (diffX > 50) {
        prevSlide();
    } else if (diffX < -50) {
        nextSlide();
    }
}

function handleTouchEnd() {
    startX = 0;
}

// Set up automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Create indicator dots based on the number of slides
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('indicator-dot');
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
        updateIndicator();
    });
    indicatorContainer.appendChild(dot);
}

// Highlight the first indicator dot initially
updateIndicator();

// Add touch event listeners for swipe functionality
slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);
//for opening product links
document.querySelectorAll('.product').forEach(product => {
	product.addEventListener('click', () => {
		const link = product.getAttribute('data-link');
		if (link) {
			window.location.href = link;
		}
	});
});


window.addEventListener('scroll', function() {
	var scrollToTopBtn = document.getElementById('scrollToTopBtn');
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = 'block';
	} else {
		scrollToTopBtn.style.display = 'none';
	}
});

function scrollToTop() {
	document.body.scrollTop = 0; /* For Safari */
	document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE, and Opera */


}


const menuIcon = document.getElementById('menuIcon');
const mainMenu = document.getElementById('mainMenu');
const menuItems = document.querySelectorAll('.main-menu a');

menuIcon.addEventListener('click', toggleMainMenu);

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        closeMainMenu();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function toggleMainMenu() {
    mainMenu.style.left = (mainMenu.style.left === '0px') ? '-300px' : '0px';
}

function closeMainMenu() {
    mainMenu.style.left = '-300px';
}



function submitCollabForm() {
    var name = document.getElementById("collabName").value;
    var contactInfo = document.getElementById("collabContact").value;
    var projectIdeas = document.getElementById("collabIdeas").value;

    // Check if all fields are filled
    if (name && contactInfo && projectIdeas) {
        // Send data to Telegram Bot API using AJAX
        var message = "Name: " + name + "%0AContact Info: " + contactInfo + "%0AProject Ideas: " + projectIdeas;
        var telegramBotURL = "https://api.telegram.org/bot7009375703:AAF1VbCtq8tyDfMffyfc7cITr1VODMdj9eM/sendMessage?chat_id=-1001995038096&text=" + message;

        var xhr = new XMLHttpRequest();
        xhr.open("GET", telegramBotURL, true);
        xhr.send();

        // Reset form after submission
        resetCollabForm();

        // Show custom success message
        showPopup("Form submitted successfully!");
    } else {
        // Show custom error message
        showPopup("Please fill in all fields.");
    }
}

function resetCollabForm() {
    document.getElementById("collabName").value = "";
    document.getElementById("collabContact").value = "";
    document.getElementById("collabIdeas").value = "";
}

function showPopup(message) {
    var popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.innerHTML = message;

    document.body.appendChild(popup);

    setTimeout(function() {
        popup.remove();
    }, 3000); // Remove popup after 3 seconds
}
    // Function to show the loading animation

// Function to show the loading animation
function showLoadingAnimation() {
  document.querySelector('.loader-container').style.visibility = 'visible';
}

// Function to hide the loading animation
function hideLoadingAnimation() {
  document.querySelector('.loader-container').style.visibility = 'hidden';
}

// Event listener for when the window finishes loading
window.addEventListener('load', function() {
  // Hide the loading animation when the content is fully loaded
  hideLoadingAnimation();
});

// Simulate loading content (remove this in your actual implementation)
// Replace this with your actual loading logic
setTimeout(function() {
  // This is just a simulated delay to mimic loading
  // Once your actual content is loaded, call hideLoadingAnimation() to hide the loading animation
  hideLoadingAnimation();
}, 30000000); // Change 3000 to your actual loading time in milliseconds
    // Function to show the popup
    // Function to close the WhatsApp popup
// Function to show the Telegram channel popup
function showTelegramPopup() {
    var overlay = document.getElementById('telegramOverlay');
    overlay.style.display = 'flex';
}

// Function to close the Telegram channel popup
function closeTelegramPopup() {
    var overlay = document.getElementById('telegramOverlay');
    overlay.style.display = 'none';
}

// Function to handle visiting the Telegram channel page
function visitedTelegramPage() {
    closeTelegramPopup();
    localStorage.setItem('telegramPopupClosed', 'true'); // Use localStorage to remember the user's choice
}

// Check if the Telegram channel popup should be shown (e.g., not visited before)
window.onload = function () {
    var hasClosedTelegramPopup = localStorage.getItem('telegramPopupClosed');
    if (hasClosedTelegramPopup !== 'true') {
        showTelegramPopup();
    }
};
// Check if the Telegram channel popup should be shown after a delay
window.onload = function () {
    setTimeout(function() {
        var hasClosedTelegramPopup = localStorage.getItem('telegramPopupClosed');
        if (hasClosedTelegramPopup !== 'true') {
            showTelegramPopup();
        }
    }, 10000); // Adjust the delay time in milliseconds (e.g., 5000 milliseconds = 5 seconds)
};
