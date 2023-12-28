import styled from "styled-components"
import { Icon, Title } from "@/components"


const FaqHeaderLayout = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    gap: 20px;
`

const FaqHeader = () => {
  return (
    <FaqHeaderLayout>
        <Icon src="images/icon-star.svg"/>
        <Title>FAQs</Title>
    </FaqHeaderLayout>
  )
}
export default FaqHeader