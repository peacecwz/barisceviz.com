import React from "react";

export interface Props {
    title: string;
    link: string;
    type: string;
}

const style = {
    color: "unset"
};

export default class SocialLink extends React.Component<Props> {
    render() {
        const {
            title,
            link,
            type
        } = this.props;
        return (
            <a title={title} href={link} style={style}>
                <i className={`fa fa-${type} fa-2x`}/>
            </a>
        );
    }
}
