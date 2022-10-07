const removeSecureCookie = async () => {
  await fetch('/api/remove-auth-cookie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });
};

export default removeSecureCookie;
