// fetch('https://pokeapi.co/api/v2/pokemon/151/')
// .then(response =>
// {
//   return response.json();
// })
//
// .then(json =>
// {
//   console.log(json);
//    const src = json.sprites.front_default
//
//   const spriteImage = document.createElement('img')
//
//   spriteImage.src = src
//   // console.log(spriteImage);
//
//   const videosEl = document.querySelector('.videos')
//   videosEl.appendChild(spriteImage)
//
//   const stats = json.stats
//
//   console.log(stats);
//   var statsList = new Array();
//
//   stats.forEach((json) => {
//     const sName = json.stat.name
//     const sValue = json.base_stat
//
//     statsList.push(sValue);
//
//
//     // console.log(sValue);
//
//     const statNameTag = document.createElement('h1')
//     const statEachName = document.createTextNode(sName)
//     videosEl.appendChild(statNameTag)
//     statNameTag.appendChild(statEachName)
//
//     console.log(statEachName);
// });
//
//
//
//   var ctx = document.getElementById("myChart").getContext('2d');
//   var myChart = new Chart(ctx, {
//       type: 'radar',
//       data: {
//           labels: ["Speed", "Special-Defense", "Special-Attack", "Defense", "Attack", "HP"],
//           datasets: [{
//               label: 'stats',
//               data: statsList,
//               backgroundColor: [
//                   'rgba(255, 255, 255, .7)'
//               ],
//               borderColor: [
//                   '#ffFFff'
//               ],
//               borderWidth: 2,
//               pointBackgroundColor: ['yello', 'darkblue', 'darkred', 'blue', 'red', 'green']
//           }]
//       },
//       options: {
//         scale: {
//           gridLines: {
//             color: "#ffffff"
//           },
//           angleLines: {
//             color: "#ffffff"
//           }
//         }
//       }
//   });
//
//
// })
// .catch(error => {
//   console.log('there was a error!');
// });


console.log(data);

  //first grabbing name and number of pokemon.
  const pokeName = data.name;
  const pokeNumber = data.order;


  // Grabbing sprite images for front and back then adding HTML and inserting into IMG tag.
  const srcFront = data.sprites.front_default
  const spriteFront = document.createElement('img')

  // set source for front img tag
  spriteFront.src = srcFront

  const srcBack = data.sprites.back_default
  const spriteBack = document.createElement('img')

  // set source for back img tag
  spriteBack.src = srcBack

  //select items on page and append sprite images to these divs
  const frontEl = document.querySelector('#front')
  const backEl = document.querySelector('#back')

  frontEl.appendChild(spriteFront)
  backEl.appendChild(spriteBack)

  const stats = data.stats

// creating array for graph data
  var statsList = new Array();

// looping through data to grab values of stats for pokemon
  stats.forEach((data) => {
    const sValue = data.base_stat

// adding value to previously created array
    statsList.push(sValue);


    // console.log(sValue);

    // const statNameTag = document.createElement('h1')
    // const statEachName = document.createTextNode(sName)
    // videosEl.appendChild(statNameTag)
    // statNameTag.appendChild(statEachName)

    // console.log(statEachName);
});

Chart.defaults.global.responsive = true;


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
      data: {
          labels: ["Speed", "Special-Defense", "Special-Attack", "Defense", "Attack", "HP"],
          datasets: [{
              label: 'stats',
              data: statsList,
              backgroundColor: [
                  'rgba(255, 255, 255, .7)'
              ],
              borderColor: [
                  '#ffFFff'
              ],
              borderWidth: 2,
              pointBackgroundColor: ['yello', 'darkblue', 'darkred', 'blue', 'red', 'green']
          }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          gridLines: {
            color: "#ffffff"
          },
          angleLines: {
            color: "#ffffff"
          }
        }
      }
  });
