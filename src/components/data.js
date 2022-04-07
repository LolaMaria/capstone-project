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
    info: 'Growing and taking care of these unique plants is not very difficult at all. They are extremely low maintenance.',
    isBooked: false,
    img: moon_cactus,
    waterIntake: 'weekly',
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
    img: aloevera,
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
    img: philodendron,
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
    img: aglaonema,
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
    img: calathea,
  },
  {
    _id: '6',
    name: 'Monstera',
    fact: 'The Monstera is the most famous hipster plant and it is also very easy-going.',
    water:
      'Water every 1-2 weeks, allowing soil to dry out between waterings. Expect to water more often in brighter light and less often in lower light.',
    spot: 'Thrives in bright to medium indirect light.',
    info: 'Monsteras can be irritating to cats, dogs, and humans if foliage consumed. ',
    isBooked: false,
    img: monstera,
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
    img: snake,
  },
  {
    _id: '8',
    name: 'False Shamrock (Oxalis)',
    fact: 'False shamrock is among the easiest houseplants to grow and is a unique symbol of luck',
    water: 'Light and frequent watering keeps the plant well-hydrated ',
    spot: 'The plant generally needs bright to moderate light',
    info: 'It is very low maintnance!',
    isBooked: false,
    img: shamrock,
  },
  {
    _id: '9',
    name: 'Nasturtium',
    fact: 'You can eat the whole plant including seeds! Make a flower salad.',
    water: 'Needs to be watered once or twice a week.',
    spot: 'Relishes in full sun!',
    info: 'It is really cute',
    isBooked: false,
    img: nasturtium,
  },
  {
    _id: '10',
    name: 'Senecio rowleyanus (string of pearls) ',
    fact: 'String of pearls bloom tiny white flowers with scent like cinnamon. To encourage spring flowers, cut back on watering and keep the plant in a consistent temperature of 60 degree during winter. Cool and dry condition during winter often promote blooming during summer.',
    water:
      'String of Pearls are very sensitive to overwatering, so make sure that you give them just enough water. Recommended amount is once every two weeks.',
    spot: 'Senecio rowleyanus plants need to be placed in a spot where it can get at least 6 to 8 hours of bright, indirect sunlight per day. ',
    info: 'The vegetation of Senecio rowleyanus is somewhat poisonous and should not be consumed.',
    isBooked: false,
  },
  {
    _id: '11',
    name: 'Boston fern',
    fact: 'This fern is also called the sword fern; its fountain of arching makes it very popular ',
    water:
      'From spring to autumn the compost must be kept moist, not wet. Mist regular. In winter let the compost dry out between waterings.',
    spot: 'Place out of direct sunlight in filtered ligth or part shade. A hanging basket ist a good place ',
    info: 'According to NASAs clean air study in 1989, Boston Ferns are a superb choice for an air purifying housplant.',
    isBooked: false,
  },
  {
    _id: '12',
    name: 'Japanese Aralia. Fatsia japonica',
    fact: 'In autumn suprisingly there may appear spherical cream flowers',
    water:
      'Keep the compost moist from spring to autumn and just moist in winter.',
    spot: 'A room in light shade is perfect, dark green leaves need a litte more light ',
    info: 'This plant is a great choice for beginners as it is easy to handle',
    isBooked: false,
  },
  {
    _id: '13',
    name: 'Boat Lily. Tradescantia spathacea',
    fact: 'Small, white flowers appear throughout the year, nestled between the leaves',
    water:
      'mist every day or two and allow the top of compost get dry between watering.',
    spot: 'Set in a bright spot, out of direct sun. It tolerates some shade, may then lose its purple tones ',
    info: 'Purple and green sword shaped leaves make an eye catching bourquet',
    isBooked: false,
  },
  {
    _id: '14',
    name: 'Calla Lily, Zantedeschia species',
    fact: 'All parts of this plant are toxic ',
    water:
      'Keep the compost moist from late spring to summer and almost dry in winter.',
    spot: 'In a warm spot and with filtered sun, planted in a wide pot the calla lily will feel most comfortable ',
    info: 'The Calla Lily was named after the Greek word for beautiful - calla',
    isBooked: false,
  },
  {
    _id: '15',
    name: 'Cape Jasmine, Gardenia jasminoides',
    fact: 'Besides its wonderful look this plant provides you a sweetly scent',
    water:
      'Keep the compost moist and mist the leaves regularly (not the flower). in winter allow the top of the compost to dry.',
    spot: ' Place it in a bright spot, out of direct sun. It needs a temperature of 21-24°C by day, and by night 15-18°C. ',
    info: 'All parts are toxic to pets',
    isBooked: false,
  },
  {
    _id: '16',
    name: 'African Daisy. Gerbera jamesonii.',
    fact: 'The name is because of their tall stems which are topped with colourful, daisy-like blooms. To take care of these beauties ist fairly easy',
    water:
      'From spring to summer they like a moist, not wet compost. In winter the top of the compost should have the time to get dry between waterings.',
    spot: 'Set in a bright, cool, well-ventilated area, out of midday sun in summer. Night temperatur should not drop under 10°-C.',
    info: 'Given them a warm home and enough light, they can not only bloom in summer, but intermittently they will flower all year around',
    isBooked: false,
  },
  {
    _id: '17',
    name: 'Echeveria agavoides',
    fact: 'Echeveria agavoides is a stemless, star-shaped plant that grows up to 20 cm in diameter',
    water:
      'Water moderately at the rate of once every 4-5 days in summer; water every 8-10 days in autumn and spring; in winter reduce watering to a minimum or suspend it if it is very cold.',
    spot: 'Most varieties of Echeveria react badly to cold weather and should be planted in a sunny spot. Potted Echeverias can be placed outside during the summer months but should be kept indoors during the winter.',
    info: ' Echeveria plants often drop their leaves during the winter months. It is advisable to collect fallen leaves, as they can be susceptible to fungal infection',
  },
];
export default plantList;
