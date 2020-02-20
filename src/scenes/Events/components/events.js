import hat from '../../../assets/events/cowboy.png';
import broom from '../../../assets/events/broom.png';
import beer from '../../../assets/events/beer.png';
import blood from '../../../assets/events/blood-donation.png'
import water from '../../../assets/events/beer-pong.png';
import camera from '../../../assets/events/camera.png';
import clock from '../../../assets/events/clock.png';
import coin from '../../../assets/events/coin.png';
import corn from '../../../assets/events/corn.png';
import find from '../../../assets/events/find.png';
import game from '../../../assets/events/console.png';
import karaoke from '../../../assets/events/karaoke.svg';
import lasso from '../../../assets/events/lasso.png';
import martini from '../../../assets/events/martini.png';
import pan from '../../../assets/events/pancakes.png';
import pot from '../../../assets/events/potato-1.png'
import q from '../../../assets/events/question.png';
import quiz from '../../../assets/events/quiz.svg';
import ring from '../../../assets/events/rings.png';
import run from '../../../assets/events/run.png';
import sh from '../../../assets/events/sheriff.png';
import shoe from '../../../assets/events/shoe.png';
import target from '../../../assets/events/target.png';
import shirt from '../../../assets/events/tshirt.png';

import goldman from '../../../assets/sponsors/goldman_black.png';
import synchrony from '../../../assets/sponsors/synchrony.png';
import sbb from '../../../assets/sponsors/sbb.png';
import harting from '../../../assets/sponsors/harting_black.png';

