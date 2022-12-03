import images from './images';

const wines = [
  {
    title: 'Mow',
    price: '$50/Sq Ac',
  },
  {
    title: 'Weed Wack',
    price: '$1/Foot',
  },
  {
    title: 'Mulch',
    price: '$150/Sq Ac',
  },
  {
    title: 'Fertalize',
    price: '$15/Sq Ac',
  },
];

const cocktails = [
  {
    title: 'Pool Care',
    price: '$20',
  },
  {
    title: "Pavers",
    price: '$160',
  },
  {
    title: 'Stone Work',
    price: '$100',
  },
  {
    title: 'Power Wash',
    price: '$30',
  },

];

const awards = [
  {
    imgUrl: images.award05,
    title: 'Personal Touch',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Local To The Comunity',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Polite and Helpful',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Customer Service',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
