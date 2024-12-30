'use client';

import { FastFood, IranianFood } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import 'swiper/css/bundle';
import '../styles/menu.scss';
import createPostersSlider from '@/app/poster-slider';

export function Menu({ eatery, eateryMenu }) {
    const [itemGroup, setItemGroup] = useState(5);

    useEffect(() => {
        const sliderEl = document.querySelector('.posters-slider');
        createPostersSlider(sliderEl);
    }, []);

    return (
        <main className="mx-auto min-h-screen max-w-[450px] overflow-hidden">
            <header className="flex items-center justify-center gap-2 py-4">
                <img
                    src={eatery.logo.replace(
                        'http://gharchkhor-cdn.hope.svc:9000',
                        'https://gharchkhor-cdn.darkube.app'
                    )}
                    className="h-12 w-12 rounded-full object-contain"
                    width={55}
                    height={20}
                    alt=""
                />
                <h1 className="text-xl font-bold">کافه {eatery.name}</h1>
            </header>
            <div className="flex gap-1 overflow-auto px-1 py-4">
                {eateryMenu.categories.map((category) => (
                    <Button
                        key={category.id}
                        onClick={() => setItemGroup(category.id)}
                        variant={itemGroup === category.id ? 'default' : 'grey'}
                    >
                        {category.id === 6 ? <FastFood /> : <IranianFood />}
                        {category.name}
                    </Button>
                ))}
            </div>
            <div dir="ltr" className="px-2">
                <div className="posters-slider">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {eateryMenu.categories
                                .find(({ id }) => itemGroup === id)
                                .items.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <Card
                                            dir="rtl"
                                            data-swiper-parallax-scale="1.1"
                                        >
                                            <CardHeader>
                                                <model-viewer
                                                    className="mx-auto aspect-square h-[280px] h-full w-[280px] w-full rounded-2xl object-cover"
                                                    alt={item.description}
                                                    src={item.image_3d.replace(
                                                        'http://gharchkhor-cdn.hope.svc:9000',
                                                        'https://gharchkhor-cdn.darkube.app'
                                                    )}
                                                    ar
                                                    shadowIntensity="1"
                                                    cameraControls
                                                    touchAction="pan-y"
                                                ></model-viewer>
                                                <CardTitle className="mt-[30px]">
                                                    {item.title}
                                                </CardTitle>
                                                <CardDescription className="mt-4">
                                                    {item.description}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button
                                                    className="mt-4"
                                                    variant="grey"
                                                >
                                                    قیمت: {item.price} تومان
                                                </Button>
                                                <CardDescription className="mt-4">
                                                    ۱۰٪ تخفیف درصورت تگ کردن ما
                                                    در سوشال مدیاتون
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <Button
                variant="white"
                className="fixed bottom-14 left-1/2 z-50 -translate-x-1/2 shadow-[0px_4px_27px_0px_rgba(0,_0,_0,_0.13)]"
            >
                به راست یا چپ بکشید
            </Button>
        </main>
    );
}
