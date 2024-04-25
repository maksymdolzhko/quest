
export type TFilterType = | 'all' | 'adventures' | 'mystic' | 'horror' | 'detective' | 'sci-fi';

export const filtersList: {id: TFilterType, title: string }[] = [
    {
        id: "all",
        title: 'All games',
    },
    {
        id: 'adventures',
        title: 'Adventures',
    },
    {
        id: 'mystic',
        title: 'Mystic',
    },
    {
        id: 'horror',
        title: 'Horror',
    },
    {
        id: 'detective',
        title: 'Detective',
    },
    {
        id: 'sci-fi',
        title: 'Sci-Fi',
    }
];