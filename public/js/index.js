btn.onclick = async (e) => {
  if (!email.value || !password.value)
    return;
  let res = await fetch("http://localhost:7000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });
  res = await res.json();
  window.localStorage.setItem("token", res.data);
  if ([200, 201, 202, 203].includes(res.status)) {
    window.location = "/users";
  }
};
