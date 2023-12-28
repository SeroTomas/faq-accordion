import styled from "styled-components"
import { Icon } from "@/components"

const QuestionHeaderLayout = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
`

const QuestionTitle = styled.p`
    font-size: 1.5rem;
    text-align: left;
    font-weight: 600;
`

interface Props {
    title: string
    isOpen: boolean
    handleOpen: () => void
}

const QuestionHeader = ({ title, isOpen, handleOpen }: Props) => {

    return (
        <QuestionHeaderLayout onClick={handleOpen}>
            <QuestionTitle >{title}</QuestionTitle>
            {
                isOpen
                    ? <Icon src="images/icon-minus.svg" />
                    : <Icon src="images/icon-plus.svg" />
            }
        </QuestionHeaderLayout>
    )
}
export default QuestionHeader