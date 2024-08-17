import Card from './components/Card';

function App() {

  const imgUrl = [
    [
      {
        id: 1,
        url: 'https://cdn.pixabay.com/photo/2024/08/05/21/19/lion-8947711_1280.jpg',
        name: 'Lion',
        title: 'The lion is the king of the jungle.'
      },
      {
        id: 2,
        url:'https://cdn.pixabay.com/photo/2024/01/15/21/13/puppy-8510899_1280.jpg',
        name:'Dog',
        title:'The Dog is a pet.'
      }
    ],
    [
      {
        id: 3,
        url:'https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_1280.jpg',
        name:'Sparrow Bird',
        title:'The brown color bird is beautiful.'
      },{
        id: 4,
        url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
        name: 'Cat',
        title: 'The cat is a curious and independent pet.'
      }
    ],
    [
      {
        id: 5,
        url: 'https://cdn.pixabay.com/photo/2023/09/14/19/46/elephant-8253639_1280.jpg',
        name: 'Elephant',
        title: 'The elephant is the largest land animal.'
      },
      {
        id: 6,
        url: 'https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_1280.jpg',
        name: 'Tiger',
        title: 'The tiger is a strong and stealthy predator.'
      }
    ],
    [
      {
        id: 7,
        url: 'https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg',
        name: 'Giraffe',
        title: 'The giraffe has a long neck and eats leaves from tall trees.'
      },
      {
        id: 8,
        url: 'https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_1280.jpg',
        name: 'Panda',
        title: 'The panda is known for its love of bamboo and playful nature.'
      }
    ]
  ]


  return (
    <div className='App'>
      <Card obj={imgUrl}/>
    </div> 
  );
}

export default App;
