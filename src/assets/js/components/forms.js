const forms = () => {

  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      var formData = new FormData(item);

      formData.append('sender', 'bence')

      postData('send.php', formData)
        .then(res => {
          showThanks();
        })
        .catch(error => {
          alert(error);
        })
        .finally(() => {
          clearInputs();
        })
    });
  });
}
