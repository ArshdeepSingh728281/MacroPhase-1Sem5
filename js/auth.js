let currentUser = localStorage.getItem('mv_user') || null;

function getUsers() {
  return JSON.parse(localStorage.getItem('mv_registered_users')) || {};
}

function saveUsers(users) {
  localStorage.setItem('mv_registered_users', JSON.stringify(users));
}

function getUserProfile(username) {
  const profiles = JSON.parse(localStorage.getItem('mv_user_profiles')) || {};
  return profiles[username] || null;
}

function updateAuthUI() {
  const userDisplay = document.getElementById('user-display');
  const authBtn = document.getElementById('auth-btn');

  if (currentUser) {
    if (userDisplay) {
      userDisplay.textContent = `USER: ${currentUser.toUpperCase()}`;
      userDisplay.classList.remove('hidden');
      userDisplay.style.cursor = 'pointer';
      userDisplay.title = 'Edit Questionnaire Profile';
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

  // Redirect to Questionnaire page if profile incomplete
  const profile = getUserProfile(username);
  if (!profile || !profile.onboarding_completed) {
    window.location.href = 'questionnaire.html';
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('mv_user');
  updateAuthUI();
  window.location.href = 'index.html';
}

function requireAuth(e, targetUrl) {
  e.preventDefault();
  if (!currentUser) {
    showModal();
    return;
  }

  // Check if questionnaire completed before entering protected pages
  const profile = getUserProfile(currentUser);
  if (!profile || !profile.onboarding_completed) {
    alert('Please complete the setup questionnaire first!');
    window.location.href = 'questionnaire.html';
  } else {
    window.location.href = targetUrl;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();

  const authBtn = document.getElementById('auth-btn');
  const userDisplay = document.getElementById('user-display');
  const closeModalBtn = document.getElementById('close-modal');
  const authForm = document.getElementById('auth-form');

  if (authBtn) {
    authBtn.addEventListener('click', () => {
      if (currentUser) logout();
      else showModal();
    });
  }

  if (userDisplay) {
    userDisplay.addEventListener('click', () => {
      if (currentUser) {
        // window.location.href = 'questionnaire.html';
      }
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
        if (users[user] === pass) {
          login(user);
          hideModal();
          authForm.reset();
        } else {
          alert('Wrong password! Please try again.');
        }
      } else {
        users[user] = pass;
        saveUsers(users);
        alert('New account created!');
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