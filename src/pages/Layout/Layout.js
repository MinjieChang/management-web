import React from 'react'
import s from './Layout.less'
import Menu from './Menu'

class AppLayout extends React.Component {
    render() {
        return (
            <div className={s.root}>
                <div className={s.menu}>
                    <div className={s.productName}>name</div>
                    <Menu />
                </div>
                <div className={s.content}>
                    <div className={s.contentHeader}>header</div>
                    <div className={s.contentContainer}>
                        <div className={s.childContent}>{this.props.children}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppLayout
