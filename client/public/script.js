// function fetchData() {
//     fetch('http://127.0.0.1:5500/api/data')
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById('dataFromServer').innerText = `Data from server: ${data.message}`;
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }

async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/api/v1', {
        headers: {
          accept: 'application/json',
          'User-agent': 'learning app',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      document.getElementById('dataFromServer').innerText = `Data from server: ${data.message}`;
    } catch (error) {
      document.getElementById('dataFromServer').innerText = `Error: ${error.message}`;
    }
  }
  
 

  
  