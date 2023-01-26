import React from 'react'
import Image from 'next/image';


function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full"
                height={50}
                width={50}
                // src="https://links.papareact.com/1m8"
                src="https://avatars.githubusercontent.com/u/62952080?v=4"
                alt="logo"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    );
}

export default Logo