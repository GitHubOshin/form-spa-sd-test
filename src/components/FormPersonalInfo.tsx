import { Form, FormProps, Select, Input, Button, DatePicker } from 'antd'
import { ChangeEventHandler, FC } from 'react'
import { PREFIX_OPTIONS } from '../constants/fields'
import { savePersistentPersonalForm } from '../utils/persistence-form'

type SubmitHandler<T> = FormProps<T>['onFinish']
type FormPersonalInfoValues = {
  prefix: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  nationality: string
  idCardNumber?: string
  gender: 'ชาย' | 'หญิง' | 'ไม่ระบุ'
  phoneNumber: string
  passportNumber?: string
  expectedSalary: number
}

type FormPersonalInfoProps = {}

const { Option } = Select

const FormPersonalInfo: FC<FormPersonalInfoProps> = (props) => {
  const [form] = Form.useForm<FormPersonalInfoValues>()

  const handleSubmit: SubmitHandler<FormPersonalInfoValues> = (values) => {
    console.log('submit personal information form', values)
    console.log('lastName', values.lastName)
  }

  const handleChangeField: (
    key: keyof FormPersonalInfoValues
  ) => ChangeEventHandler = (key) => {
    return function handleChangeValue() {
      savePersistentPersonalForm(
        form.getFieldsValue(),
        key,
        form.getFieldValue(key)
      )
    }
  }

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <div style={{ display: 'flex', gap: 16 }}>
        <Form.Item
          name="prefix"
          label="คำนำหน้าชื่อ"
          required
          rules={[{ required: true }]}
        >
          <Select
            placeholder="คำ..."
            style={{ width: 80 }}
            onChange={handleChangeField('prefix')}
          >
            {PREFIX_OPTIONS.map(({ value, displayText }) => {
              return (
                <Option key={value} value={value}>
                  {displayText}
                </Option>
              )
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="firstName"
          label="ชื่อจริง"
          required
          rules={[{ required: true }]}
        >
          <Input
            style={{ width: 250 }}
            onChange={handleChangeField('firstName')}
          />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="นามสกุล"
          required
          rules={[{ required: true }]}
        >
          <Input
            style={{ width: 250 }}
            onChange={handleChangeField('lastName')}
          />
        </Form.Item>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Form.Item
          name="dateOfBirth"
          label="วันเกิด"
          required
          rules={[{ required: true }]}
        >
          <DatePicker
            placeholder="เดือน/วัน/ปี"
            format="MM/DD/YYYY"
            // onChange={handleChangeField('dateOfBirth')}
            onChange={(value: any) => {
              savePersistentPersonalForm(
                form.getFieldsValue(),
                'dateOfBirth',
                value
              )
            }}
          />
        </Form.Item>
        <Form.Item
          name="nationality"
          label="สัญชาติ"
          required
          rules={[{ required: true }]}
        >
          <Select
            placeholder="-- กรุณาเลือก --"
            style={{ width: 250 }}
            onChange={handleChangeField('nationality')}
          >
            <Option value="thai">ไทย</Option>
            <Option value="other">อื่นๆ</Option>
          </Select>
        </Form.Item>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <Button>ล้างข้อมูล</Button>
        <Button htmlType="submit">ส่งข้อมูล</Button>
      </div>
    </Form>
  )
}

export default FormPersonalInfo
