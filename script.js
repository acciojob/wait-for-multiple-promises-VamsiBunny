function createRandomPromise(name) {
  const time = Math.random() * 2 + 1;  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: time.toFixed(3) });
    }, time * 1000);  
  });
}

const promise1 = createRandomPromise('Promise 1');
const promise2 = createRandomPromise('Promise 2');
const promise3 = createRandomPromise('Promise 3');

Promise.all([promise1, promise2, promise3]).then((results) => {
  document.getElementById('loading').style.display="none";
  
  const totalTime = results.reduce((sum, result) => sum + parseFloat(result.time), 0).toFixed(3);

  const output = document.getElementById('output');
  
  results.forEach((result) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
