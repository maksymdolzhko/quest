import { filtersList } from "@/constants/filters";
import Link from "next/link";

const hover = 'hover:ring-white/20';
const rounded = 'first:rounded-l-full last:rounded-r-full';

interface IFilters {
    type: string | undefined;
};

export default function Filters({type}: IFilters) {
    
    return (
        <ul className="isolate inline-flex shadow-sm">
            {
                filtersList.map(item => {
                    const isAll = item.id === 'all'; 
                    const isActive = !type ? isAll : type === item.id;
                    const href = `/${ !isAll ? item.id : ''}`;
                    return (
                        <li
                            key={item.id}
                            className={`ring-1 ring-white/10 ${rounded} ${hover} ${ isActive ? 'bg-[#FEC432]' : '' }`}
                        >
                            <Link
                                href={href}
                                className={`px-3 py-1 text-sm leading-6 ${ isActive ? 'text-gray-800' : 'text-white' }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}
