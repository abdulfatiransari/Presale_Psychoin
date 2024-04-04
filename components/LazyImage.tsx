import { Card, Skeleton } from '@nextui-org/react';
import Image, { ImageProps } from 'next/image'
import React, { useState } from 'react'

const LazyImage = (props: ImageProps) => {
    const [loading, setLoading] = useState(true);
    return (
        <Card >
            <Skeleton isLoaded={!loading} >
                <Image onLoad={() => setLoading(false)} {...props} />
            </Skeleton>
        </Card>
    )
}

export default LazyImage