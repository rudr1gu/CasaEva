interface ContactInfoProps {
    icon: JSX.Element;
    info: string;
}

const ContactInfo = ({ icon, info }: ContactInfoProps) => {
    return (
        <div className="flex items-center gap-3">
            {icon}
            <span className="text-eva-black">{info}</span>
        </div>
    );
}

export default ContactInfo;