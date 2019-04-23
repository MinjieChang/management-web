/* eslint-disable react/require-render-return, no-useless-constructor, react/no-multi-comp, react/prop-types */
import React from 'react'
import s from './withSpin.less'
import { SpinerIcon } from '../../iconSvg'

class Spiner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={s.bg}>
                    <div className={s.imgBox}>
                        <div className={s.surname}>
                            <SpinerIcon />
                        </div>
                        <span className={s.text}>加载中...</span>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default function Render(loadingCheckFn) {
    return function Inner(Component) {
        return class InnerCom extends Component {
            constructor(props) {
                super(props)
            }

            render() {
                if (loadingCheckFn(this.props)) {
                    return <Spiner>{super.render()}</Spiner>
                }
                return super.render()
            }
        }
    }
}
