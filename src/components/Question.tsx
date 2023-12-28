import styled from "styled-components"
import { QuestionHeader, Text } from "@/components"
import { useState } from "react"


const QuestionLayout = styled.div`
    display: flex;
    flex-direction: column;
`

interface Props {
    title: string
    text: string
}

const Question = ({ title , text }: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <QuestionLayout>
            <QuestionHeader handleOpen={handleOpen} isOpen title={title} />
            <Text $isOpen={isOpen}>{text}</Text>
        </QuestionLayout>
    )
}
export default Question