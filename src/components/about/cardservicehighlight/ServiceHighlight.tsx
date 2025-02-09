interface ServiceHighlightProps {
    icon: JSX.Element;
    title: string;
    description: string;
}


const ServiceHighlight = ({ icon, title, description }: ServiceHighlightProps) => {
    return (
        <div className="p-6 text-center">
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-serif text-rose-900 mb-2">{title}</h3>
            <p className="text-rose-700">{description}</p>
        </div>
    );
}

export default ServiceHighlight;