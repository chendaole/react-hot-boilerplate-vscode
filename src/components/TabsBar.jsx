//实现参考 小程序 URL :https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html
import React from 'react';
import './TabsBar.css';

export default class Tabsbar extends React.Component { 
    constructor(props) {
        super(props);
        const { color, selectedColor, backgroundColor, list } = props;
        this.state = {
            color: color || 'black',
            selectedColor: selectedColor || 'white',
            backgroundColor: backgroundColor || 'blue',
            list: list || []
        }
    }

    renderTab(list, index) {
        const { indexUuid, text, iconPath, selectedPath } = list;
        return (
            <div className ='Tab'
                 key={index}>
                <img scr={iconPath} />
                <div>{text}</div>
            </div>
        );
    }
    
    render() {
        const { color, selectedColor, backgroundColor, list } = this.state;
        const tabs = list.map((list, index, arr) => this.renderTab(list, index));
        return (
            <div className="TarsBar">
                {tabs}
            </div>
        );
    }
}