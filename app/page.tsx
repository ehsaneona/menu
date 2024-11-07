'use client';

import { Cakes, ColdDrink, HotDrink, Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import 'swiper/css/bundle';
import './styles/menu.scss';
import createPostersSlider from '@/app/poster-slider';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const items: Record<string, MenuItem[]> = {
    'hot-drink': [
        {
            id: 1,
            name: 'آیس کارامل',
            description:
                'آیتمی پر طرفدار و جذاب برای روزهای گرم و سرد سال. ترکیبی عالی از شیر و قهوه و سیروپ کارامل',
            price: 158,
            image: '/items/1.png',
        },
        {
            id: 2,
            name: 'آیس لاته',
            description:
                'آیتمی پر طرفدار و جذاب برای روزهای گرم و سرد سال. ترکیبی عالی از شیر و قهوه و سیروپ کارامل',
            price: 100,
            image: '/items/1.png',
        },
        {
            id: 3,
            name: 'آیس آمریکانو',
            description:
                'آیتمی پر طرفدار و جذاب برای روزهای گرم و سرد سال. ترکیبی عالی از شیر و قهوه و سیروپ کارامل',
            price: 155,
            image: '/items/1.png',
        },
    ],
    'cold-drink': [],
    cakes: [],
};

export default function Menu() {
    const [itemGroup, setItemGroup] = useState<keyof typeof items>('hot-drink');

    useEffect(() => {
        const sliderEl = document.querySelector('.posters-slider');
        createPostersSlider(sliderEl);
    }, []);

    return (
        <main className="mx-auto min-h-screen max-w-[450px] overflow-hidden">
            <header className="flex items-center justify-center gap-2 py-4">
                <Logo />
                <h1 className="text-xl font-bold">کافه‌ ایس</h1>
            </header>
            <div className="flex gap-1 overflow-auto px-1 py-4">
                <Button
                    onClick={() => setItemGroup('hot-drink')}
                    variant={itemGroup === 'hot-drink' ? 'default' : 'grey'}
                >
                    <HotDrink />
                    نوشیدنی‌های گرم
                </Button>
                <Button
                    onClick={() => setItemGroup('cold-drink')}
                    variant={itemGroup === 'cold-drink' ? 'default' : 'grey'}
                >
                    <ColdDrink />
                    نوشیدنی‌های سرد
                </Button>
                <Button
                    onClick={() => setItemGroup('cakes')}
                    variant={itemGroup === 'cakes' ? 'default' : 'grey'}
                >
                    <Cakes />
                    کیک
                </Button>
            </div>
            <div dir="ltr" className="px-2">
                <div className="posters-slider">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {items[itemGroup].map((item, index) => (
                                <div key={index} className="swiper-slide">
                                    <Card
                                        dir="rtl"
                                        data-swiper-parallax-scale="1.1"
                                    >
                                        <CardHeader>
                                            <Image
                                                src={item.image}
                                                className="aspect-square h-full w-full rounded-2xl object-cover"
                                                width={280}
                                                height={280}
                                                alt="محصول"
                                            />
                                            <CardTitle className="mt-[30px]">
                                                {item.name}
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
                                                قیمت: {item.price} هزار تومان
                                            </Button>
                                            <CardDescription className="mt-4">
                                                ۱۰٪ تخفیف درصورت تگ کردن ما در
                                                سوشال مدیاتون
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
