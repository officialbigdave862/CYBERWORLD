const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}
document.querySelectorAll('[data-toast]').forEach(el => el.addEventListener('click', event => {
  event.preventDefault(); showToast(el.dataset.toast);
}));
const loginForm = document.getElementById('login-form');
if (loginForm) loginForm.addEventListener('submit', event => {
  event.preventDefault();
  showToast('Login is a demo right now. Connect a secure authentication backend before using real accounts.');
});
const signupForm = document.getElementById('signup-form');
if (signupForm) signupForm.addEventListener('submit', event => {
  event.preventDefault();
  showToast('Sign-up form checked! Account creation will work after a secure backend is connected.');
});
document.getElementById('forgot-link')?.addEventListener('click', event => {
  event.preventDefault(); showToast('Password recovery will be available after authentication is configured.');
});
document.getElementById('github-demo')?.addEventListener('click', event => {
  event.preventDefault(); showToast('GitHub sign-in needs OAuth app credentials and a backend callback. This button is a placeholder.');
});
document.querySelectorAll('[data-like]').forEach(button => button.addEventListener('click', () => {
  const count = button.querySelector('span');
  const liked = button.classList.toggle('liked');
  count.textContent = String(Number(count.textContent) + (liked ? 1 : -1));
  button.firstChild.textContent = liked ? '♥ ' : '♡ ';
}));
const postForm = document.getElementById('post-form');
if (postForm) postForm.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('post-text');
  const value = input.value.trim();
  if (!value) return;
  const article = document.createElement('article');
  article.className = 'post-card';
  const head = document.createElement('div'); head.className = 'post-head';
  const avatar = document.createElement('div'); avatar.className = 'avatar avatar-blue'; avatar.textContent = 'YOU';
  const info = document.createElement('div'); const name = document.createElement('b'); name.textContent = 'You';
  const time = document.createElement('small'); time.textContent = 'Just now';
  info.append(name, time); head.append(avatar, info);
  const paragraph = document.createElement('p'); paragraph.textContent = value;
  const actions = document.createElement('div'); actions.className = 'post-actions';
  const like = document.createElement('button'); like.dataset.like = ''; like.innerHTML = '♡ <span>0</span> Likes';
  like.addEventListener('click', () => { const span = like.querySelector('span'); const liked = like.classList.toggle('liked'); span.textContent = String(Number(span.textContent) + (liked ? 1 : -1)); like.firstChild.textContent = liked ? '♥ ' : '♡ '; });
  actions.append(like);
  article.append(head, paragraph, actions);
  document.getElementById('post-list').prepend(article);
  input.value = '';
  showToast('Demo post added to this page. It will not be saved after refresh until a backend is connected.');
});
