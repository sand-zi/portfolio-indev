//Import Images
import athlete from '../assets/images/athlete-small.png';
import goodtimes from '../assets/images/goodtimes-small.png';
import theracer from '../assets/images/theracer-small.png';
import athlete2 from '../assets/images/athlete2.png';
import goodtimes2 from '../assets/images/good-times2.jpg';
import theracer2 from '../assets/images/the-racer2.jpg';

const PROJECTS =
    [
        {
            id: 1,
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/work/the-athlete',
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            id: 2,
            title: 'Good Times',
            mainImg: goodtimes,
            url: '/work/good-times',
            secondaryImg: goodtimes2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
        {
            id: 3,
            title: 'The Racer',
            mainImg: theracer,
            url: '/work/the-racer',
            secondaryImg: theracer2,
            awards: [
                {
                    title: 'Truly A masterpiece',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
                {
                    title: 'It’s okay lmao.',
                    description:
                        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
                },
            ],
        },
    ];



export const projectService = {
    query,
    getById
}


function query() {
    const projects = [...PROJECTS]
    return projects
}


function getById(projId) {
    const project = PROJECTS.find(proj => proj.id === projId)
    return project
}