let currentUser = localStorage.getItem('mv_user') || null;

// Helper function to fetch all registered users from localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem('mv_registered_users')) || {};
}

// Helper function to save users back to localStorage
function saveUsers(users) {
  localStorage.setItem('mv_registered_users', JSON.stringify(users));
}

function updateAuthUI() {
  const userDisplay = document.getElementById('user-display');
  const authBtn = document.getElementById('auth-btn');

  if (currentUser) {
    if (userDisplay) {
      userDisplay.textContent = `OPERATOR: ${currentUser.toUpperCase()}`;
      userDisplay.classList.remove('hidden');
    }
    if (authBtn) authBtn.textContent = 'LOGOUT';
  } else {
    if (userDisplay) userDisplay.classList.add('hidden');
    if (authBtn) authBtn.textContent = 'SIGN IN / SIGN UP';
  }
}

function showModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('hidden');
}

function hideModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('hidden');
}

function login(username) {
  currentUser = username;
  localStorage.setItem('mv_user', username);
  updateAuthUI();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('mv_user');
  updateAuthUI();
  window.location.href = 'index.html';
}

function requireAuth(e, targetUrl) {
  e.preventDefault();
  if (currentUser) {
    window.location.href = targetUrl;
  } else {
    showModal();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();

  const authBtn = document.getElementById('auth-btn');
  const closeModalBtn = document.getElementById('close-modal');
  const authForm = document.getElementById('auth-form');

  if (authBtn) {
    authBtn.addEventListener('click', () => {
      if (currentUser) logout();
      else showModal();
    });
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('auth-user').value.trim().toLowerCase();
      const pass = document.getElementById('auth-pass').value;

      if (!user || !pass) return;

      const users = getUsers();

      if (users[user]) {
        // User exists: verify password
        if (users[user] === pass) {
          login(user);
          hideModal();
          authForm.reset();
        } else {
          alert('Wrong password! Please try again.');
        }
      } else {
        // New User: register and log in
        users[user] = pass;
        saveUsers(users);
        alert('New account created and logged in!');
        login(user);
        hideModal();
        authForm.reset();
      }
    });
  }

  const protectedLinks = document.querySelectorAll('.protected-link');
  protectedLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      requireAuth(e, href);
    });
  });
});