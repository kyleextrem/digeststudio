import { PortableText as PortableTextComponent } from '@portabletext/react';
import { urlFor } from '../lib/sanity';
import Image from 'next/image';

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full h-96 my-8 overflow-hidden rounded-2xl">
                <Image
                    src={urlFor(value).url()}
                    alt="Post image"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-4xl font-heading font-bold mt-12 mb-6">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-3xl font-heading font-bold mt-10 mb-5">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl font-heading font-bold mt-8 mb-4">{children}</h3>,
        normal: ({ children }: any) => <p className="text-lg leading-relaxed mb-6 text-accent/80">{children}</p>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
    },
};

export default function PortableText({ value }: { value: any }) {
    return <PortableTextComponent value={value} components={components} />;
}
