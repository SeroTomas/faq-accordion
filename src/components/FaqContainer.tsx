import { Colors } from "@/utilities"
import styled from "styled-components"
import { FaqHeader, Question } from "."

const FaqLayout = styled.div`
background-color: ${Colors.white};
width: 330px;
padding: 20px;
border-radius: 8px;

`
const QuestionsContainer = styled.div`
    min-height: 440px;

`

const questionElements = [
    {
        id: 1,
        title: `What is Frontend Mentor, and how will help me?`
        ,
        text: "Frontend Mentor offers realistic coding challenges to help developers inprove their frontend coding skills with proyects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        id: 2,
        title: "Is Frontend Mentor free?",
        text: "it's totally free!"
    },
    {
        id: 3,
        title: "Can I use Frontend Mentor proyects in my portfolio?",
        text: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
    },
    {
        id: 4,
        title: "How can I get help if I'm stuck on a challenge?",
        text: "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions."
    }
]

const FaqContainer = () => {
    return (
        <FaqLayout>
            <FaqHeader />
            <QuestionsContainer>
                {
                    questionElements.map(element => <Question title={element.title} text={element.text} key={element.id} />)
                }
            </QuestionsContainer>
        </FaqLayout>
    )
}
export default FaqContainer