import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="max-h-72 w-auto">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}