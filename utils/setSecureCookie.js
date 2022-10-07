const setSecureCookie = (key, value) => {
  fetch('/api/set-secure-cookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key, value })
  });
};

export default setSecureCookie;
