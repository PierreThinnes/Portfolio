function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// modal


var modals = document.querySelectorAll('.modal');

// Get all the buttons that open the modals
var btns = document.querySelectorAll('[data-modal-btn]');

// Get all the <span> elements that close the modals
var spans = document.querySelectorAll('.close');

// When the user clicks on a button, open the corresponding modal
btns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = this.getAttribute('data-modal-btn');
        document.getElementById(modalId).style.display = "block";
    }
});

// When the user clicks on <span> (x), close the modal
spans.forEach(function(span) {
    span.onclick = function() {
        var modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}