import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher = async (params: {
    url?: string;
    absoluteUrl?: string;
    params?: {
        [key: string]: unknown;
    };
    method?: string;
    headers?: Record<string, string>;
    body?: {
        [key: string]: never;
    };
    sendToken?: boolean;
    lang?: string;
    status?: boolean;
}) => {
    if (!params.url && !params.absoluteUrl) return;

    // @ts-expect-error params error
    const queryString = new URLSearchParams(params.params || {}).toString();
    const url = params.absoluteUrl
        ? `${params.absoluteUrl}?${queryString}`
        : `${process.env.NEXT_PUBLIC_API_URL}${params.url}?${queryString}`;

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...params.headers,
        // ...(Cookies.get('token') &&
        //     (!params.absoluteUrl || params.sendToken) && {
        //         Authorization: `Bearer ${Cookies.get('token')}`,
        //     }),
        ...(params.lang && { language: params.lang }),
    };

    const res = await fetch(url, {
        method: params.method ?? 'GET',
        headers,
        ...(params.body && { body: JSON.stringify(params.body) }),
    });

    if (!res.ok) {
        throw {
            error: {
                ...(await res.json()),
            },
            status: res.status,
        };
    }

    return params.status
        ? { data: await res.json(), status: res.status }
        : res.json();
};
