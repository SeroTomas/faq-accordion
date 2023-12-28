import styled from "styled-components"
import { QuestionHeader, Text } from "@/components"
import { useState } from "react"
import { Colors } from "@/utilities"
import { useAutoAnimate } from '@formkit/auto-animate/react'

const QuestionLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid ${Colors.lightPink};
    
    &:last-child{
        border: none;
    }
`

interface Props {
    title: string
    text: string
}

const Question = ({ title, text }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [parent] = useAutoAnimate();

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <QuestionLayout ref={parent} >
            <QuestionHeader handleOpen={handleOpen} isOpen={isOpen} title={title}  />
            {
                isOpen && <Text>{text}</Text> 
            }
        </QuestionLayout>
    )
}
export default Question