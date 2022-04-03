//import React from 'react';
import shamrock from '../images/false_shamrock.png';
import aloevera from '../images/aloevera.png';
import aglaonema from '../images/aglaonema.png';
import snake from '../images/snake.png';
import monstera from '../images/monstera.png';
import moon_cactus from '../images/moon_cactus.png';
import nasturtium from '../images/nasturtium.png';
import philodendron from '../images/philodendron.png';
import calathea from '../images/calathea.png';

const plantList = [
  {
    _id: '1',
    name: 'Moon cactus',
    fact: 'The little moon cactus is a funny plant because it is actually two plants in one and the product of human design. In order for the bright section of the plant, to survive, it had to be grafted to the second plant beneath. Many people do not realize that they are actually looking at two separate plants.',
    water:
      'The water requirements for moon cactus are minimal, it is recommended to stop the watering completely for the older moon cactus during the winter season, that would be those that are a year old or more.',
    spot: 'They do the best in bright but indirect sunlight',
    info: 'Growing and taking care of these unique little cacti plants is not very difficult at all. They are extremely low maintenance.',
    isBooked: false,
    img: <img src={moon_cactus} alt="" width="100px" />,
  },
  {
    _id: '2',
    name: 'Aloe Vera',
    fact: 'You can eat it or use it for skin care!',
    water:
      'Plan to water your aloe vera about every 2 weeks in the spring and summer and even more sparingly during the fall and winter.',
    spot: 'The plant can be positioned in full or indirect sunlight.',
    info: 'Such a Hipster plant',
    isBooked: false,
    img: <img src={aloevera} alt="" width="100px" />,
  },
  {
    _id: '3',
    name: 'Black Gold Philodendron melanochrysum ',
    fact: 'This plant purifies the air.',
    water:
      ' Water freely when in full growth and add a monthly liquid feed; water sparingly in winter.',
    spot: 'Bright location with indirect sunlight.',
    info: ' Grow it up a moss pole and spray regularly to create humidity.',
    isBooked: false,
    img: <img src={philodendron} alt="" width="100px" />,
  },
  {
    _id: '4',
    name: 'Aglaonema Chinese Evergreen',
    fact: ' The NASA Clean Air Study determined that the species modestum of this plant genus was effective at removing common household air toxins formaldehyde and benzene. ',
    water:
      ' Water your Aglaonema when the top 50% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer. ',
    spot: 'The plant can be placed near a window on the west or east, as long as there is 1 to 2 meters space between the plant and the window, so that it still catches some shade. Calatheas thrive in medium to bright indirect light, but can tolerate low indirect light. ',
    info: 'Aglaonema have been grown as luck-bringing ornamental plants in Asia for centuries.',
    isBooked: false,
    img: <img src={aglaonema} alt="" width="100px" />,
  },
  {
    _id: '5',
    name: 'White Fusion Calathea',
    fact: ' The plant has the unique property that it has its leaves folded at night and folds out again during the day.',
    water:
      ' Water every 1-2 weeks, allowing soil to dry out half way down between waterings. Expect to water more often in brighter light and less often in lower light.',
    spot: ' Calatheas thrive in medium to bright indirect light, but can tolerate low indirect light. ',
    info: 'The calathea comes from the tropical forests of South America. In the rain forests they grow in the shade of trees and other large plants, which is why they are also calles "shade plants".',
    isBooked: false,
    img: <img src={calathea} alt="" width="100px" />,
  },
  {
    _id: '6',
    name: 'Monstera',
    fact: 'The Monstera is the most famous hipster plant and very easy-going.',
    water:
      'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
    spot: 'Thrives in bright to medium indirect light.',
    info: 'Monsteras can be irritating to cats, dogs, and humans if foliage consumed. ',
    isBooked: false,
    img: <img src={monstera} alt="" width="100px" />,
  },
  {
    _id: '7',
    name: 'Moonshine snake plant',
    fact: 'This plant may surprise you with blooming white flowers!',
    water:
      'Being a succulent, this plant does not require much water to stay healthy and thrive. Once a month is enough!',
    spot: 'It enjoys bright indirect light. In low light conditions, the leaves may turn a darker green but keep its silvery sheen.',
    info: 'It is very low maintnance!',
    isBooked: false,
    img: <img src={snake} alt="" width="100px" />,
  },
  {
    _id: '8',
    name: 'False Shamrock (Oxalis)',
    fact: 'False shamrock is among the easiest houseplants to grow and is a unique symbol of luck',
    water: 'Light and frequent watering keeps the plant well-hydrated ',
    spot: 'The plant generally needs bright to moderate light',
    info: 'It is very low maintnance!',
    isBooked: false,
    img: <img src={shamrock} alt="" width="100px" />,
  },
  {
    _id: '9',
    name: 'Nasturtium',
    fact: 'You can eat the whole plant including seeds! Make a flower salad.',
    water: 'Needs to be watered once or twice a week.',
    spot: 'Relishes in full sun!',
    info: 'It is really cute',
    isBooked: false,
    img: <img src={nasturtium} alt="" width="100px" />,
  },
];
export default plantList;
