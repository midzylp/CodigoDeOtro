/* El codigo está realizando una solicitud a un link para recibir datos de usuarios, se intenta realizar
con un fetch, a su vez está utilizando async y await para  */
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
/* Modifique a su vez el documento HTML para que conteniera los elementos que busca el QuerySelector, ya que el de location ni siquiera estaba presente, ademas coloque el punto para las clases y el #para el id */


/* Coloqué una expresión async en la función ya que el await solo puede funcionar si anteriormente se utliza async */
async function  displayUser (usersEndpoint) { 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${usersEndPoint.username}`);
  console.log(response.data);
 
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);