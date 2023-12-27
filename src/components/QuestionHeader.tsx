import styled from "styled-components"
import { Icon } from "@/components"

const QuestionHeaderLayout = styled.button`
    outline: none;
    background-color: none;
    display: flex;
`

const QuestionTitle = styled.p`
    font-size: 1.2rem;
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
            <QuestionTitle>{title}</QuestionTitle>
            <Icon src={isOpen ? "/public/images/icon-plus.svg" : "/public/images/icon-minus.svg"}/>
        </QuestionHeaderLayout>
    )
}
export default QuestionHeader