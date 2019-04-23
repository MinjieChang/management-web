// redux 开发组件实际在开发类
import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { getTalks as actionGetTalks } from 'src/redux/actions/community'

const ShuoShuo = ({ getTalks }) => {
    const [name, setName] = useState('111')
    const [age, setAge] = useState(20)
    const [count, setCount] = useState(0)
    const ref = React.useRef(count)

    useEffect(() => {
        console.log('更新了')
    })

    useEffect(() => {
        ref.current = count
        setTimeout(() => {
            console.log(count)
            console.log(ref.current, 'ref.current')
        }, 1000)
    })

    useEffect(() => {
        getTalks()
    }, [])

    const clickBtn = () => {
        setName('2222')
    }

    return (
        <div>
            shuoshuo55999 <br />
            user: {name}
            age: {age}
            count: {count}
            <p>PreCount: {ref.current}</p>
            <Button onClick={clickBtn}>name</Button>
            <Button onClick={() => setAge(30)}>age</Button>
            <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
        </div>
    )
}

export default connect(
    null,
    dispatch => ({
        getTalks: () => dispatch(actionGetTalks()),
    }),
)(ShuoShuo)
