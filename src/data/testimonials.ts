export interface Testimonial {
  id: number;
  content: string;
  author: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "amozTech transformed our online presence completely. Their team understood our vision perfectly and delivered a website that not only looks stunning but also performs exceptionally well. Our conversion rates have increased by 40% since launch.",
    author: "Michael Thompson",
    company: "Innovate Tech",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Working with amozTech was an absolute pleasure. They took our vague ideas and turned them into a beautiful, functional website that perfectly represents our brand. Their attention to detail is unmatched.",
    author: "Jennifer Lewis",
    company: "Bloom Boutique",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "The mobile app amozTech designed for us has received overwhelmingly positive feedback from our users. Their UI/UX expertise made complex features intuitive and accessible. I couldn't recommend them more highly.",
    author: "Robert Chen",
    company: "HealthPlus",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default testimonials;