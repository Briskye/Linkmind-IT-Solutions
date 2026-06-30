document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  showToast('Sending message...', 'sending');
  const formData = {
    name: this.name.value,
    phone: this.phone.value,
    email: this.email.value,
    message: this.message.value
  };
  try {

    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {

      showToast(
        'Message sent successfully!',
        'success'
      );

      contactForm.reset();

      document.getElementById('contactModal')
        .style.display = 'none';

    } else {

      showToast(
        'Failed to send message',
        'error'
      );

    }

  } catch (error) {

    console.error(error);

    showToast(
      'Network error occurred',
      'network'
    );

  }
});