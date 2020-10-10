export async function r(address, body = {}, headers = {}, method = "") {
  if (isEmpty(body)) {
    return await fetch(address)
      .then((res) => {
        if (res.ok) return res.json();
        else return res.status;
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  } else if (!isEmpty(body) && method === "") {
    return await fetch(address, {
      body: body,
      headers: headers,
      method: "POST",
    })
      .then((res) => {
        if (res.ok) return res.json();
        else return res.status;
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  } else {
    return await fetch(address, {
      body: body,
      headers: headers,
      method: method.toUpperCase(),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else return res.status;
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
}
