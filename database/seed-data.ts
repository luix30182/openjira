interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Inprogress Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusamus deserunt quasi porro blanditiis possimus nihil molestias earum, voluptates hic debitis culpa natus maiores vero enim eaque odit provident? Incidunt?',
      status: 'in-progress',
      createdAt: Date.now()
    },
    {
      description:
        'FINISHED Lorem ipsum dolor sit amet consectetur, adipisicing elit. ero enim eaque odit provident? Incidunt?',
      status: 'finished',
      createdAt: Date.now()
    },
    {
      description:
        'PENDING Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusamus deserunt quasi porro',
      status: 'pending',
      createdAt: Date.now()
    }
  ]
};
