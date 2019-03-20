import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Table, Button, Modal, Row, Col, Input, Form } from 'antd'

import { withSpin } from 'src/hoc'
import { namespace, getStaffs as actionGetStaffs, addStaffs as actionAddStaffs } from 'src/redux/actions/staff'
import s from './StaffTab.less'

class StaffTab extends React.Component {
    state = { visible: false, confirmLoading: false }

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

    handleAddClick = () => {
        this.setState({ visible: true })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (err) return
            this.setState({ confirmLoading: true })
            const { done } = await this.props.addStaffs(values)
            if (done) {
                this.setState({ confirmLoading: true, visible: false })
            }
        })
    }

    getFields = () => {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        }
        return this.columns.map(({ key, title }, i) => {
            return (
                <Col span={12} key={i}>
                    <Form.Item label={title} {...formItemLayout}>
                        {getFieldDecorator(key, {
                            rules: [
                                {
                                    required: true,
                                    message: `请输入${title}`,
                                },
                            ],
                        })(<Input placeholder={`请输入${title}`} />)}
                    </Form.Item>
                </Col>
            )
        })
    }

    render() {
        const { staffs } = this.props
        return (
            <div className={s.root}>
                <Button className="mb10" type="primary" onClick={this.handleAddClick}>
                    添加
                </Button>
                <div>
                    <Table dataSource={staffs} columns={this.columns} />
                </div>
                <Modal
                    title="添加员工"
                    width="600px"
                    visible={this.state.visible}
                    onOk={this.onSubmit}
                    onCancel={() => this.setState({ visible: false })}
                    confirmLoading={this.state.confirmLoading}
                >
                    <Form onSubmit={this.onSubmit}>
                        <Row gutter={24}>{this.getFields()}</Row>
                    </Form>
                </Modal>
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
            addStaffs(value) {
                return dispatch(actionAddStaffs(value))
            },
        }),
    ),
    Form.create({ name: 'addStaff' }),
    withSpin(({ loading }) => loading[namespace]),
)(StaffTab)
