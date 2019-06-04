 

function performGetRequest1(){
    var resultElement = document.getElementById('getResult1');
  
    axios.get('http://localhost:3000/api/train')
  
      .then(function (response) {
        
        for (var i =0; i<response.data.recordsets[0].length; i++  ){
          var tr = `<tr>`;
          tr += `<td> ${response.data.recordsets[0][i].TrainID} <td> ${response.data.recordsets[0][i].Alex} <td> ${response.data.recordsets[0][i].Tanta} <td> ${response.data.recordsets[0][i].Benha} <td> ${response.data.recordsets[0][i].cairo} <td>  ` 
          resultElement.innerHTML += tr
        }
            
        //console.log(response.data.recordsets[0][0].AdminPassword);
        console.log(response.data.recordsets);
  
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });
  }