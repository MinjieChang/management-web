import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Table, Button } from 'antd'

import { withSpin } from 'src/hoc'
import {
    getStaffs as actionGetStaffs,
    namespace,
} from 'src/redux/actions/staff'
import s from './StaffTab.less'

class StaffTab extends React.Component {
    columns = [
        { key: 'name', dataIndex: 'name', title: '姓名' },
        { key: 'age', dataIndex: 'age', title: '年龄' },
        { key: 'sex', dataIndex: 'sex', title: '性别' },
        { key: 'phone', dataIndex: 'phone', title: '电话' },
        { key: 'birth', dataIndex: 'birth', title: '生日' },
        { key: 'address', dataIndex: 'address', title: '居住地址' },
        {
            key: 'department',
            dataIndex: 'department',
            title: '部门',
            width: '60px',
        },
        { key: 'email', dataIndex: 'email', title: '邮箱' },
        { key: 'hireDate', dataIndex: 'hireDate', title: '入职日期' },
    ]

    componentDidMount() {
        const { getStaffs } = this.props
        getStaffs()
    }
    render() {
        const { staffs } = this.props
        return (
            <div className={s.root}>
                <Button type="primary">点我</Button>
                <div>
                    <Table dataSource={staffs} columns={this.columns} />
                </div>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({
            loading: state.loading,
            staffs: state.staff.staffs,
        }),
        dispatch => ({
            getStaffs() {
                return dispatch(actionGetStaffs())
            },
        }),
    ),
    withSpin(({ loading }) => loading[namespace]),
)(StaffTab)
