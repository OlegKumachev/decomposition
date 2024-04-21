import React, { FC } from 'react';


interface WidgetProps {
    title: string;
    children: React.ReactNode;
}

export const Widget: FC<WidgetProps> = (props) => {
    return (
        <div className="widget">
            <h5 className="widget__title">{props.title}</h5>
            {props.children}
        </div>
    );
};