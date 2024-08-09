import { Link } from "expo-router"

export function MediumLink({media, children}) {
    const parts = media.objectType.split('.');   
    let href = `/${parts[1]}/${media.id}`;
    href += media.alias ? `-${media.alias}` : ``;

    return (
        <Link href={href} className="web:font-inherit web:font-size-inherit text-cyan-600 hover:text-cyan-500">
            {children}
        </Link>
    )
}