import quizApp from './images/quizApp.png';
import starWars from './images/starWars.png';
import petful from './images/petful.png';
import spacedRep from './images/spacedRep.png';
import battleship from './images/battleship.png'
import memory from './images/memory.png'

const info = [

   {
        title: 'Battleship',
        imageURL: battleship,
        imageAlt: 'Battleship',
        description:'Recreation of the iconic two-player boardgame, with live-chat, the ability to resume games, and game-history.',
        techList:'ReactJS, HTML, CSS, JavaScript, NodeJS, ExpressJS, Socket.IO, PostgreSQL',
        linkLive:'https://sean-battleship-app.now.sh/',
        linkRepo1:'https://github.com/seank329/Battleship-Client.git', 
        linkRepo2:'https://github.com/seank329/Battleship-Server.git'
   },
   {
        title: 'Memory Challenge',
        imageURL: memory,
        imageAlt: 'Memory Challenge',
        description:'Find matching pairs of cards on a randomly sorted gameboard. Multiple difficulty levels, login to save progress',
        techList:'ReactJS, HTML, CSS, JavaScript, NodeJS, ExpressJS, jwt.io (with token expiry), PostgreSQL',
        linkLive:'https://memory-app-sigma.now.sh/',
        linkRepo1:'https://github.com/seank329/Capstone1-UI.git', 
        linkRepo2: 'https://github.com/seank329/Capstone1-Server.git'
   },
   {
       title: 'Petful',
       imageURL: petful,
       imageAlt: 'Petful',
       description: `A mock website for an animal shelter allowing users to adopt animals. Queues mimic adoption process with it's "FIFO" business model.`,
       techList:'ReactJS, HTML, CSS, JavaScript, NodeJS, ExpressJS',
       linkLive: 'https://petful-client-sean-andrea.andreabender.now.sh/',
       linkRepo1: 'https://github.com/seank329/Petful-Client.git',
       linkRepo2: 'https://github.com/seank329/Petful-Server.git' 
   },
   {
       title: 'German Language with Spaced Repetition',
       imageURL: spacedRep,
       imageAlt: 'Spaced Repetition',
       description: `Full-stack implementation of the spaced-repetition language learning technique mimicking flashcards. Utilizes linked-list data type.`,
       techList: 'ReactJS, CSS, JavaScript, NodeJS, ExpressJS, PostgreSQL',
       linkLive: 'https://spaced-repetition-client.rbannal.now.sh/register',
       linkRepo1: 'https://github.com/seank329/SpacedRepetition-Client.git', 
       linkRepo2: 'https://github.com/seank329/SpacedRepetition-Server.git'

   },
   {
        title: 'Star Wars API Search',
        imageURL: starWars,
        imageAlt: 'Star Wars',
        description: `A front-end allowing users to search the Star Wars API (SWAPI)`,
        techList: 'HTML, CSS, JavaScript, ReactJS',
        linkLive: 'https://sean-star-wars-api.now.sh/',
        linkRepo1:'https://github.com/seank329/StarWars-Api.git'
   },
   {
        title: 'Quiz App',
        imageURL: quizApp,
        imageAlt:'Quiz App',
        description: `An application designed to test the user's knowledge of country capitals`,
        techList: 'HTML, CSS, JavaScript, jQuery',
        linkLive: 'https://seank329.github.io/',
        linkRepo1: 'https://github.com/seank329/QuizApp.git'
   }


]

export default info;