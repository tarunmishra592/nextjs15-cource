import Image from 'next/image';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your business needs.',
    imageUrl: 'https://picsum.photos/200/300/?blur',
  },
  {
    title: 'Mobile App Development',
    description: 'Innovative mobile applications for iOS and Android platforms.',
    imageUrl: 'https://picsum.photos/200/300/?blur',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration of cloud services to enhance scalability.',
    imageUrl: 'https://picsum.photos/200/300/?blur',
  },
];

export default function Services(){
    return(
        <div className="min-h-screen bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
                <div className="grid gap-8 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}