import { FC } from 'react'
import Layout from '../components/layout/Layout'
import FormPersonalInfo from '../components/FormPersonalInfo'

type FormManagementProps = { pageName?: string }

const FormManagement: FC<FormManagementProps> = ({
  pageName = 'การจัดการฟอร์ม'
}) => {
  return (
    <Layout pageName={pageName}>
      <FormPersonalInfo />
    </Layout>
  )
}

export default FormManagement
