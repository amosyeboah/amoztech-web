export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Samantha Chen',
    role: 'Lead Designer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'David Wilson',
    role: 'Senior Developer',
    image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Emily Zhang',
    role: 'UX Specialist',
    image: 'https://images.pexels.com/photos/3797437/pexels-photo-3797437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export default team;