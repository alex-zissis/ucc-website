
function scrollToDiv(selector) {
    $('html,body').animate({
        scrollTop: $(selector).offset().top,
    }, 'slow');
}

function getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;

    if (typeof w.pageYOffset === 'number') {
        x = w.pageXOffset;
        y = w.pageYOffset;
    } else {
        docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat') ?
            doc.documentElement : doc.body;
        x = docEl.scrollLeft;
        y = docEl.scrollTop;
    }
    return { x: x, y: y };
}

var sidebar = false;

function mainPageClickHandler(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (sidebar && !target.classList.contains('hamburger')) {
        toggleSidebar();
    }
}

function fieldValidation(id) {
    var field = document.getElementById(id);
    if (field.checkValidity()) {
        document.getElementById('ef-err-' + id.split('-')[1]).innerText = '';
    }
}

function hideFlash() {
    document.getElementById('flash-messages').style.display = 'none';
}

function invalidCallback(id) {
    var input = id.split('-')[1];
    var msg = '';
    switch (input) {
        case 'email':
            msg = 'Please enter a valid email';
            break;
        default:
            msg = 'This field is required';
            break;
    }
    var error = document.getElementById('ef-err-' + input);
    error.innerText = msg;
}

function validCallback(id) {
    var error = document.getElementById('ef-err-' + id.split('-')[1]);
    error.innerText = '';
}

function addTouched(id) {
    var elem = document.getElementById(id);
    elem.classList.add('touched');
}

function toggleSidebar() {
    var elem = document.getElementsByClassName('sidebar')[0];
    var parentContainer = document.getElementsByClassName('page-container')[0];

    if (!sidebar) {
        elem.style.display = 'block';
        parentContainer.style.opacity = .5;
        elem.classList.remove('close');
        elem.classList.add('open');
        bodyScrollLock.disableBodyScroll(elem);
    } else {
        parentContainer.style.opacity = 1;
        elem.classList.remove('open');
        elem.classList.add('close');
        elem.style.display = 'none';
        bodyScrollLock.enableBodyScroll(elem);
    }
    sidebar = !sidebar;
}

function scrollFromSidebar(selector) {
    toggleSidebar();
    scrollToDiv(selector);
}

// document.getElementsByClassName('scroll-down')[0].addEventListener('click', function () {
//     scrollToDiv('.content-container');
// }, false);

window.onscroll = function () {
    var offset = getScrollOffsets();
    var navbar = document.getElementsByClassName('navbar')[0];
    var navbarLogo = document.getElementsByClassName('navbar-logo')[0];
    var splash = document.getElementsByClassName('splash')[0];
    var arrow = document.getElementsByClassName('arrow-up')[0];

    if (offset['y'] === 0 && !navbar.classList.contains('untouched')) {
        navbar.classList.remove('touched');
        navbar.classList.add('untouched');
        navbar.classList.add('animate-none');
        navbarLogo.src = '/images/uts_cc_trans.png';
        arrow.style.display = 'none';
    } else if (offset['y'] > 0 && navbar.classList.contains('untouched')) {
        navbar.classList.remove('untouched');
        navbar.classList.remove('animate-none');
        navbar.classList.add('touched');
        navbarLogo.src = '/images/uts_cc_black.png';
        arrow.style.display = 'block';
    }

}

document.getElementsByClassName('inner-sidebar')[0].addEventListener('touchstart', handleTouchStart, { passive: true });
document.getElementsByClassName('inner-sidebar')[0].addEventListener('touchmove', handleTouchMove, { passive: true });

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    var firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
        } else {
            /* right swipe */
            toggleSidebar();
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};