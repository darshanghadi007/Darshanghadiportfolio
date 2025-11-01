/* script.js — simple UI behaviors and contact form demo */
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if(!name || !email || !message){
    status.textContent = 'Please fill out all fields.';
    return false;
  }

  // This demo does not send messages — it prepares a mailto link to open the user's mail client.
  const subject = encodeURIComponent('Portfolio message from ' + name);
  const body = encodeURIComponent(message + "\n\n--\n" + name + "\n" + email);
  const mailto = 'mailto:darshan.ghadi@gmail.com?subject=' + subject + '&body=' + body;
  status.textContent = 'Opening your email client...';
  window.location.href = mailto;

  return false;
}

// Small accessibility improvement: focus first input if user navigates to contact via hash
window.addEventListener('hashchange', ()=> {
  if(location.hash === '#contact'){
    setTimeout(()=> {
      const el = document.getElementById('name');
      if(el) el.focus();
    }, 200);
  }
});
