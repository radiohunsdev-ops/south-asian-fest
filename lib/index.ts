export type TimelineItemType = {
  year: string;
  text: string;
};
export const timelineData: TimelineItemType[] = [
  {
    year: "2009",
    text: "On July 18th 2009 History was made at Confederation Park as 2000 attendees marked their presence at the inaugural South Asian Festival showcasing Arts, Crafts, Culture, Health and Well-being.",
  },
  {
    year: "2010",
    text: "The year 2010 marked the continuation of the vision that OSACA had promised to deliver since its inception.  A festival that had doubled in magnitude was attended by over 4000 attendees and saw more than 40 stalls showcase South Asian delights, while 25 Non-Stop Performances matched the electricity on Stage. ",
  },
  {
    year: "2011",
    text: "In 2011, over 7000 festival attendees visited Confederation Park and felt the festive atmosphere more than ever as they visited 50 stalls and cheered Artists on Stage while feasting the many varieties of food being prepared fresh on site.",
  },
  {
    year: "2012",
    text: "In 2012, the Festival was re-branded as SouthAsianFest and was presented in a 2-Day Format.  The SPLASH! Boat Cruise took place on Friday August 10th with DJ JITEN playing the best in Bollywood and Bhangra.  An all-day outdoor Family-Friendly Festival followed on Saturday August 11th.  YouTube Comedian Jus Reign and R&B Sensation Raghav headlined SouthAsianFest in 2012.",
  },
  {
    year: "2013",
    text: "In 2013, IMRAN KHAN from the Netherlands made his Ottawa Debut.  Record-breaking crowds enjoyed the excitement at the park and IK left Ottawa feeling like the SuperStar that he is..!",
  },
  {
    year: "2014",
    text: "In 2014, UK Based Artist JAY SEAN appeared at Confederation Park and dazzled the crowds with an amazing performance and lyrics that amazed audiences in English, Hindi and Punjabi at Confederation Park. A new level was attained for the attendees and performers on Stage.",
  },
  {
    year: "2015",
    text: "In 2015, UK Based Artist ROACH KILLA provided an amazing performance that included Patois, English, Hindi and Punjabi at Ottawa City Hall. A packed audience danced through the day and stopped to refuel with the vendors offering Samosas, Poutine and Shawarma for a true Canadian experience..!",
  },
  {
    year: "2016",
    text: "In 2016, UK Based Artist ARJUN rocked the crowd with his unique R&B style and ensured his Ottawa debut was an extremely memorable experience…leaving the crowd longing for more as he left the stage in an Ottawa Senators Heritage Jersey and the words “I Love You”.",
  },
  {
    year: "2017",
    text: "2017 marked the Sesquicentennial celebrations for Canada, and SouthAsianFest promoted Ottawa’s Top Talent to the World, while bringing in legendary APACHE INDIAN, PANJABI MC as well as today’s favourites JAZ DHAMI and JoSH for over 20000 attendees to partake in 10 days of festivities, held in partnership with the team from Ottawa 2017 to enjoy Canada’s 150th Birthday celebrations.",
  },
];

export const faqs = [
  {
    question: "What is the time and location of the events?",
    answer:
      "Exact location and details of each event are available on our Homepage and Facebook Page.",
  },
  {
    question: "Who Will Be At The Event?",
    answer:
      "Guests from all age groups and ethnic backgrounds will be present at all events. The mandate for SouthAsianFest is to showcase South Asia to the diaspora as well as the Canadian Mainstream.",
  },
  {
    question: "What Sort Of Performances Will Be On Stage?",
    answer:
      "Guests will have a true glimpse of the Indian Sub-Continent with Folk Dances, Songs and Regional representation of South Asian Arts, Culture and Culinary Delights in the heart of Canada’s Capital.",
  },
  {
    question: "Is There Seating At Ottawa City Hall?",
    answer:
      "There will be minimum seating provided at Ottawa City Hall. Guests are encouraged to bring their folding chairs as well to maximize their experience at MirchMasalaMegaMela!",
  },
  {
    question: "Will It Be Very Loud At The MirchMasalaMela?",
    answer:
      "There will be Music playing on stage. However, you can distance yourself and reduce the impact on your ears by moving farther away from the Stage Area.",
  },

  {
    question: "Where Do I Park My Vehicle?",
    answer:
      "Most of our Events are at Ottawa City Hall, which offers Underground Parking for a very nominal fee (Weekends are Free). Guests may also park at the World Exchange Plaza or avail of street parking which is FREE after 5:30 PM.",
  },
  {
    question: "Will There Be Any Food At The Events?",
    answer: `Dinner will be provided as part of the ticket on the SPLASH! Boat Cruise (Friday August 10th).
Complimentary Snacks are being provided at our events on the following dates (Aug 12, 14, 15, 16).
Food can be purchased from various vendors at the MirchMasalaMegaMela (Aug 17-19).`,
  },
  {
    question: "Is The Event Truly Family-Friendly?",
    answer:
      "Management will make every attempt to reflect a family-friendly environment with the Entertainment and Ambience at SouthAsianFest.",
  },
  {
    question: "Will There Be Washrooms On-Site?",
    answer:
      "Washrooms and Hand Wash sinks will be provided at our events at Ottawa City Hall.",
  },
];

export const slides = [
  {
    id: "1",
    images: [
      { id: "1", url: "/slides/slide1.jpg" },
      { id: "2", url: "/slides/slide2.jpg" },
      { id: "3", url: "/slides/slide3.jpg" },
    ],
  },
  {
    id: "2",
    images: [
      { id: "1", url: "/gall/g1.jpg" },
      { id: "2", url: "/gall/g2.jpg" },
      { id: "3", url: "/gall/g3.jpg" },
      { id: "4", url: "/gall/g4.jpg" },
      { id: "5", url: "/gall/g5.jpg" },
    ],
  },
];

export type Client = {
  name: string;
  logo: string;
  href?: string;
};

export const clients: Client[] = [
  { name: "TD", logo: "/sponsers-new/td1.jpg", href: "https://www.td.com" },
  { name: "Fineqia", logo: "/sponsers-new/a5.jpg" },
  { name: "LIV", logo: "/sponsers-new/a6.png", href: "https://livapartments.com" },
  { name: "ottawa", logo: "/sponsers-new/a3.png", href: "https://livapartments.com" },
  { name: "Akran", logo: "/sponsers-new/a7.jpg" },
  { name: "Human Concern", logo: "/sponsers-new/a9.png", href: "https://hci.org.pk" },
  { name: "Bridlewood", logo: "/sponsers-new/a2.jpg" },
  { name: "Suhaag", logo: "/sponsers-new/a12.jpg" },
  { name: "Aman", logo: "/sponsers-new/a1.jpg" },
  { name: "Masala Mommas", logo: "/sponsers-new/a11.jpg", href: "https://masalamommas.com" },
  { name: "GTM", logo: "/sponsers-new/a8.png" },
  { name: "Royal Star", logo: "/sponsers-new/a10.png", href: "https://royalstarrealty.com" },
  { name: "Fallingbrook", logo: "/sponsers-new/a4.gif", href: "https://masalamommas.com" },
];
