fetch("./product.json")
  .then((product) => {
    return product.json();
  })
  .then((response) => {
    let alldata = document.querySelector("#data-result");
    let result = " ";
    for (let data of response) {
      result += `
        <tr>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td>${data.inventory}</td>
        <td>${data.productCode}</td>
        </tr>
        `;
    }
    alldata.innerHTML = result;
  });
