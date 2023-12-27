import styled from "styled-components"
import { QuestionHeader } from "@/components"
import { useState } from "react"


const QuestionLayout = styled.div`
    display: flex;
    flex-direction: column;
`

const Question = () => {

    const [isOpen, setIsOpen] = useState(false);


    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <QuestionLayout>
            <QuestionHeader handleOpen={handleOpen} isOpen />

        </QuestionLayout>
    )
}
export default Question