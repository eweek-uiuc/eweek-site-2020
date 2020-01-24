import hat from '../../assets/events/cowboy.png';
import broom from '../../assets/events/broom.png';
import beer from '../../assets/events/beer.png';
import water from '../../assets/events/beer-pong.png';
import camera from '../../assets/events/camera.png';
import clock from '../../assets/events/clock.png';
import coin from '../../assets/events/coin.png';
import corn from '../../assets/events/corn.png';
import dish from '../../assets/events/dish.png';
import find from '../../assets/events/find.png';
import game from '../../assets/events/console.png';
import karaoke from '../../assets/events/karaoke.svg';
import lasso from '../../assets/events/lasso.png';
import martini from '../../assets/events/martini.png';
import micro from '../../assets/events/microphone.svg';
import pan from '../../assets/events/pancakes.png';
import pot from '../../assets/events/potato-1.png'
import q from '../../assets/events/question.png';
import quiz from '../../assets/events/quiz.svg';
import ring from '../../assets/events/rings.png';
import run from '../../assets/events/run.png';
import sh from '../../assets/events/sheriff.png';
import shoe from '../../assets/events/shoe.png';
import target from '../../assets/events/target.png';
import shirt from '../../assets/events/tshirt.png';

const events = [
    {
        name: 'Week-long',
        date: 'Week',
        events:
            [
                {
                    name: 'Captain\'s Meeting',
                    time: 'Monday, Feb 10th or Wednesday, Feb 12th 5 - 6 PM',
                    location: 'TBD',
                    points: '5 pts',
                    image: hat,
                },
                {
                    name: 'Coin Wars',
                    time: 'Mon - Fri 5 PM',
                    location: '103C Engineering Hall',
                    points: 'Tier 1',
                    image: coin,
                },
                {
                    name: 'Photo Scavenger Hunt',
                    time: 'Mon - Fri 5 PM',
                    points: 'Tier 1',
                    image: find,
                },
                {
                    name: 'Video Competition',
                    time: 'Tuesday, Feb 18th 5 PM',
                    points: 'Tier 1',
                    image: camera,
                },
                {
                    name: 'Daily Photo',
                    time: 'Released Mon - Fri 8 AM',
                    location: 'Campus',
                    points: '150 pts available',
                    image: camera,
                },
                {
                    name: 'Midnight Snack',
                    time: 'Released Mon - Fri 12 AM',
                    location: 'Captain\'s GroupMe',
                    points: '50 pts available',
                    image: clock,
                },
            ]
    },
    {
        name: 'Cheap Lunch',
        date: 'CL',
        events:
            [
                {
                    name: 'Howdys',
                    time: 'Monday Feb 17th 11 - 1:30 PM',
                    location: 'Engineering Hall',
                    image: dish
                },
                {
                    name: 'Manolo\'s',
                    time: 'Tuesday Feb 18th 11 - 1:30 PM',
                    location: 'Engineering Hall',
                    image: dish
                },
                {
                    name: 'D.P. Dough',
                    time: 'Wednesday Feb 19th 11 - 1:30 PM',
                    location: 'Engineering Hall',
                    image: dish
                },
                {
                    name: 'Maize',
                    time: 'Thursday Feb 20th 11 - 1:30 PM',
                    location: 'Engineering Hall',
                    image: dish
                },
                {
                    name: 'Rosati\'s',
                    time: 'Friday Feb 21th 11 - 1:30 PM',
                    location: 'Engineering Hall',
                    image: dish
                },
            ]
    },
    {
        name: 'Sunday, February 16th',
        date: '16',
        events:
            [
                {
                    name: 'E-Week Mile',
                    time: '10 - 10:30 AM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: run
                },
                {
                    name: 'Obstacle Course',
                    time: '10:30 - 11:30 AM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: shoe
                },
                {
                    name: 'Faculty Brunch',
                    time: '11 - 1 PM',
                    location: 'Engineering Hall',
                    points: 'Participation',
                    image: pan
                },
            ]
    },
    {
        name: 'Monday, February 17th',
        date: '17',
        events:
            [
                {
                    name: 'Poop the Potato',
                    time: '5 - 6 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: pot
                },
                {
                    name: 'Trivia',
                    time: '6 - 7 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: q
                },
                {
                    name: 'Darts',
                    time: '6 - 7 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: target
                },
                {
                    name: 'Water Pong',
                    time: '7 - 8 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: water
                },
            ]
    },
    {
        name: 'Tuesday, February 18th',
        date: '18',
        events:
            [
                {
                    name: 'Bags',
                    time: '5 - 6 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: corn
                },
                {
                    name: 'Karaoke',
                    time: '6:30 - 7:30 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 3',
                    image: karaoke
                },
                {
                    name: 'Dizzy Deputy',
                    time: '7:30 - 9 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: sh
                },
            ]
    },
    {
        name: 'Wednesday, February 19th',
        date: '19',
        events:
            [
                {
                    name: 'Blood Drive',
                    time: 'TBD',
                    location: 'TBD',
                    image: quiz
                },
                {
                    name: 'Engineering Relay',
                    time: '5 - 6 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',

                    image: quiz
                },
                {
                    name: 'Costume Contest',
                    time: '6:30 - 8 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: shirt
                },
                {
                    name: 'Corporate Event',
                    time: '7 - 8 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 1',
                    image: micro
                },
                {
                    name: 'Tour of Establishments',
                    time: '9 PM',
                    location: '103C Engineering Hall',
                    points: 'Tier 3',
                    image: beer
                },
            ]
    },
    {
        name: 'Thursday, February 20th',
        date: '20',
        events:
            [
                {
                    name: 'Tug of War',
                    time: '5 - 6 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: hat
                },
                {
                    name: 'Saloon Showdown',
                    time: '6 - 7 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 3',
                    image: hat
                },
                {
                    name: 'Longhorn Lassos',
                    time: '7 - 8 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 3',
                    image: lasso
                },
                {
                    name: 'Oregon Trail',
                    time: '6 - 7 PM',
                    location: 'Engineering Hall',
                    points: 'Tier 2',
                    image: game
                },
                {
                    name: 'Amazing Race',
                    time: '8 PM',
                    location: 'Engineering Hall',
                    points: 'Double Participation',
                    image: shoe
                },
            ]
    },
    {
        name: 'Friday, February 21st',
        date: '21',
        events:
            [
                {
                    name: 'Order of Engineer',
                    time: '5:30 - 7 PM',
                    location: '1122 NCSA',
                    image: ring
                },
                {
                    name: 'Broomball',
                    time: '10:30 - 12 PM',
                    location: 'Ice Arena',
                    points: 'Tier 2',
                    image: broom
                },
            ]
    },
    {
        name: 'Saturday, February 22nd',
        date: '22',
        events:
            [
                {
                    name: 'Dodgeball',
                    time: '10 - 12 AM',
                    location: 'ARC Raquetball Courts',
                    points: 'Tier 2',
                    image: hat
                },
                {
                    name: 'Semi Formal',
                    time: '5 - 8 PM',
                    location: 'The HUB',
                    image: martini
                },
            ]
    }
];

export default events;
