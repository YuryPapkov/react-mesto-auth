const BASE_URL = 'https://auth.nomoreparties.co';

const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка  ${res.status}`)
      }
    })

}

export {
  register
}
//
