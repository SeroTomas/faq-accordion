import styled from "styled-components"
import { Icon, Title } from "@/components"


const FaqHeaderLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const FaqHeader = () => {
  return (
    <FaqHeaderLayout>
        <Icon src="/public/images/icon-star.svg"/>
        <Title>FAQs</Title>
    </FaqHeaderLayout>
  )
}
export default FaqHeader