import { Scissors } from "lucide-react";

interface ServiceCardProps {
    title: string;
    price: string;
    items: string[];
}

const ServiceCard = ({ title, price, items }: ServiceCardProps) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-serif text-rose-900 mb-2">{title}</h3>
            <p className="text-rose-700 font-medium mb-4">{price}</p>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="text-rose-600 flex items-center gap-2">
                        <Scissors className="w-4 h-4" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ServiceCard;