const toastConfig = {
  sending: {
    title: 'Sending your message...',
    sub: 'Please wait a moment',
    icon: 'ti-send'
  },
  success: {
    title: 'Message sent successfully!',
    sub: "We'll get back to you shortly",
    icon: 'ti-check'
  },
  error: {
    title: 'Failed to send message',
    sub: 'Please try again',
    icon: 'ti-x'
  },
  network: {
    title: 'Network error occurred',
    sub: 'Check your connection and retry',
    icon: 'ti-wifi-off'
  }
};

let toastTimer;

function showToast(message, type) {
  const toast = document.getElementById('toast');
  const iconEl = document.getElementById('toast-icon-i');
  const titleEl = document.getElementById('toast-title');
  const subEl = document.getElementById('toast-sub');

  const cfg = toastConfig[type] || { title: message, sub: '', icon: 'ti-bell' };

  titleEl.textContent = message || cfg.title;
  subEl.textContent = cfg.sub;
  iconEl.className = 'ti ' + cfg.icon;

  toast.className = '';
  toast.classList.add(type);
  toast.classList.add('show');

  clearTimeout(toastTimer);
  if (type !== 'sending') {
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}