const events = [
    {
        name: 'WEEK-LONG',
        blurb: '',
        date: 'Week',
        events:
            [
                {
                    name: 'Captain\'s Meeting',
                    date: 'Monday, Feb 10th & Wednesday, Feb 12th',
                    time: '5 - 6 PM',
                    location: '106B1 Engineering Hall',
                    points: '5 pts',
                    image: hat,
                },
                {
                    name: 'Coin Wars',
                    date: 'Monday, Feb 17th - Friday, Feb 21st',
                    time: '5 PM',
                    location: '103C Engineering Hall',
                    points: 'Tier 1',
                    image: coin,
                },
                {
                    name: 'Photo Scavenger Hunt',
                    date: 'Monday, Feb 17th - Friday, Feb 21st',
                    time: '12 AM',
                    points: 'Tier 1',
                    image: find,
                },
                {
                    name: 'Video Competition',
                    date: 'Monday, Feb 17th - Friday, Feb 21st',
                    time: '5 PM & 12 AM',
                    points: 'Tier 1',
                    image: camera,
                },
                {
                    name: 'Team Name Competition',
                    date: 'Monday, Feb 17th - Friday, Feb 21st',
                    time: '5 PM & 12 AM',
                    points: 'Tier 3',
                    image: camera,
                },
                {
                    name: 'Daily Photo',
                    date: 'Monday, Feb 17th - Friday, Feb 21st',
                    time: '8 AM',
                    location: 'Hints in Captain\'s GroupMe',
                    points: '150 PTS available',
                    image: camera,
                },
                {
                    name: 'Midnight Snack',
                    date: 'Monday, Feb 17th - Friday, Feb 21st',
                    time: '12 AM',
                    location: 'Questions in Captain\'s GroupMe',
                    points: '50 PTS available',
                    image: clock,
                },
            ]
    },
    {
        name: 'CHEAP LUNCH',
        blurb: '',
        date: 'CL',
        events:
            [
                {
                    name: 'Howdy',
                    date: 'Monday, Feb 17th',
                    time: '11 - 1:30 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: '$3 per burger',
                    image: synchrony
                },
                {
                    name: 'Manolo\'s',
                    date: 'Tuesday, Feb 18th',
                    time: '11 - 1:30 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: '$1 per empanada',
                    image: sbb
                },
                {
                    name: 'D.P. Dough',
                    date: 'Wednesday, Feb 19th',
                    time: '11 - 1:30 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: '$2 per 1/2 calzone',
                    image: goldman
                },
                {
                    name: 'Maize',
                    date: 'Thursday, Feb 20th',
                    time: '11 - 1:30 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: '$2 per taco',
                    image: goldman
                },
                {
                    name: 'Rosati\'s',
                    date: 'Friday, Feb 21st',
                    time: '11 - 1:30 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: '$2 per slice',
                    image: harting
                },
            ]
    },
    {
        name: 'FRIDAY, February 14th',
        blurb: '',
        date: '14',
        events:
            [
                {
                    name: 'Blood Drive',
                    time: '12 - 4 PM',
                    location: 'Ballroom B Illini Union',
                    points: '15 PTS per person',
                    host: 'Service Committee',
                    image: blood
                },
            ]
    },
    {
        name: 'SUNDAY, February 16th',
        blurb: '',
        date: '16',
        events:
            [
                {
                    name: 'E-Week Mile',
                    time: '10 - 10:30 AM',
                    location: 'Starts in Main Hallway Engineering Hall',
                    points: 'Tier 2',
                    image: run
                },
                {
                    name: 'Obstacle Course',
                    time: '10:30 - 11:30 AM',
                    location: 'Main Hallway Engineering Hall',
                    points: 'Tier 2',
                    image: shoe
                },
                {
                    name: 'Faculty Brunch',
                    time: '11 - 1 PM',
                    location: '106B6 Engineering Hall',
                    points: 'Participation',
                    host: 'DSAC Committee',
                    image: pan
                },
                {
                    name: 'Broomball',
                    time: '10:30 - 1 AM',
                    location: 'Ice Arena',
                    points: 'Tier 2',
                    host: 'Service Committee',
                    image: broom
                },
            ]
    },
    {
        name: 'MONDAY, February 17th',
        blurb: '',
        date: '17',
        events:
            [
                {
                    name: 'Poop the Potato',
                    time: '5 - 6 PM',
                    location: '106B6 Engineering Hall',
                    points: 'Tier 2',
                    image: pot
                },
                {
                    name: 'Trivia',
                    time: '6 - 7 PM',
                    location: '106B1 Engineering Hall',
                    points: 'Tier 2',
                    image: q
                },
                {
                    name: 'Darts',
                    time: '6 - 7 PM',
                    location: '2101 Everitt',
                    points: 'Tier 2',
                    image: target
                },
                {
                    name: 'Water Pong',
                    time: '7 - 8 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: 'Tier 2',
                    image: water
                },
            ]
    },
    {
        name: 'TUESDAY, February 18th',
        blurb: '',
        date: '18',
        events:
            [
                {
                    name: 'Bags',
                    time: '5 - 6 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: 'Tier 2',
                    image: corn
                },
                {
                    name: 'Karaoke',
                    time: '6:30 - 7:30 PM',
                    location: '3117 Everitt',
                    points: 'Tier 3',
                    image: karaoke
                },
                {
                    name: 'Dizzy Deputy',
                    time: '7:30 - 9 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: 'Tier 2',
                    host: 'A$ME',
                    image: sh
                },
            ]
    },
    {
        name: 'WEDNESDAY, February 19th',
        blurb: '',
        date: '19',
        events:
            [
                {
                    name: 'Clues for BUs',
                    time: '2 - 4 PM',
                    location: '1302 Everitt',
                    points: 'Double Participation',
                    image: goldman
                },
                {
                    name: 'Engineering Relay',
                    time: '5 - 6 PM',
                    location: '2310 Everitt',
                    points: 'Tier 2',
                    image: quiz
                },
                {
                    name: 'GS Tech Talk',
                    time: '6 - 7 PM',
                    location: '2233 Everitt',
                    points: 'Double Participation',
                    image: goldman
                },
                {
                    name: 'Costume Contest',
                    time: '7 - 8 PM',
                    location: '2310 Everitt',
                    points: 'Tier 2',
                    image: shirt
                },
                {
                    name: 'Tour of Establishments',
                    time: '9 - 11 PM',
                    location: '103C Engineering Hall',
                    points: 'Tier 3',
                    image: beer
                },
            ]
    },
    {
        name: 'THURSDAY, February 20th',
        blurb: '',
        date: '20',
        events:
            [
                {
                    name: 'GS Engineering Panel',
                    time: '12 - 1 PM',
                    location: '106B8 Engineering Hall',
                    points: 'Double Participation',
                    image: goldman
                },
                {
                    name: 'Tug of War',
                    time: '5 - 6 PM',
                    location: 'Main Hallway Engineering Hall',
                    points: 'Tier 2',
                    host: 'The Wild SWEst',
                    image: hat
                },
                {
                    name: 'Saloon Showdown',
                    time: '6 - 7 PM',
                    location: '1306 Everitt',
                    points: 'Tier 3',
                    image: hat
                },
                {
                    name: 'Oregon Trail',
                    time: '6 - 7 PM',
                    location: '106B1 Engineering Hall',
                    points: 'Tier 2',
                    image: game
                },
                {
                    name: 'Longhorn Lassos',
                    time: '7 - 8 PM',
                    location: '2233 Everitt',
                    points: 'Tier 3',
                    image: lasso
                },
                {
                    name: 'Amazing Race',
                    time: '8 - 10 PM',
                    location: '2233 Everitt',
                    points: '2x Participation PTS',
                    host: 'JQ\'s Pardners & Ropes of Friendship',
                    image: shoe
                },
            ]
    },
    {
        name: 'FRIDAY, February 21st',
        blurb: '',
        date: '21',
        events:
            [
                {
                    name: 'Order of the Engineer',
                    time: '5:30 - 7 PM',
                    location: '1122 NCSA',
                    points: '',
                    image: ring
                },
            ]
    },
    {
        name: 'SATURDAY, February 22nd',
        blurb: '',
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
                    time: '5 - 9 PM',
                    location: 'The HUB',
                    points: '',
                    image: martini
                },
            ]
    }
];

export default events;
