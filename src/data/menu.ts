import { StaticImageData } from "next/image";
import image1 from '../../public/assets/images/ayam-geprek.jpg';
import image2 from '../../public/assets/images/gado-gado.jpg';

interface MenuItem {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    price: string;
    url: string;
}

const menu: MenuItem[] = [
    {
        id: '1',
        title: 'Ayam Geprek',
        price: 'Rp. 20.000',
        description: `Ayam geprek adalah hidangan ayam goreng yang dihancurkan dan dicampur dengan sambal pedas, memberikan rasa yang gurih dan pedas yang menggugah selera.`,
        image: image1,
        url: '/menu/ayam-geprek'
    },
    {
        id: '2',
        title: 'Gado-Gado',
        price: 'Rp. 15.000',
        description: `Gado-gado adalah salad sayuran Indonesia yang disajikan dengan bumbu kacang yang kaya rasa, menciptakan kombinasi segar dan lezat.`,
        image: image2,
        url: '/menu/ayam-geprek'
    },
    {
        id: '3',
        title: 'Gado-Gado',
        price: 'Rp. 15.000',
        description: `Gado-gado adalah salad sayuran Indonesia yang disajikan dengan bumbu kacang yang kaya rasa, menciptakan kombinasi segar dan lezat.`,
        image: image2,
        url: '/menu/ayam-geprek'
    }
]


export default menu;