'use client';

import { Cakes, ColdDrink, HotDrink, Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const items = [
    {
        id: 1,
        name: 'آیس کارامل',
        description:
            'آیتمی پر طرفدار و جذاب برای روزهای گرم و سرد سال. ترکیبی عالی از شیر و قهوه و سیروپ کارامل',
        price: '۱۵۸ هزار تومان',
        discount: '۱۰٪ تخفیف درصورت تگ کردن ما در سوشال مدیاتون',
        image: '/1.png',
    },
];

export default function Menu() {
    const [itemGroup, setItemGroup] = useState<string>('hot-drink');

    return (
        <main className="min-h-screen overflow-hidden">
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
            <div className="p-2">
                {items.map((item, index) => (
                    <TinderCard key={index}>
                        <Card className="">
                            <CardHeader>
                                <CardTitle>آیس کارامل</CardTitle>
                                <CardDescription>
                                    آیتمی پر طرفدار و جذاب برای روزهای گرم و سرد
                                    سال، ترکیبی عالی از شیر و قهوه و سیروپ
                                    کارامل
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="grey">
                                    قیمت: ۱۰۸ هزارتومان
                                </Button>
                                <p>
                                    ۱۰٪ تخفیف درصورت تگ کردن ما در سوشال مدیاتون{' '}
                                </p>
                            </CardContent>
                        </Card>
                    </TinderCard>
                ))}
            </div>
            <Button
                variant="white"
                className="fixed bottom-14 left-1/2 -translate-x-1/2 shadow-[0px_4px_27px_0px_rgba(0,_0,_0,_0.13)]"
            >
                به راست یا چپ بکشید
            </Button>
        </main>
    );
}
