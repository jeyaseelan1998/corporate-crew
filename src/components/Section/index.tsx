import React from 'react'

interface Props {
    tag?: string;
    children?: React.ReactNode;
}

const Section = ({ tag = "section", children }: Props) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Tag: any = tag;
    return (
        <Tag>
            {children}
        </Tag>
    )
}

export default Section;